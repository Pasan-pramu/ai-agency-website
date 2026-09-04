"use client";

import { useShell } from "./ShellProvider";

/* Source: `<div class="offcanvas__overlay"></div>`, index.html:52.
   Behaviour: offCanvas(), theme.js:74. */
export default function OffcanvasOverlay() {
  const { overlayOpen, onOverlayClick } = useShell();
  return (
    <div
      className={`offcanvas__overlay${overlayOpen ? " overlay-open" : ""}`}
      onClick={onOverlayClick}
    ></div>
  );
}
