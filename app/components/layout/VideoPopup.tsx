"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/*
 * theme.js:126-132 — the video modal.
 *
 *   $('.video-popup').magnificPopup({
 *       type: 'iframe',
 *       removalDelay: 300,
 *       mainClass: 'mfp-fade'
 *   });
 *
 * Exactly one element uses it in scope: about.html:277.
 *
 * IMPORTANT FINDING — there is no fade. `mainClass: 'mfp-fade'` puts the class
 * on the backdrop and wrapper, but `mfp-fade` has ZERO rules in the entire
 * template: grep counts 0 in magnific-popup.css, 0 in style.css, 0 in
 * spacings.css. Magnific's docs ship those keyframes as a snippet you paste
 * yourself, and the vendor never did. So the popup appears and disappears
 * instantly; `removalDelay: 300` only holds the (already invisible) nodes in the
 * DOM for 300ms before removing them. That delay is reproduced faithfully rather
 * than replaced with a fade the source does not have — inventing one would
 * change the visual output, and writing the missing keyframes into
 * nextjs-fixes.css would be adding a feature, not patching Next.js.
 *
 * The emitted DOM mirrors Magnific's iframe layout, whose classes
 * magnific-popup.css does style: .mfp-bg, .mfp-wrap.mfp-close-btn-in
 * .mfp-auto-cursor, .mfp-container.mfp-iframe-holder, .mfp-content,
 * .mfp-iframe-scaler, .mfp-close, .mfp-iframe. `mfp-ready` goes on after mount
 * and is swapped for `mfp-removing` on close, as Magnific does.
 *
 * The YouTube URL is rewritten to Magnific's own embed pattern
 * (//www.youtube.com/embed/%id%?autoplay=1). Escape and a click on the wrapper
 * outside .mfp-content both close, matching Magnific's defaults.
 */

const REMOVAL_DELAY = 300;

function embedUrl(href: string) {
  const id = href.match(/[?&]v=([^&]+)/)?.[1];
  return id ? `//www.youtube.com/embed/${id}?autoplay=1` : href;
}

export default function VideoPopup({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [removing, setRemoving] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (!open) return;
    // mfp-ready lands one frame after mount, the way Magnific adds it after
    // inserting the nodes. `mounted` is already false here — close() resets it —
    // so the state write stays inside the rAF and never runs synchronously in
    // the effect body.
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, [open]);

  const close = () => {
    setRemoving(true);
    timer.current = setTimeout(() => {
      setOpen(false);
      setRemoving(false);
      setMounted(false);
    }, REMOVAL_DELAY);
  };

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const state = removing ? " mfp-removing" : mounted ? " mfp-ready" : "";

  return (
    <>
      <a
        href={href}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        {children}
      </a>
      {open
        ? createPortal(
            <>
              <div className={`mfp-bg mfp-fade${state}`}></div>
              <div
                className={`mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade${state}`}
                tabIndex={-1}
                style={{ overflow: "hidden auto" }}
                onClick={(e) => {
                  if (e.target === e.currentTarget) close();
                }}
              >
                <div
                  className="mfp-container mfp-s-ready mfp-iframe-holder"
                  onClick={(e) => {
                    if (e.target === e.currentTarget) close();
                  }}
                >
                  <div className="mfp-content">
                    <div className="mfp-iframe-scaler">
                      <button
                        title="Close (Esc)"
                        type="button"
                        className="mfp-close"
                        onClick={close}
                      >
                        ×
                      </button>
                      <iframe
                        className="mfp-iframe"
                        src={embedUrl(href)}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </>,
            document.body,
          )
        : null}
    </>
  );
}
