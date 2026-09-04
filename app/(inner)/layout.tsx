import type { ReactNode } from "react";
import SiteShell from "@/app/components/layout/SiteShell";

/*
 * The inner variant of the shell — the other 13 pages.
 *
 * Why route groups, and not the alternatives:
 *
 * - Reading the pathname (`usePathname()`) would force the whole header and
 *   footer to become client components purely to answer a question that is
 *   already known at build time, and would ship the nav markup twice (once in
 *   the RSC payload, once as client JS).
 * - A per-page wrapper component would put the header and footer inside <main>,
 *   which is the wrong place in the DOM — the source has the header before
 *   #smooth-wrapper and the footer as a sibling of <main> inside it.
 * - Route groups resolve the variant statically, cost nothing at runtime, add
 *   no segment to the URL, and leave every page a server component (rule 8).
 *   `(home)/page.tsx` is `/`; `(inner)/about/page.tsx` will be `/about`.
 *
 * Step 7 adds the 13 page directories under this group.
 */
export default function InnerLayout({ children }: { children: ReactNode }) {
  return <SiteShell variant="inner">{children}</SiteShell>;
}
