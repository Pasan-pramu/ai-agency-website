"use client";

import { useEffect, useRef, useState } from "react";

/*
 * theme.js:96-99:
 *   $(window).on('load', function () {
 *       $('.preloader').delay(500).fadeOut(500);
 *   })
 *
 * jQuery fadeOut animates opacity to 0 over 500ms with the default "swing"
 * easing and then sets display:none. The 500ms delay starts at window `load`
 * (all images and stylesheets done), not DOMContentLoaded — if the document has
 * already loaded by the time this mounts, the timer starts immediately, which
 * is what jQuery's own `load` binding does too.
 *
 * Markup: index.html:44-49, rendered exactly.
 */

const swing = (p: number) => 0.5 - Math.cos(p * Math.PI) / 2;

export default function Preloader() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let raf = 0;
    let delayTimer: ReturnType<typeof setTimeout>;

    const fadeOut = () => {
      const el = ref.current;
      if (!el) return;
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / 500);
        el.style.opacity = String(1 - swing(p));
        if (p < 1) raf = requestAnimationFrame(step);
        else setGone(true);
      };
      raf = requestAnimationFrame(step);
    };

    const begin = () => {
      delayTimer = setTimeout(fadeOut, 500);
    };

    if (document.readyState === "complete") begin();
    else window.addEventListener("load", begin);

    return () => {
      window.removeEventListener("load", begin);
      clearTimeout(delayTimer);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="preloader" ref={ref} style={gone ? { display: "none" } : undefined}>
      <div className="loading-wrapper">
        <div className="loading"></div>
        <div id="loading-icon">
          <img src="/assets/images/loader.png" alt="loader" />
        </div>
      </div>
    </div>
  );
}
