"use client";

import Link from "next/link";
import { useRef, type MouseEvent } from "react";
import { useShell } from "./ShellProvider";
import { slideToggle, slideUp } from "./slide";

/*
 * Source: index.html:64-122 (`.theme-nav-menu`). One element serves both the
 * desktop bar and the mobile drawer — style.css:1246 turns it into the 290px
 * off-canvas panel at max-width 1199.98px, and `.menu-on` slides it in.
 *
 * The three nav entries for the dropped pages are removed: index-2.html (source
 * line 78), index-3.html (line 79) and blog-grid.html (line 102). `has-children`
 * is dropped from the Home item per AGENTS.md. No active/current state is added
 * — the template has none anywhere.
 *
 * The `.dd-trigger` spans are injected by jQuery at theme.js:54-60 into every
 * `li a` inside `.theme-nav-menu` that has a next sibling. They are server
 * rendered here instead, so the server HTML already matches the post-init DOM
 * and there is nothing for hydration to disagree about.
 */

type MenuItem = {
  label: string;
  href: string;
  hasChildren?: boolean;
  children?: { label: string; href: string }[];
};

const MENU: MenuItem[] = [
  {
    label: "Home",
    href: "/",
    // has-children intentionally dropped: the submenu is a single entry once
    // Home Two and Home Three are gone.
    children: [{ label: "Home One", href: "/" }],
  },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "#",
    hasChildren: true,
    children: [
      { label: "Our Services", href: "/services" },
      { label: "Service Details", href: "/service-details" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    hasChildren: true,
    children: [
      { label: "Projects", href: "/projects" },
      { label: "Project Details", href: "/project-details" },
      { label: "Our Team", href: "/team" },
      { label: "Team Details", href: "/team-details" },
      { label: "Pricing", href: "/pricing" },
      { label: "Faqs", href: "/faqs" },
      // No /404 route exists: app/not-found.tsx is Next's not-found
      // boundary, so this path genuinely 404s and renders the template's
      // error page with a real 404 status. The entry is kept because the
      // scope decision names only three nav items for deletion.
      { label: "404", href: "/404" },
    ],
  },
  {
    label: "Blog",
    href: "#",
    hasChildren: true,
    children: [
      { label: "Blog Standard", href: "/blog" },
      { label: "Blog Details", href: "/blog-details" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const DdTrigger = () => (
  <span className="dd-trigger">
    <i className="far fa-angle-down"></i>
  </span>
);

/** Parent items keep href="#" exactly as the source has them — they are submenu
 *  openers with no target. The template does not preventDefault on them. */
function ItemLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  if (href === "#") return <a href="#">{children}</a>;
  return <Link href={href}>{children}</Link>;
}

export default function ThemeNavMenu({ variant }: { variant: "home" | "inner" }) {
  const { menuOn } = useShell();
  const root = useRef<HTMLDivElement | null>(null);

  /* theme.js:62-68, delegated from .theme-nav-menu onto .dd-trigger:
       e.preventDefault();
       $(this).parent().parent().siblings().children('ul.sub-menu').slideUp();
       $(this).parent().next('ul.sub-menu').stop(true, true).slideToggle(350);
       $(this).toggleClass('sub-menu-open');
     Sibling submenus close at jQuery's default 400ms, the clicked one toggles
     at 350ms. Both are reproduced. */
  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    const trigger = (e.target as HTMLElement).closest(".dd-trigger");
    if (!trigger || !root.current?.contains(trigger)) return;
    e.preventDefault();

    const anchor = trigger.parentElement;
    const li = anchor?.parentElement;
    if (!anchor || !li) return;

    for (const sibling of Array.from(li.parentElement?.children ?? [])) {
      if (sibling === li) continue;
      const sub = sibling.querySelector(":scope > ul.sub-menu");
      if (sub instanceof HTMLElement) slideUp(sub, 400);
    }

    const next = anchor.nextElementSibling;
    if (next instanceof HTMLElement && next.matches("ul.sub-menu")) {
      slideToggle(next, 350);
    }

    trigger.classList.toggle("sub-menu-open");
  };

  return (
    <div
      ref={root}
      className={`theme-nav-menu${menuOn ? " menu-on" : ""}`}
      onClick={onClick}
    >
      {/*=== Menu Top ===*/}
      <div className="theme-menu-top d-block d-xl-none">
        <div className="site-branding">
          <Link href="/" className="brand-logo">
            <img src="/assets/images/home-one/logo/logo-main.png" alt="Brand Logo" />
          </Link>
        </div>
      </div>
      {/*=== Main Menu ===*/}
      <nav className="main-menu">
        <ul>
          {MENU.map((item) => (
            <li
              key={item.label}
              className={`menu-item${item.hasChildren ? " has-children" : ""}`}
            >
              <ItemLink href={item.href}>
                {item.label}
                {item.children ? <DdTrigger /> : null}
              </ItemLink>
              {item.children ? (
                <ul className="sub-menu">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link href={child.href}>{child.label}</Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      {/*=== Nav Button ===*/}
      <div className="theme-nav-button mt-20 d-block d-md-none">
        <Link
          href="/contact"
          className={`theme-btn ${variant === "home" ? "gradient-btn" : "style-one"}`}
        >
          Get A Quote
          <i className="far fa-arrow-right"></i>
        </Link>
      </div>
      {/*===  Menu Bottom ===*/}
      <div className="theme-menu-bottom mt-50 d-block d-xl-none">
        <h5>Follow Us</h5>
        <ul className="social-link">
          <li>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
