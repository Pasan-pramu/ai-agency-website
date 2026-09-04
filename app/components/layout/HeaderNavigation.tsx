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
 * Two details that are easy to lose and are preserved here: .sticky is added
 * only while scrolling *upward* past 200px, and between 1px and 200px nothing
 * happens at all — the class is only cleared at exactly 0.
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
      } else if (currentScroll === 0) {
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
