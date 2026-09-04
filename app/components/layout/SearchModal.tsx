"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useShell } from "./ShellProvider";

/*
 * Search modal — the first of the four Bootstrap-JS replacements (AGENTS.md
 * rule 10). Source markup: index.html:32-43 (target) and :128 (trigger).
 *
 * Reproduces Bootstrap 5.3.3's Modal, because the template's CSS is keyed on
 * the classes and attributes Bootstrap toggles:
 *
 *   show:  body gets .modal-open plus inline overflow:hidden and padding-right
 *          (scrollbar width); <div class="modal-backdrop fade"> is appended to
 *          <body>, reflowed, then given .show; only once that 150ms fade is
 *          done does the modal get style="display:block", lose aria-hidden and
 *          gain aria-modal="true" and role="dialog", and then .show — the
 *          .modal-dialog transform transition runs for 300ms after that.
 *   hide:  .show comes off the modal immediately, 300ms later display:none plus
 *          aria-hidden="true" with aria-modal and role removed, the backdrop
 *          loses .show, and 150ms after that the backdrop element and the body
 *          class and inline styles are removed.
 *
 * Durations are read off the bundled bootstrap.min.css, not from memory:
 *   .fade                     -> transition: opacity .15s linear
 *   .modal.fade .modal-dialog -> transition: transform .3s ease-out
 *
 * Note on the body scroll lock: Bootstrap sets inline overflow:hidden, but
 * style.css:456 defines .modal-open { overflow:auto !important; padding-right:0
 * !important }, which deliberately beats it, so the page still scrolls behind
 * the overlay. That is the template's intended behaviour; the inline styles are
 * still written so the DOM matches Bootstrap's.
 *
 * The source markup carries no tabindex on #search-modal, so Bootstrap's
 * element.focus() would be a no-op on it. That is preserved (rule 4 forbids
 * adding one); the focusin trap below still keeps focus inside the dialog.
 *
 * Every state write happens inside a rAF or a timeout, never synchronously in
 * the effect body — that is both what the transitions need (mount at opacity 0,
 * commit, then add .show) and what keeps react-hooks/set-state-in-effect quiet.
 */

const BACKDROP_MS = 150; // .fade                     -> opacity .15s
const DIALOG_MS = 300; // .modal.fade .modal-dialog -> transform .3s

export default function SearchModal() {
  const { searchOpen, closeSearch } = useShell();

  const [displayed, setDisplayed] = useState(false); // style="display:block"
  const [shownLatched, setShownLatched] = useState(false); // .show on the modal
  const [backdropPresent, setBackdropPresent] = useState(false);
  const [backdropShow, setBackdropShow] = useState(false);
  const [everClosed, setEverClosed] = useState(false);

  // .show comes off the modal the instant hide() is called, so it is derived
  // rather than cleared by a timer.
  const shown = shownLatched && searchOpen;

  const modalRef = useRef<HTMLDivElement | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const frames = useRef<number[]>([]);
  const hasOpened = useRef(false);

  const after = (ms: number, fn: () => void) => {
    timers.current.push(setTimeout(fn, ms));
  };
  const nextFrame = (fn: () => void) => {
    frames.current.push(requestAnimationFrame(fn));
  };
  const clearPending = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    frames.current.forEach(cancelAnimationFrame);
    frames.current = [];
  };

  // Bootstrap's ScrollBarHelper: measure the scrollbar, hide overflow, pad.
  const lockBody = () => {
    const width = window.innerWidth - document.documentElement.clientWidth;
    const body = document.body;
    body.classList.add("modal-open");
    body.style.overflow = "hidden";
    const current = parseFloat(window.getComputedStyle(body).paddingRight) || 0;
    body.style.paddingRight = `${current + width}px`;
  };
  const unlockBody = () => {
    const body = document.body;
    body.classList.remove("modal-open");
    body.style.overflow = "";
    body.style.paddingRight = "";
  };

  useEffect(() => {
    clearPending();

    if (searchOpen) {
      hasOpened.current = true;
      lockBody();
      // Insert the backdrop at opacity 0, let the browser commit it, then add
      // .show so the opacity transition actually runs — Bootstrap's
      // insert / reflow / addClass, expressed as two frames.
      nextFrame(() => {
        setBackdropPresent(true);
        nextFrame(() => setBackdropShow(true));
      });
      // _showElement is the backdrop's completion callback, so the modal is not
      // displayed at all until the 150ms backdrop fade has finished.
      after(BACKDROP_MS, () => {
        setDisplayed(true);
        nextFrame(() => setShownLatched(true));
      });
    } else if (hasOpened.current) {
      after(DIALOG_MS, () => {
        setDisplayed(false);
        setShownLatched(false);
        setEverClosed(true);
        setBackdropShow(false);
        after(BACKDROP_MS, () => {
          setBackdropPresent(false);
          unlockBody();
        });
      });
    }

    return clearPending;
  }, [searchOpen]);

  useEffect(() => () => unlockBody(), []);

  // Bootstrap: keydown.dismiss -> Escape closes when `keyboard` is true (default).
  useEffect(() => {
    if (!searchOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSearch();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [searchOpen, closeSearch]);

  // Bootstrap's FocusTrap: a focusin outside the dialog is pulled back to the
  // first (or last, when shift-tabbing) focusable child.
  useEffect(() => {
    if (!searchOpen) return;
    let shiftTab = false;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") shiftTab = e.shiftKey;
    };
    const onFocusIn = (e: FocusEvent) => {
      const el = modalRef.current;
      if (!el) return;
      const target = e.target as Node | null;
      if (target === document || target === el || el.contains(target)) return;
      const focusable = el.querySelectorAll<HTMLElement>(
        'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      (shiftTab ? focusable[focusable.length - 1] : focusable[0]).focus();
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocusIn);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, [searchOpen]);

  return (
    <>
      {/*====== Search Modal From ======*/}
      <div
        ref={modalRef}
        className={`modal fade search-modal${shown ? " show" : ""}`}
        id="search-modal"
        style={
          displayed
            ? { display: "block" }
            : everClosed
              ? { display: "none" }
              : undefined
        }
        {...(displayed
          ? { "aria-modal": true as const, role: "dialog" }
          : everClosed
            ? { "aria-hidden": true as const }
            : {})}
        onClick={(e) => {
          // Bootstrap dismisses only when the click lands on .modal itself,
          // not on anything inside .modal-dialog.
          if (e.target === e.currentTarget) closeSearch();
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form>
              <div className="form-group">
                <input
                  type="search"
                  className="form_control"
                  placeholder="Search here"
                  name="search"
                />
                <label>
                  <i className="fa fa-search"></i>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      {backdropPresent
        ? createPortal(
            <div
              className={`modal-backdrop fade${backdropShow ? " show" : ""}`}
            ></div>,
            document.body,
          )
        : null}
    </>
  );
}
