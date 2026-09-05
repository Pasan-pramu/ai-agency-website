# AGENTS.md

## Project

Migration of a purchased Envato HTML/CSS template (AI agency site) to Next.js
App Router with TypeScript. This is a real company website. The visual output
must be pixel-identical to the source template.

- Source template: `/template` (gitignored, read-only — never edit it)
- Template root: `template/ai-agency-technology-html-template/orbia`
- Next.js App Router, TypeScript, no `src/` dir, import alias `@/*`
- Template assets are served from `public/assets/`

### Scope

In scope, 14 pages: `index`, `about`, `services`, `service-details`,
`projects`, `project-details`, `team`, `team-details`, `blog-standard`
(routed as `/blog`), `blog-details`, `contact`, `faqs`, `pricing`, `404`.

Out of scope: `index-2`, `index-3`, `blog-grid`, `Documentation`. Their three
nav entries are deleted from the header (source lines 78, 79, 102), which
removes every dead internal link in the site. The Home submenu is then left
with a single item, so `has-children` on it is redundant.

### Layout facts (from the Addendum)

- Header and footer are shared, with two variants: `home` and `inner`.
  Differences are three lines only — `page-header` in the header class list,
  drawer CTA `gradient-btn` vs `style-one`, and footer `pt-120`.
- There is no active-nav state anywhere in the template. Do not add one.
- The breadcrumb block is identical across all 13 inner pages apart from two
  text nodes, so it takes `title` and `crumb` as separate props (they differ
  on 4 of 13 pages, e.g. "Our Services" / "Services").
- Two pre-existing source bugs to fix during conversion, not carry over:
  `index.html:1166` has `href="mail:info@exmple.com"` (missing `to`, typo'd
  domain), and `team-details.html:184` has a bare email address with no
  `mailto:` scheme.

## Hard rules

1. **Never modify the template's own CSS.** Template stylesheets live in
   `public/assets/css/` and stay byte-identical. Any fix needed for Next.js
   goes in `public/css/nextjs-fixes.css`, `<link>`ed after `style.css` so it
   genuinely loads last, with a comment explaining what it patches and why.
   Note: ESM-imported CSS is emitted with `data-precedence` ahead of `<head>`
   children, so the fixes file must be a `<link>`, not an import.

2. **No Tailwind.** Do not install it, do not add utility classes.

3. **No jQuery.** Any jQuery-dependent behaviour is rewritten as React using
   refs and effects. No jQuery plugins, no `$` anywhere. Visual behaviour must
   be identical, including timing, easing and delays.

4. **Preserve markup exactly.** Class names, element order, nesting depth,
   `id`s, `data-aos`, `data-*` and ARIA attributes are copied as-is from the
   source HTML. Convert only what JSX requires: `class` → `className`,
   `for` → `htmlFor`, self-closing tags, inline `style` strings → objects.
   Do not "clean up", rename, simplify or de-duplicate markup.

5. **GSAP** is used via `useGSAP()` from `@gsap/react`, scoped with a container
   ref. Never call GSAP in a bare `useEffect`. Register plugins once.

6. **Sliders** use `swiper/react`, not the vanilla Swiper bundle. Slider config
   (loop, breakpoints, speed, autoplay, effect, pagination, navigation) must
   match the template's Slick options exactly. **Five sliders**, all horizontal,
   all `dots:false`:
   - `index.html` — `.clients-slider`, `.testimonial-slider` (2-up)
   - `about.html` — `.clients-slider`, `.testimonial-slider-three` (3-up)
   - `.project-slider`, ported onto the home page from `index-3.html`
     (`theme.js:218-245`). This one is `variableWidth: true`, mapped to
     `slidesPerView: "auto"` with an inline `width:auto` on each slide, because
     Swiper's own `.swiper-slide{width:100%}` would otherwise collapse it to one
     full-width slide. Its source `responsive` table is inverted (default 2,
     `<1200` raises it to 3) and also inert — `variableWidth` is never
     overridden by the responsive blocks, so `slidesToShow` governs nothing.
     Reproduced as written; not corrected.

   **`.slick-current` is load-bearing on `.project-slider`.** `style.css:4630`
   and `:4634` reveal the overlay on the *active* slide. Swiper emits
   `.swiper-slide-active` instead, so the component mirrors the active slide
   onto `.slick-current` on init and on every slide change. This is the only
   Slick *state* class any in-scope slider depends on; the `:hover` fallback at
   `:4638`/`:4642` is pure CSS and needs nothing.

   The hero vertical sliders, service slider, testimonial-slider-two and the
   testimonial progress line live only on `index-2`/`index-3` and remain out of
   scope, so Slick's vertical-autoplay config is not needed.

   **Class strategy (decided):** keep both class sets. The container renders as
   `<Swiper className="clients-slider slick-slider slick-initialized">` and
   each slide as `<SwiperSlide className="orbia-client-item style-one
   slick-slide">` — item classes go on the `SwiperSlide` itself, not a child,
   because Slick applies `.slick-slide` to the item element directly. Arrows
   render as `<div className="prev slick-arrow">` / `<div className="next
   slick-arrow">` inside the template's existing `.testimonial-arrows`
   element. Do NOT add `slick-list` or `slick-track` to `.swiper-wrapper`, and
   do NOT use Swiper's `slideClass`/`wrapperClass` options — overriding
   `slideClass` stops Swiper emitting `.swiper-slide` and collapses its layout.
   No slider CSS is ever written into `nextjs-fixes.css`; the template
   stylesheet remains the only source of truth for slider appearance.

   **Known trap:** `swiper/css` is ESM-imported and lands in the
   `data-precedence` chunk ahead of all template CSS, so `slick.css`'s
   `.slick-slide{display:none}` beats `.swiper-slide{display:block}` at equal
   specificity. `.slick-initialized` on the container is what makes slides
   visible (`.slick-initialized .slick-slide` is 0,2,0). It is required, not
   cosmetic.

   **Recorded divergence:** Slick's post-init DOM is
   `.slick-list > .slick-track > slide`; Swiper's is `.swiper-wrapper > slide`.
   No in-scope rule targets `.slick-list` or `.slick-track` for anything but
   structure, so nothing visual depends on it, but the wrapper depth does
   differ from the template.

7. **Images**: plain `<img>` with the original classes by default. Only use
   `next/image` where explicitly requested — it changes the DOM and breaks
   template CSS selectors.

8. **Client boundaries**: pages stay server components. Interactive pieces are
   small `'use client'` leaf components. Don't mark a whole page client to
   avoid one animation.

9. **Verification**: after converting a page, structurally diff it against its
   source HTML (element sequence + class lists) and report any divergence.
   Report honestly; do not claim parity you have not checked.

10. **No Bootstrap JavaScript.** `bootstrap.min.css` is kept and never edited.
    `bootstrap.min.js` and `popper.min.js` are not used. The four behaviours
    that depended on them (search modal, project accordion, FAQ accordion,
    team tabs) are rewritten as React components that produce identical DOM,
    identical classes, and identical `aria-*` attribute states. Bootstrap's
    CSS drives all visual output; React only toggles the same classes and
    attributes Bootstrap would have.   

## Deliberate divergences from source

These are intentional. Do not "correct" them.

- `<html lang="en">` instead of the template's `lang="zxx"`.
- Sticky header clears at `scrollY <= 5` rather than `=== 0`. `window.scrollY`
  is a double and can hold fractional values on non-integer device pixel
  ratios, where `=== 0` silently never matches. jQuery's `scrollTop()`
  returned an integer, so the source had no such exposure.
- `mail:info@exmple.com` (index.html:1166, home contact section) becomes a
  valid `mailto:`. `team-details.html:184`'s bare email gains a `mailto:`
  scheme. Neither is converted yet.
- Three nav `<li>`s removed (index-2, index-3, blog-grid) and `has-children`
  dropped from Home, per the scope decision. The `/404` nav entry is kept and
  points at a path that genuinely 404s.
- `.navbar-close` handlers not implemented — the class exists in `theme.js`
  and `style.css` but in zero HTML files. Dead code, not ported.
- Swiper's wrapper depth (`.swiper-wrapper`) differs from Slick's
  (`.slick-list > .slick-track`). No in-scope rule depends on it.
- `data-src` backgrounds render as server-side inline styles alongside the
  preserved `data-src` attribute, reproducing what `dynamicBackground()`
  (theme.js:431) produces at runtime, with no client JS and no unpainted frame.
- Slider slide sets are rendered twice (6→12 clients, 4→8 testimonials,
  3→6 project).
  Swiper 14's `loop` silently declines to engage below roughly 2×
  `slidesPerView` and emits no warning; both sliders were dead on first build.
  Slick achieved `infinite: true` by cloning slides into the DOM, so the
  duplicated set is closer to Slick's runtime DOM than `loop: false` would be
  to its behaviour. `spaceBetween` stays 0 — gutters come from
  `style.css:6489` and `:5639` via the `slick-slide` class; setting
  `spaceBetween` writes inline margins that override the template's.
- `mfp-fade` has no CSS anywhere in the template (Magnific ships those
  keyframes as a docs snippet the vendor never pasted). The class is
  reproduced but is inert — there is no fade. Writing the missing keyframes
  would add a feature, not patch Next.js.
- SplitText now runs on all 13 pages via a hook called from `SmoothScroll`,
  which owns the `#smooth-content` ref. As a child component it produced
  ~400 "Invalid scope" warnings, because React attaches a parent's ref only
  after its children's layout effects run. Footer `.text-anm` headings on the
  12 earlier pages were previously static and now animate, matching the
  template.

- `.slick-current` is synthesised on `.project-slider`. Swiper emits
  `.swiper-slide-active`, which `style.css:4630`/`:4634` do not match, so the
  component copies the active slide onto `.slick-current` imperatively on init
  and on every slide change. Imperative rather than React state because Swiper
  physically reorders slide nodes in loop mode, so a render-index key would put
  the class on the wrong element.
- Each `.project-slider` slide carries an inline `width:auto` that the source
  does not have. Slick's `variableWidth:true` shrink-wraps floated slides around
  their content; Swiper's `.swiper-slide{width:100%}` would defeat that, and
  rule 6 forbids writing slider CSS into `nextjs-fixes.css`. Measured slide
  widths match the images' intrinsic widths exactly (630/300/300px).

- Home page section order diverges from `index.html`. Four sections are ported
  in from `index-3.html` (`orbia-fact-sec`, `orbia-about_three`, `orbia-we_one`,
  `orbia-project_three`) and `orbia-team_two` replaces `index.html`'s tabbed
  `orbia-team_one`. `orbia-project_three` does not sit where index-3 puts it
  either: it was moved to sit between `orbia-choose_one` and `orbia-client-sec`.
  `orbia-about_one` is deliberately kept alongside `orbia-about_three` pending a
  decision on which to drop.
- `orbia-project_three` carries `gray-bg`, which `index.html` uses nowhere —
  it appears only on `about.html`, `services.html` and `index-3.html` in the
  template. The class itself is the template's own (`style.css:289`,
  `background-color: var(--gray-color)` = `#F8F8F8`); no new CSS was written.
  Note the section directly above it, `orbia-choose_one`, has no background of
  its own — its inner `.orbia-choose-wrapper` is a dark inset card
  (`--heading-color` `#010F34` plus a `bg_cover` image, 30px side margins,
  30px radius), so the grey band sits under a floating dark card rather than
  butting against a full-bleed colour.

### Source bugs preserved on purpose

- Resizing past 991px clears `overlay-open` but leaves `active` and `menu-on`,
  so the next toggler click opens the overlay with the drawer shut.
- On desktop the first chevron click writes inline `display:none`, which then
  suppresses the CSS hover reveal.
- Drawer CSS activates at 1199.98px but the resize handler uses 991px.
- Parent nav items (Services, Pages, Blog) keep `href="#"` with no
  `preventDefault`, so clicking jumps to top.

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