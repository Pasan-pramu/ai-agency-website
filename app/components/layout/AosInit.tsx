"use client";

import { useEffect } from "react";
import AOS from "aos";

/*
 * theme.js:442-444: AOS.init({ offset: 0 }).
 *
 * All data-aos / data-aos-duration attributes stay on the markup untouched; AOS
 * reads them itself. aos.css is already loaded as a <link> from
 * /assets/css/plugins/aos.css, so the package's stylesheet is deliberately not
 * imported — that would ship a second, possibly different, copy.
 */
export default function AosInit() {
  useEffect(() => {
    AOS.init({ offset: 0 });
  }, []);
  return null;
}
