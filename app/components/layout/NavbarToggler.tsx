"use client";

import { useShell } from "./ShellProvider";

/* Source: index.html:134-138. Three bare spans; .active is the burger→cross
   state styled at style.css:1232-1243. */
export default function NavbarToggler() {
  const { togglerActive, onTogglerClick } = useShell();
  return (
    <div
      className={`navbar-toggler${togglerActive ? " active" : ""}`}
      onClick={onTogglerClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
