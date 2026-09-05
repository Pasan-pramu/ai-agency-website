"use client";

import { useLayoutEffect, useRef, useState } from "react";

/*
 * Bootstrap 5.3.3 Collapse, as a hook. Shared by the two accordions in scope:
 * the FAQ accordion (faqs.html, #accordionOne) and the project accordion
 * (index.html, #projectAccordion). Both use data-bs-parent, so both behave as
 * accordions — opening one panel closes whichever sibling is open.
 *
 * THE TRAP, in both places: the open/closed indicator is styled off the
 * *attribute*, not a class —
 *   style.css:5160  .accordion-card .accordion-header .accordion-title[aria-expanded=true]:after
 *   style.css:4506  .orbia-project-item.style-one .project-header[aria-expanded=true]:after
 * so aria-expanded must be toggled at exactly the moment Bootstrap toggles it:
 * at the start of show()/hide(), before the height transition runs.
 *
 * Bootstrap's sequence, reproduced step for step:
 *
 *   show(el):  remove .collapse, add .collapsing, style.height = 0, set
 *              aria-expanded=true and drop .collapsed on the trigger, read
 *              scrollHeight (Bootstrap's reflow — it commits height:0), set
 *              style.height = scrollHeight, and after the transition remove
 *              .collapsing, add .collapse .show, clear height.
 *   hide(el):  style.height = getBoundingClientRect().height, force a reflow
 *              *while still .collapse.show*, then add .collapsing and remove
 *              .collapse and .show, set aria-expanded=false and add .collapsed,
 *              clear style.height so it animates to .collapsing's height:0, and
 *              after the transition swap .collapsing for .collapse.
 *
 * The height choreography therefore straddles the render: the hide-side measure
 * and reflow happen in the click handler, before React swaps the class; the
 * show-side happens in a layout effect straight after it.
 *
 * Duration is read off the bundled bootstrap.min.css, not from memory:
 *   .collapsing { height:0; overflow:hidden; transition: height .35s ease }
 *
 * Bootstrap ignores clicks while a panel is mid-transition (_isTransitioning),
 * and so does this. `.collapsed` is absent from both sources' markup and
 * Bootstrap only adds it once an instance is constructed — under the data-api,
 * on the first click — so `interacted` gates it and the server HTML stays
 * byte-identical to the source.
 */

const COLLAPSE_MS = 350; // .collapsing -> transition: height .35s ease

type Phase = "shown" | "hidden" | "showing" | "hiding";

export function useCollapseAccordion(ids: string[], initialOpen: string | null) {
  const [phases, setPhases] = useState<Record<string, Phase>>(() =>
    Object.fromEntries(ids.map((id) => [id, id === initialOpen ? "shown" : "hidden"])),
  );
  const [interacted, setInteracted] = useState(false);

  const panels = useRef<Record<string, HTMLDivElement | null>>({});
  const timers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const prev = useRef(phases);

  useLayoutEffect(() => {
    for (const key of Object.keys(phases)) {
      if (phases[key] === prev.current[key]) continue;
      const el = panels.current[key];
      if (!el) continue;

      if (phases[key] === "showing") {
        el.style.height = "0px";
        const target = el.scrollHeight; // reflow: commits height:0
        el.style.height = `${target}px`;
      } else {
        // "hiding" was measured and reflowed in the click handler, so clearing
        // the height animates it down to .collapsing's height:0. "shown" and
        // "hidden" are the settled states; Bootstrap clears height there too.
        el.style.height = "";
      }
    }
    prev.current = phases;
  }, [phases]);

  useLayoutEffect(() => {
    const pending = timers.current;
    return () => Object.values(pending).forEach(clearTimeout);
  }, []);

  const settle = (key: string, to: Phase) => {
    clearTimeout(timers.current[key]);
    timers.current[key] = setTimeout(() => {
      setPhases((p) => ({ ...p, [key]: to }));
    }, COLLAPSE_MS);
  };

  const onToggle = (key: string) => {
    const current = phases[key];
    if (current === "showing" || current === "hiding") return; // _isTransitioning

    setInteracted(true);

    const prepHide = (k: string) => {
      const el = panels.current[k];
      if (!el) return;
      el.style.height = `${el.getBoundingClientRect().height}px`;
      el.getBoundingClientRect(); // reflow
    };

    if (current === "shown") {
      prepHide(key);
      setPhases((p) => ({ ...p, [key]: "hiding" }));
      settle(key, "hidden");
      return;
    }

    const openSibling = Object.keys(phases).find(
      (k) => k !== key && phases[k] === "shown",
    );
    if (openSibling) {
      prepHide(openSibling);
      settle(openSibling, "hidden");
    }
    setPhases((p) => ({
      ...p,
      ...(openSibling ? { [openSibling]: "hiding" as Phase } : {}),
      [key]: "showing" as Phase,
    }));
    settle(key, "shown");
  };

  const isExpanded = (id: string) =>
    phases[id] === "shown" || phases[id] === "showing";

  const panelClass = (id: string) =>
    phases[id] === "showing" || phases[id] === "hiding"
      ? "accordion-collapse collapsing"
      : phases[id] === "shown"
        ? "accordion-collapse collapse show"
        : "accordion-collapse collapse";

  const panelRef = (id: string) => (el: HTMLDivElement | null) => {
    panels.current[id] = el;
  };

  return { interacted, onToggle, isExpanded, panelClass, panelRef };
}
