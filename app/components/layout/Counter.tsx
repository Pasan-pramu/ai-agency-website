"use client";

import { useEffect, useRef } from "react";

/*
 * theme.js:358-378 — the counters.
 *
 *   if ($('.counter').length) {
 *     const observer = new IntersectionObserver((entries, observer) => {
 *       entries.forEach(entry => {
 *         if (entry.isIntersecting) {
 *           $(entry.target).counterUp({ delay: 100, time: 4000 });
 *           observer.unobserve(entry.target);
 *         }
 *       });
 *     }, { threshold: 1.0 });
 *     $('.counter').each(function() { observer.observe(this); });
 *   }
 *
 * Threshold 1.0 and the unobserve-after-firing are both preserved, so each
 * counter animates exactly once and only when fully in view.
 *
 * CounterUp 1.0's value sequence is reproduced rather than approximated. Its
 * algorithm is: divisions = time / delay (4000 / 100 = 40); build the sequence
 * parseInt(num / divisions * i) for i = 1..divisions; set the element to '0';
 * then after `delay` ms emit one value every `delay` ms. So "58" counts
 * 0, 1, 2, 4, ... 58 over 4000ms in 40 discrete steps.
 *
 * Driven by requestAnimationFrame rather than chained setTimeouts (and rather
 * than the jQuery plugin, per rule 3): the frame callback derives the step index
 * from elapsed time, which keeps the 100ms cadence without drift and stops
 * cleanly on unmount.
 *
 * The span renders its source value on the server and React never re-renders it
 * — the animation writes textContent through the ref — so the server and client
 * markup are identical and there is nothing for hydration to disagree about.
 */

const DELAY = 100;
const TIME = 4000;
const DIVISIONS = TIME / DELAY;

export default function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const num = parseFloat(value.replace(/,/g, ""));
    if (Number.isNaN(num)) return;

    let raf = 0;
    let start = 0;
    let lastStep = -1;

    const tick = (now: number) => {
      if (!start) start = now;
      // CounterUp waits one `delay` before emitting its first value.
      const step = Math.floor((now - start) / DELAY);
      if (step !== lastStep) {
        lastStep = step;
        if (step <= 0) {
          el.textContent = "0";
        } else if (step >= DIVISIONS) {
          el.textContent = value;
          return;
        } else {
          el.textContent = String(Math.trunc((num / DIVISIONS) * step));
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            raf = requestAnimationFrame(tick);
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 1.0 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span className="counter" ref={ref}>
      {value}
    </span>
  );
}
