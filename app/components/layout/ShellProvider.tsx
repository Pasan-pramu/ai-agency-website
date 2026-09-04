"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/*
 * Shared state for the shell's interactive pieces, which sit in three
 * different places in the DOM (the overlay before <header>, the toggler inside
 * .nav-right-item, the drawer inside .theme-nav-menu) and were wired together
 * by jQuery's global selectors in theme.js.
 *
 * mainMenu()  theme.js:36 — toggler click toggles .active on the toggler and
 *             .menu-on on .theme-nav-menu.
 * offCanvas() theme.js:74 — the same click also toggles .overlay-open on
 *             .offcanvas__overlay; a click on the overlay toggles .overlay-open
 *             and force-clears .active / .menu-on; a resize above 991px clears
 *             .overlay-open only.
 *
 * The three classes are tracked as three independent booleans because that is
 * what the source does. They can genuinely desync: resizing past 991px with the
 * drawer open clears the overlay but leaves .active and .menu-on set, so the
 * next toggler click opens the overlay with the drawer closed. That is a source
 * bug, reproduced here rather than silently corrected.
 */

type ShellState = {
  togglerActive: boolean;
  menuOn: boolean;
  overlayOpen: boolean;
  onTogglerClick: () => void;
  onOverlayClick: () => void;
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
};

const ShellContext = createContext<ShellState | null>(null);

export function useShell() {
  const ctx = useContext(ShellContext);
  if (!ctx) throw new Error("useShell must be used inside <ShellProvider>");
  return ctx;
}

export default function ShellProvider({ children }: { children: ReactNode }) {
  const [togglerActive, setTogglerActive] = useState(false);
  const [menuOn, setMenuOn] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const onTogglerClick = useCallback(() => {
    setTogglerActive((v) => !v);
    setMenuOn((v) => !v);
    setOverlayOpen((v) => !v);
  }, []);

  const onOverlayClick = useCallback(() => {
    setOverlayOpen((v) => !v);
    setTogglerActive(false);
    setMenuOn(false);
  }, []);

  useEffect(() => {
    const onResize = () => {
      // jQuery's $(window).width() is documentElement.clientWidth, which
      // excludes the scrollbar — window.innerWidth would not match.
      if (document.documentElement.clientWidth > 991) setOverlayOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const value = useMemo(
    () => ({
      togglerActive,
      menuOn,
      overlayOpen,
      onTogglerClick,
      onOverlayClick,
      searchOpen,
      openSearch: () => setSearchOpen(true),
      closeSearch: () => setSearchOpen(false),
    }),
    [togglerActive, menuOn, overlayOpen, searchOpen, onTogglerClick, onOverlayClick],
  );

  return <ShellContext.Provider value={value}>{children}</ShellContext.Provider>;
}
