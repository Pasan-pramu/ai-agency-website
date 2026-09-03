# AGENTS.md

## Project

Migration of a purchased Envato HTML/CSS template (AI agency site) to Next.js
App Router with TypeScript. This is a real company website. The visual output
must be pixel-identical to the source template.

- Source template: `/template` (gitignored, read-only — never edit it)
- Next.js App Router, TypeScript, no `src/` dir, import alias `@/*`
- Template assets are served from `public/assets/`

## Hard rules

1. **Never modify the template's own CSS.** Copy stylesheets verbatim into
   `public/assets/css/` and leave them byte-identical. Any fix needed for
   Next.js goes in `styles/nextjs-fixes.css`, loaded last, with a comment
   explaining what it patches and why.

2. **No Tailwind.** Do not install it, do not add utility classes.

3. **No jQuery.** Any jQuery-dependent behaviour is rewritten as React using
   refs and effects. No jQuery plugins, no `$` anywhere. Visual behaviour must
   be identical, including timing, easing and delays.

4. **Preserve markup exactly.** Class names, element order, nesting depth,
   `id`s, `data-wow-*`, `data-*` and ARIA attributes are copied as-is from the
   source HTML. Convert only what JSX requires: `class` → `className`,
   `for` → `htmlFor`, self-closing tags, inline `style` strings → objects.
   Do not "clean up", rename, simplify or de-duplicate markup.

5. **GSAP** is used via `useGSAP()` from `@gsap/react`, scoped with a container
   ref. Never call GSAP in a bare `useEffect`. Register plugins once.

6. **Sliders** use `swiper/react`, not the vanilla Swiper bundle. Slider config
   (loop, breakpoints, speed, autoplay, effect, pagination, navigation) must
   match the template's JS options exactly.

7. **Images**: plain `<img>` with the original classes by default. Only use
   `next/image` where explicitly requested — it changes the DOM and breaks
   template CSS selectors.

8. **Client boundaries**: pages stay server components. Interactive pieces are
   small `'use client'` leaf components. Don't mark a whole page client to
   avoid one animation.

9. **Verification**: after converting a page, structurally diff it against its
   source HTML (element sequence + class lists) and report any divergence.
   Report honestly; do not claim parity you have not checked.

## TypeScript

- Strict mode is on. Types serve the migration; the migration does not serve
  the types.
- `any` is acceptable for third-party globals (WOW.js, jQuery-plugin
  replacements, odometer-style libs) and for raw DOM handles where narrowing
  adds noise without safety. Do not write elaborate declaration files for
  libraries that are being replaced anyway.
- Prefer `useRef<HTMLDivElement | null>(null)` and narrow with a guard at the
  top of the effect over scattering non-null assertions (`!`).
- `// @ts-expect-error` is allowed only with a comment explaining why. Never
  `@ts-ignore`.
- **A type error is never a reason to change class names, DOM structure,
  element nesting or `data-*` attributes.** Rule 4 outranks the compiler.
  If a type error can only be resolved by altering markup, stop and ask.
- Do not add types to copied markup or template CSS. Only application code
  gets typed.

## Do not

- Do not install packages not agreed in the current step.
- Do not refactor, rename files, or restructure directories on your own
  initiative.
- Do not write code during an audit or planning step.
- Do not leave TODO stubs in place of real conversion work.
- Do not edit anything inside `/template`.

## Workflow

Work one numbered step at a time. Stop at the end of each step and report what
you did and anything that surprised you. Never start the next step without
being asked.

## Migration steps

1. ~~Create project, push to private GitHub repo~~
2. ~~Template in `/template`, gitignored~~
3. Audit — read the whole template, report findings to `docs/AUDIT.md`. No code.
4. Decide scope — which pages to keep, which to drop
5. Foundation — copy assets, remove dead files, replace commercial fonts, fix
   CSS paths, load Google Fonts via `next/font`, install packages
6. Layout shell — header, footer, mobile menu, offcanvas, preloader, cursor,
   search, scroll-reveal
7. Convert one simple page to establish patterns, then the rest
8. Contact form, SEO, sitemap, robots, favicon, JSON-LD
9. Replace placeholder content with real content
10. Deploy to Vercel