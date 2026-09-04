"use client";

import { useShell } from "./ShellProvider";

/*
 * Source: index.html:128 —
 *   <div class="search-btn" data-bs-toggle="modal" data-bs-target="#search-modal">
 *
 * Per AGENTS.md rule 10 Bootstrap's JS is gone, but the data-bs-* attributes
 * stay on the element (rule 4: markup is preserved as-is). They are inert here;
 * React owns the open/close.
 */
export default function SearchButton() {
  const { openSearch } = useShell();
  return (
    <div
      className="search-btn"
      data-bs-toggle="modal"
      data-bs-target="#search-modal"
      onClick={openSearch}
    >
      <i className="far fa-search"></i>
    </div>
  );
}
