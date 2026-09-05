"use client";

import Link from "next/link";
import { useCollapseAccordion } from "./useCollapse";

/*
 * Project accordion — the fourth and last Bootstrap-JS replacement
 * (AGENTS.md rule 10). Source: index.html:322-379, three `.orbia-project-item`
 * inside `#projectAccordion`, with `#collapse2` shipping open
 * (`collapse show` + `aria-expanded="true"`). The Addendum records this as the
 * only project accordion on the site.
 *
 * THE TRAP: style.css:4506 is
 *     .orbia-project-item.style-one .project-header[aria-expanded=true]:after
 * — the same attribute-driven indicator the FAQ accordion has at :5160. The
 * shared hook toggles the attribute, not just a class.
 *
 * Differences from the FAQ accordion, all markup rather than behaviour:
 *   - the group root is `.project-wrapper#projectAccordion`, not `.accordion`
 *   - the trigger is a `<div class="project-header">` carrying role="button"
 *     already in the source, so nothing is injected there; the FAQ trigger is a
 *     bare <h5> with no role
 *   - each item carries its own data-aos, where the FAQ items carry none and the
 *     group root carries one instead
 * The collapse choreography and the 350ms duration are identical, which is why
 * both use useCollapseAccordion.
 *
 * The "View Details" icon really is `far fa arrow-right` in the source — a
 * broken Font Awesome class (missing hyphen, so no glyph renders). Carried over
 * verbatim rather than corrected.
 */

export type ProjectItem = {
  id: string; // "collapse1"
  eyebrow: string;
  title: string;
  img: number;
  duration: string;
  open?: boolean;
};

const BODY =
  "We provide customized solutions tailored to the specific needs and goals of their clients. This can include website development, mobile app development.";

export default function ProjectAccordion({
  id,
  items,
}: {
  id: string;
  items: ProjectItem[];
}) {
  const initial = items.find((i) => i.open)?.id ?? null;
  const { interacted, onToggle, isExpanded, panelClass, panelRef } =
    useCollapseAccordion(
      items.map((i) => i.id),
      initial,
    );

  return (
    /* Project Wrapper */
    <div className="project-wrapper" id={id}>
      {items.map((item) => {
        const expanded = isExpanded(item.id);
        return (
          /* Orbia Project Item */
          <div
            className="orbia-project-item style-one"
            data-aos="fade-up"
            data-aos-duration={item.duration}
            key={item.id}
          >
            <div
              className={`project-header${interacted && !expanded ? " collapsed" : ""}`}
              role="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${item.id}`}
              aria-expanded={expanded}
              onClick={() => onToggle(item.id)}
            >
              <div className="project-title">
                <span>{item.eyebrow}</span>
                <h3 className="title">{item.title}</h3>
              </div>
            </div>
            <div
              id={item.id}
              className={panelClass(item.id)}
              data-bs-parent={`#${id}`}
              ref={panelRef(item.id)}
            >
              <div className="project-content">
                <img
                  src={`/assets/images/home-one/project/project-img${item.img}.jpg`}
                  alt="project image"
                />
                <p>{BODY}</p>
                <div className="orbia-button">
                  <Link href="/project-details" className="theme-btn gradient-btn">
                    View Details
                    <i className="far fa arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
