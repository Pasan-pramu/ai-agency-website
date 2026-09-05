"use client";

import { useLayoutEffect, useRef, useState } from "react";

/*
 * FAQ accordion — the second Bootstrap-JS replacement (AGENTS.md rule 10).
 * Source: faqs.html:182-234, four `.accordion-card` items inside
 * `#accordionOne`, with `#collapse2` shipping open (`collapse show` +
 * `aria-expanded="true"`).
 *
 * THE TRAP: style.css:5160 is
 *     .accordion-card .accordion-header .accordion-title[aria-expanded=true]:after
 * so the open/closed indicator is driven off the *attribute*, not a class. The
 * attribute is toggled here at exactly the moment Bootstrap toggles it — at the
 * start of show()/hide(), before the height transition runs.
 *
 * Bootstrap 5.3.3 Collapse, reproduced step for step:
 *
 *   show(el):  remove .collapse, add .collapsing, style.height = 0,
 *              set aria-expanded=true and drop .collapsed on the trigger,
 *              read scrollHeight (this is Bootstrap's reflow — it commits
 *              height:0), set style.height = scrollHeight, and after the
 *              transition remove .collapsing, add .collapse .show, clear height.
 *   hide(el):  style.height = getBoundingClientRect().height, force a reflow
 *              *while the element is still .collapse.show*, then add .collapsing
 *              and remove .collapse and .show, set aria-expanded=false and add
 *              .collapsed, clear style.height so it animates to .collapsing's
 *              height:0, and after the transition swap .collapsing for .collapse.
 *
 * The height choreography therefore straddles the render: the hide-side
 * measure+reflow happens in the click handler, before React swaps the class;
 * the show-side happens in a layout effect, straight after it.
 *
 * Duration is read off the bundled bootstrap.min.css, not from memory:
 *     .collapsing { height:0; overflow:hidden; transition: height .35s ease }
 *
 * `data-bs-parent="#accordionOne"` gives accordion behaviour: opening one panel
 * hides whichever sibling is open. Bootstrap ignores clicks while a panel is
 * mid-transition (`_isTransitioning`), and so does this.
 *
 * `.collapsed` is absent from the source markup and Bootstrap only adds it once
 * an instance is constructed — which, under the data-api, is on the first click.
 * `interacted` reproduces that, so the server HTML stays byte-identical to the
 * source and the class appears only after the user touches the accordion.
 */

const COLLAPSE_MS = 350; // .collapsing -> transition: height .35s ease

type Phase = "shown" | "hidden" | "showing" | "hiding";

export type FaqItem = {
  id: string; // e.g. "collapse1"
  question: string;
  answer: string;
  open?: boolean;
};

export default function FaqAccordion({
  id,
  items,
  ...rest
}: {
  id: string;
  items: FaqItem[];
  [key: `data-${string}`]: string;
}) {
  const [phases, setPhases] = useState<Record<string, Phase>>(() =>
    Object.fromEntries(items.map((i) => [i.id, i.open ? "shown" : "hidden"])),
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
        // "hiding" was already measured and reflowed in the click handler, so
        // clearing the height animates it down to .collapsing's height:0.
        // "shown" / "hidden" are the settled states; Bootstrap clears height.
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
    // Bootstrap's _isTransitioning guard: mid-flight clicks are dropped.
    if (current === "showing" || current === "hiding") return;

    setInteracted(true);

    /* Bootstrap's hide(): measure and reflow while the panel is still
       .collapse.show, i.e. before the class swap this render will cause. */
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

  const panelClass = (phase: Phase) =>
    phase === "showing" || phase === "hiding"
      ? "accordion-collapse collapsing"
      : phase === "shown"
        ? "accordion-collapse collapse show"
        : "accordion-collapse collapse";

  return (
    /*====== Accordion  ======*/
    <div className="accordion" id={id} {...rest}>
      {items.map((item) => {
        const phase = phases[item.id];
        const expanded = phase === "shown" || phase === "showing";
        return (
          /*====== Accordion Item  ======*/
          <div className="accordion-card style-one mb-25" key={item.id}>
            <div className="accordion-header">
              <h5
                className={`accordion-title${interacted && !expanded ? " collapsed" : ""}`}
                data-bs-toggle="collapse"
                data-bs-target={`#${item.id}`}
                aria-expanded={expanded}
                onClick={() => onToggle(item.id)}
              >
                {item.question}
              </h5>
            </div>
            <div
              id={item.id}
              className={panelClass(phase)}
              data-bs-parent={`#${id}`}
              ref={(el) => {
                panels.current[item.id] = el;
              }}
            >
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
