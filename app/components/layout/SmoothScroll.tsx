"use client";

import { useRef, type ReactNode } from "react";
import { useTextAnm } from "./SplitTextAnim";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

/*
 * theme.js:383-393:
 *   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
 *   ScrollSmoother.create({ smooth: 1, effects: true, smoothTouch: 0.1 });
 *
 * No wrapper divs are added. #smooth-wrapper and #smooth-content already exist
 * in the source markup at index.html:144-145 / about.html:144-145, wrapping
 * <main> and <footer>, and they are reproduced here verbatim — ScrollSmoother's
 * defaults target exactly those two ids.
 *
 * `children` is a prop, so pages passed through stay server components
 * (AGENTS.md rule 8). Plugins are registered once at module scope, and the
 * instance is created inside useGSAP() scoped to the wrapper ref (rule 5), which
 * also reverts it on unmount and on React's StrictMode double-invoke.
 */

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const content = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
      });
    },
    { scope: wrapper },
  );

  /* theme.js runs SplitText over every .text-anm on the page; both <main> and
     the footer contain some, and #smooth-content is their common ancestor. */
  useTextAnm(content);

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content" ref={content}>{children}</div>
    </div>
  );
}
