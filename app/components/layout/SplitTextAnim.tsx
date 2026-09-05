"use client";

import type { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

/*
 * theme.js:397-421 — the .text-anm heading reveal.
 *
 *   let staggerAmount = 0.01, translateXValue = 40, delayValue = .5,
 *       easeType = "power2.out",
 *       animatedTextElements = document.querySelectorAll('.text-anm');
 *   animatedTextElements.forEach((element) => {
 *     let animationSplitText = new SplitText(element, { type: "chars, words" });
 *     gsap.from(animationSplitText.chars, {
 *       duration: 1, delay: delayValue, x: translateXValue, autoAlpha: 0,
 *       stagger: staggerAmount, ease: easeType,
 *       scrollTrigger: { trigger: element, start: "top 85%" },
 *     });
 *   });
 *
 * Every option is carried over unchanged.
 *
 * SPLITTEXT API IN GSAP 3.13+: the plugin was rewritten when it went free, but
 * the call signature this template uses is unaffected. Verified against the
 * installed 3.15.0 source: `class _SplitText { constructor(elements, config) }`
 * still exists, `type: "chars, words"` still parses, and `.chars` / `.words` /
 * `.lines` are still populated arrays. The new `SplitText.create()` factory is
 * the documented preference and there are new options (`autoSplit`, `mask`,
 * `aria`), but none is required and none changes behaviour by default. So
 * nothing about the template's call needed adjusting.
 *
 * One thing that IS new in 3.13+: SplitText registers itself with the active
 * gsap.context (SplitText.js calls `_context(this)`), so useGSAP's cleanup
 * reverts the split and restores the original text nodes on unmount. Under the
 * old plugin that had to be done by hand.
 *
 * Runs once for the whole shell rather than per page, because theme.js selects
 * globally with document.querySelectorAll and .text-anm appears in both <main>
 * and the shared footer.
 *
 * Exported as a hook, not a component, and called from SmoothScroll. As a child
 * component it emitted a GSAP "Invalid scope" warning per tween — roughly 400 of
 * them — because React attaches a parent's ref only after its children's layout
 * effects have already run, so #smooth-content's ref was still null when
 * useGSAP built its context. Calling the hook from the component that owns the
 * ref means the element is attached by the time the effect runs.
 */

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export function useTextAnm(scope: RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      const staggerAmount = 0.01;
      const translateXValue = 40;
      const delayValue = 0.5;
      const easeType = "power2.out";
      const animatedTextElements = document.querySelectorAll(".text-anm");

      animatedTextElements.forEach((element) => {
        const animationSplitText = new SplitText(element, {
          type: "chars, words",
        });
        gsap.from(animationSplitText.chars, {
          duration: 1,
          delay: delayValue,
          x: translateXValue,
          autoAlpha: 0,
          stagger: staggerAmount,
          ease: easeType,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        });
      });
    },
    { scope },
  );
}
