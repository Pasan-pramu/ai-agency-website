import type { ReactNode } from "react";
import ShellProvider from "./ShellProvider";
import SearchModal from "./SearchModal";
import Preloader from "./Preloader";
import OffcanvasOverlay from "./OffcanvasOverlay";
import Header from "./Header";
import SmoothScroll from "./SmoothScroll";
import Footer from "./Footer";
import AosInit from "./AosInit";

/*
 * The shared shell, in the source's exact body order (index.html:31-1405):
 *
 *   #search-modal            (lines 32-43)
 *   .preloader               (lines 44-49)
 *   .offcanvas__overlay      (line  52)
 *   <header>                 (lines 54-142)
 *   #smooth-wrapper          (line 144)
 *     #smooth-content        (line 145)
 *       <main>               (line 146)  <- page content goes here
 *       <footer>             (lines 1241-1403)
 *
 * The header, modal, preloader and overlay sit *outside* #smooth-wrapper; the
 * footer sits *inside* it, next to <main>. That is load-bearing for
 * ScrollSmoother, which transforms everything inside the wrapper.
 *
 * This is a server component. `children` is a prop all the way down, so pages
 * stay server components (rule 8); only the leaves are 'use client'.
 */
export default function SiteShell({
  variant,
  children,
}: {
  variant: "home" | "inner";
  children: ReactNode;
}) {
  return (
    <ShellProvider>
      <SearchModal />
      <Preloader />
      <OffcanvasOverlay />
      <Header variant={variant} />
      <SmoothScroll>
        <main>{children}</main>
        <Footer variant={variant} />
      </SmoothScroll>
      <AosInit />
    </ShellProvider>
  );
}
