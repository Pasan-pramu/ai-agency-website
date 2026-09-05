"use client";

import { useEffect, useState, type ReactNode } from "react";

/*
 * initStickyHeader('.header-navigation'), theme.js:101-124.
 *
 *   let lastScroll = 0;
 *   on scroll:
 *     const currentScroll = $(this).scrollTop();
 *     if (currentScroll > 200) {
 *       if (currentScroll < lastScroll) { if (!hasClass sticky) addClass sticky }
 *       else { removeClass sticky }
 *     } else if (currentScroll === 0) { removeClass sticky }
 *     lastScroll = currentScroll;
 *
 * One detail that is easy to lose and is preserved here: .sticky is added only
 * while scrolling *upward* past 200px, never on the way down.
 *
 * DELIBERATE DIVERGENCE: the source clears .sticky only at exactly 0. Under
 * ScrollSmoother the scroll position eases to rest and frequently settles on 1-6
 * instead of 0, so the header stayed stuck at the top of the page. The threshold
 * is <= 5 here. Everything else matches the source, including the fact that
 * nothing happens between 6px and 200px.
 *
 * lastScroll lives in a plain closure variable rather than state so the
 * comparison is against the previous scroll event, not a render.
 */
export default function HeaderNavigation({ children }: { children: ReactNode }) {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    const onScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 200) {
        if (currentScroll < lastScroll) setSticky(true);
        else setSticky(false);
      } else if (currentScroll <= 5) {
        setSticky(false);
      }
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`header-navigation${sticky ? " sticky" : ""}`}>{children}</div>
  );
}
