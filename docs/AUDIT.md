# Template Audit

Audit scope: `template/ai-agency-technology-html-template`. The production site is `orbia/`. `Documentation/` is the vendor documentation site and is listed separately where it affects package totals. No files under `template/` were modified.

## Pages

All Orbia pages use the title `Orbia - AI Agency & Technology HTML Template` and the meta description `AI, Agency, Technology`. The descriptions below are based on filenames and visible page sections.

| File | Description | Classification |
|---|---|---|
| `orbia/index.html` | Primary AI agency landing page with hero, services, projects, pricing, testimonials, and CTA sections. | Real page |
| `orbia/index-2.html` | Alternate homepage focused on the second visual/content variant. | Demo/variant of `index.html` |
| `orbia/index-3.html` | Alternate homepage focused on the third visual/content variant. | Demo/variant of `index.html` |
| `orbia/about.html` | About/company page with agency introduction, features, process, and testimonials. | Real page |
| `orbia/services.html` | Services listing with service cards, feature sections, and pricing. | Real page |
| `orbia/service-details.html` | Detail page for one service, with feature content and related CTA sections. | Real page |
| `orbia/projects.html` | Project/portfolio listing page. | Real page |
| `orbia/project-details.html` | Detail page for one portfolio project. | Real page |
| `orbia/team.html` | Team member listing page. | Real page |
| `orbia/team-details.html` | Detail page for one team member. | Real page |
| `orbia/blog-grid.html` | Blog listing in grid layout. | Real page |
| `orbia/blog-standard.html` | Blog listing in standard/list layout. | Demo/variant of `blog-grid.html` |
| `orbia/blog-details.html` | Individual blog article page with related content. | Real page |
| `orbia/contact.html` | Contact page with contact details and a message form. | Real page |
| `orbia/faqs.html` | Frequently asked questions page with expandable FAQ items. | Real page |
| `orbia/pricing.html` | Pricing plans page. | Real page |
| `orbia/404.html` | Not-found/error page. | Real page |
| `Documentation/index.html` | Envato/template usage documentation, asset references, and code examples; it is not a public product page. | Template filler |

The three homepage files are the clearest variants. `blog-standard.html` is a layout variant, while the detail pages are separate content templates rather than duplicate demos.

## CSS

### Orbia runtime CSS

Every Orbia HTML page loads the following stylesheets in this head order, except that the Google Fonts link is remote rather than a local stylesheet:

1. `assets/fonts/fontawesome/css/all.min.css` — 173,842 bytes — vendor icon font CSS.
2. `assets/css/plugins/bootstrap.min.css` — 232,803 bytes — vendor Bootstrap 5 CSS.
3. `assets/css/plugins/slick.css` — 1,981 bytes — vendor Slick carousel CSS.
4. `assets/css/plugins/magnific-popup.css` — 6,951 bytes — vendor Magnific Popup CSS.
5. `assets/css/plugins/aos.css` — 26,053 bytes — vendor AOS CSS.
6. `assets/css/spacings.css` — 8,643 bytes — template spacing utilities.
7. `assets/css/style.css` — 188,775 bytes — template layout and component stylesheet.

`assets/css/common.css` — 37,732 bytes — exists but is not referenced by the Orbia HTML heads. No Orbia stylesheet contains `@import`. `style.css` contains two relative `url()` references to `../images/...`, and Bootstrap contains one relative `url()` reference. These paths are valid relative to a copied `/public/assets/css` location only if corresponding images remain under `/public/assets/images`; they must not be rewritten to HTML-relative paths. No `@font-face` blocks were detected in the Orbia CSS files.

### Documentation CSS

The documentation page loads, in order: `assets/blueprint-css/screen.css` (18,103 bytes), `assets/blueprint-css/print.css` (1,311 bytes), `assets/blueprint-css/shCoreDefault.css` (8,704 bytes), and `assets/blueprint-css/plugins/fancy-type/screen.css` (2,216 bytes). An IE-only conditional reference loads `assets/blueprint-css/ie.css` (1,904 bytes). The remaining documentation stylesheets exist but are not referenced:

| File | Size |
|---|---:|
| `Documentation/assets/blueprint-css/screen - Copy.css` | 17,434 bytes |
| `Documentation/assets/blueprint-css/plugins/buttons/screen.css` | 2,004 bytes |
| `Documentation/assets/blueprint-css/plugins/link-icons/screen.css` | 1,360 bytes |
| `Documentation/assets/blueprint-css/plugins/rtl/screen.css` | 4,477 bytes |
| `Documentation/assets/blueprint-css/src/forms.css` | 1,855 bytes |
| `Documentation/assets/blueprint-css/src/grid.css` | 9,981 bytes |
| `Documentation/assets/blueprint-css/src/ie.css` | 2,583 bytes |
| `Documentation/assets/blueprint-css/src/print.css` | 1,865 bytes |
| `Documentation/assets/blueprint-css/src/reset.css` | 1,077 bytes |
| `Documentation/assets/blueprint-css/src/typography.css` | 3,146 bytes |

No `@import` statements or `@font-face` blocks were detected in the listed CSS. Relative URL references in CSS should be checked after copying because CSS URL resolution is based on the final stylesheet location.

## JavaScript

### Orbia runtime JavaScript

| File | Size | Purpose/classification |
|---|---:|---|
| `assets/js/plugins/jquery-3.7.1.min.js` | 87,533 bytes | jQuery 3.7.1; third-party; jQuery-dependent. |
| `assets/js/plugins/popper.min.js` | 20,101 bytes | Popper 2.11.6 positioning dependency; third-party; plain library. |
| `assets/js/plugins/bootstrap.min.js` | 60,635 bytes | Bootstrap 5.3.3 JavaScript; third-party. |
| `assets/js/plugins/gsap/gsap.min.js` | 72,435 bytes | GSAP core; third-party; plain JavaScript. |
| `assets/js/plugins/gsap/SplitText.min.js` | 7,247 bytes | GSAP SplitText plugin; third-party; plain JavaScript. |
| `assets/js/plugins/gsap/ScrollSmoother.min.js` | 13,367 bytes | GSAP ScrollSmoother plugin; third-party; plain JavaScript. |
| `assets/js/plugins/gsap/ScrollTrigger.min.js` | 44,157 bytes | GSAP ScrollTrigger plugin; third-party; plain JavaScript. |
| `assets/js/plugins/slick.min.js` | 42,863 bytes | Slick carousel; third-party; jQuery-dependent. |
| `assets/js/plugins/jquery.magnific-popup.min.js` | 20,216 bytes | Magnific Popup 1.1.0; third-party; jQuery-dependent. |
| `assets/js/plugins/jquery.waypoints.js` | 17,946 bytes | Waypoints; third-party; jQuery-dependent. |
| `assets/js/plugins/jquery.counterup.min.js` | 2,181 bytes | CounterUp; third-party; jQuery-dependent. |
| `assets/js/plugins/aos.js` | 14,239 bytes | Animate On Scroll; third-party; plain JavaScript API. |
| `assets/js/theme.js` | 14,065 bytes | Template controller; plain JavaScript wrapped in a jQuery IIFE and therefore jQuery-dependent. |

Every Orbia page loads these runtime scripts in this order: jQuery, Popper, Bootstrap, GSAP core, SplitText, ScrollSmoother, ScrollTrigger, Slick, Magnific Popup, Waypoints, CounterUp, AOS, then `theme.js`.

### Documentation JavaScript

`Documentation/assets/scripts/jquery.js` (83,617 bytes) and `jquery-ui.custom.min.js` (29,414 bytes) are third-party jQuery/jQuery UI. `shCore.js` (16,175 bytes) and `shBrushJScript.js` (1,649 bytes), `shBrushCss.js` (5,694 bytes), `shBrushPhp.js` (5,246 bytes), and `shBrushXml.js` (1,998 bytes) are third-party SyntaxHighlighter core and language brushes. They support only the documentation page.

### Distinct site behaviors

| Behavior | Source and hooks | React rebuild |
|---|---|---|
| Preloader | `theme.js`, window `load`; `.preloader` is delayed 500 ms then faded out over 500 ms. | Small client leaf with a load listener and CSS/React state transition. |
| Main/mobile menu | `mainMenu()` at `theme.js:36`; `.navbar-toggler`, `.theme-nav-menu`, `.navbar-close`, nested `ul.sub-menu`, generated `.dd-trigger`. | Client menu component with refs/state; preserve generated trigger markup and 350 ms submenu timing. |
| Offcanvas overlay | `offCanvas()` at `theme.js:74`; `.offcanvas__overlay`, `.navbar-toggler`, `.theme-nav-menu`, `.navbar-close`, resize breakpoint 991 px. | Same menu client component with overlay state and resize/media-query handling. |
| Sticky header | `initStickyHeader()` at `theme.js:101`; `.header-navigation`, scroll position over 200 px, adds `.sticky` only while scrolling upward. | Client scroll listener/effect; retain exact class transitions. |
| Video modal | `theme.js:126`; `.video-popup` initialized with Magnific Popup iframe, 300 ms removal delay and `mfp-fade`. | Client portal/dialog or an agreed maintained React video-modal library. |
| Hero vertical sliders | `theme.js:137` and `:159`; `.hero-image-slider-top` and `.hero-image-slider-bottom`, load-time Slick, vertical autoplay, linear easing, 8,000/5,000 ms speed. | `swiper/react` per project rules, matching vertical loop/autoplay settings and load behavior. |
| Service slider | `theme.js:183`; `.service-slider`, `.service-arrows`, responsive 4/3/2/1 slides. | `swiper/react`, preserving arrows, breakpoints, speed 800 and autoplay. |
| Project slider | `theme.js:218`; `.project-slider`, variable width, responsive Slick settings. | `swiper/react` with variable-width-equivalent layout and exact breakpoints. |
| Testimonial sliders | `theme.js:246`, `:269`, `:284`; `.testimonial-slider`, `-two`, `-three`, `.testimonial-arrows`, plus `.progress-line` on `init`/`afterChange`. | Separate Swiper configurations and a client progress indicator driven by slide change. |
| Client slider | `theme.js:320`; `.clients-slider`, responsive 5/4/3/2/1 slides. | `swiper/react` with matching breakpoints and autoplay. |
| Counters | `theme.js:358`; `IntersectionObserver` threshold 1.0 watches `.counter`, then CounterUp delay 100/time 4000 and unobserves. | Client IntersectionObserver plus a small requestAnimationFrame counter; no jQuery plugin. |
| Smooth scroll/effects | `theme.js:387`; `ScrollSmoother.create({smooth:1,effects:true,smoothTouch:0.1})`. | GSAP `useGSAP()` scoped to a container, with plugins registered once as required. |
| Split text reveal | `theme.js:397`; `.text-anm`, SplitText chars/words, GSAP from animation x=40, delay .5, duration 1, stagger .01, trigger at top 85%. | GSAP `useGSAP()` client leaf, scoped ref, preserving options. |
| Service hover active state | `theme.js:423`; `.orbia-service-card` removes `.item-active` from all cards and adds it to hovered card. | Client pointer handlers or delegated event listener; CSS remains authoritative. |
| Dynamic backgrounds | `dynamicBackground()` at `theme.js:431`; every `[data-src]` receives `background-image: url(...)`. | Client effect over a scoped ref, or server-rendered style only if markup parity permits. |
| AOS reveal | `theme.js:442`; `AOS.init({offset:0})`, page markup uses `data-aos`. | Prefer a small client observer/animation layer or AOS integration; preserve `data-aos` attributes. |
| Hash/navigation links | Markup contains many `href="#"` placeholders and anchor-style links. | Replace only confirmed navigation targets during scope decision; preserve placeholder behavior until then. |

No distinct template implementation for search overlay, marquee, tabs, parallax, back-to-top, form submission/AJAX, or a custom cursor was detected in the Orbia runtime JS. Forms are markup only; no submit handler or endpoint is present.

## Third-party libraries

| Library | Detected version | Maintained migration choice | Types |
|---|---|---|---|
| jQuery | 3.7.1 | Remove; React event handlers/effects | Not needed after removal. |
| Bootstrap CSS/JS | 5.3.3 | Keep CSS if pixel parity requires it; remove JS or replace controls with React | No application types needed. |
| Popper | 2.11.6 | `@popperjs/core` only if a positioning control still needs it | Bundled declarations. |
| Slick | Not stated | `swiper` / `swiper/react`, required by project rules | Bundled declarations. |
| Magnific Popup | 1.1.0 | React dialog/portal or maintained modal library | No useful native React types. |
| Waypoints | Undetectable | `IntersectionObserver` | Browser API types from TypeScript DOM libs. |
| CounterUp | Undetectable | Small React/`requestAnimationFrame` counter | No types needed. |
| AOS | Undetectable | Observer-based React animation or AOS with `@types/aos` | `@types/aos` exists; verify current package before installing. |
| GSAP | Undetectable | `gsap` plus `@gsap/react` | GSAP and @gsap/react provide types. |
| Font Awesome Pro icon font | Not stated | Decide whether to retain bundled font or migrate to an approved icon package | Font CSS is not TypeScript code. |
| SyntaxHighlighter (documentation only) | Undetectable | Drop with documentation page or use maintained highlighter | Depends on replacement. |
| jQuery UI (documentation only) | Undetectable | Drop with documentation page | jQuery plugin. |

## Inline scripts and styles

The 17 Orbia pages contain no inline `<script>` or `<style>` blocks.

`Documentation/index.html` contains two inline scripts:

1. Lines 25-27: `SyntaxHighlighter.all()` initializes code highlighting.
2. Lines 28-110: a jQuery document-ready block implements documentation menu smooth scrolling, active-section tracking, `history.pushState`, and initial hash scrolling. It depends on `.menu .alpha`, menu anchor hashes, section IDs, jQuery offset/animate, and `history`/`window.location`.

The documentation page also has inline `style` attributes on headings, links, and layout elements, but no `<style>` block.

## Fonts

The Orbia HTML heads request Google Fonts `DM Sans` (variable optical size, normal and italic) and `Ubuntu` (300, 400, 500, 700). `style.css` maps Ubuntu to `--heading-font` and DM Sans to `--body-font`.

The bundled Font Awesome CSS declares `Font Awesome 5 Pro` and references `fa-brands-400.woff2`, `fa-light-300.woff2`, `fa-regular-400.woff2`, and `fa-solid-900.woff2`. This is a commercially licensed icon font; confirm the purchase license permits redistribution in the deployed application before copying it. The documentation page separately requests Google `Open Sans` (400, 600) over HTTP and Google `Roboto` (400, 500, 700, 900). No other font files or `@font-face` blocks were detected. Google Fonts are external assets, not bundled files; production policy should decide whether to load them through `next/font`.

## Assets

The following totals cover `orbia/assets/`, including source SCSS, source maps, fonts, CSS, JS, and images: **4,087,956 bytes (about 3.90 MiB)**.

| Folder | Bytes |
|---|---:|
| `assets/css` | 572,544 |
| `assets/fonts` | 754,594 |
| `assets/images` | 2,154,478 |
| `assets/js` | 416,985 |
| `assets/scss` | 189,355 |

No individual asset exceeds 500 KB (524,288 bytes). The 20 largest files are:

| File | Bytes |
|---|---:|
| `images/footer/footer-widget-bg.jpg` | 310,745 |
| `css/plugins/bootstrap.min.css` | 232,803 |
| `fonts/fontawesome/webfonts/fa-light-300.woff2` | 189,452 |
| `css/style.css` | 188,775 |
| `fonts/fontawesome/css/all.min.css` | 173,842 |
| `fonts/fontawesome/webfonts/fa-regular-400.woff2` | 173,220 |
| `images/home-one/hero/hero-shape1.png` | 152,792 |
| `fonts/fontawesome/webfonts/fa-solid-900.woff2` | 140,704 |
| `images/home-three/bg/counter-bg.jpg` | 134,025 |
| `js/plugins/jquery-3.7.1.min.js` | 87,533 |
| `images/home-one/bg/choose-bg.jpg` | 81,869 |
| `fonts/fontawesome/webfonts/fa-brands-400.woff2` | 77,376 |
| `images/home-three/gallery/fact-bg2.jpg` | 73,119 |
| `js/plugins/gsap/gsap.min.js` | 72,435 |
| `css/style.css.map` | 69,606 |
| `images/innerpage/bg/page-bg.jpg` | 64,889 |
| `images/home-three/hero/hero-bg.jpg` | 63,690 |
| `images/home-one/hero/hero-bg.jpg` | 62,107 |
| `js/plugins/bootstrap.min.js` | 60,635 |
| `images/home-two/bg/service-bg.jpg` | 55,565 |

The documentation site has a separate `Documentation/assets/` tree and is not included in the production asset total.

## Will break in Next.js

- `theme.js` executes a jQuery IIFE immediately and assumes `window.jQuery`, `window`, `document`, GSAP globals, AOS, and plugin globals already exist. It cannot be imported into a server component and must be replaced by client leaves.
- `ScrollSmoother.create()` and `AOS.init()` run at script evaluation time, before React refs or hydration are available.
- jQuery-ready and window-load blocks in `theme.js` depend on DOM timing; Slick hero initialization explicitly waits for all assets and calls `setPosition()` to avoid a blank first render.
- All runtime asset paths are document-relative, for example `assets/images/...` and `assets/js/...`; under Next.js they must resolve to `/assets/...` from `public/`.
- `data-src` is not automatically a CSS background in React; `dynamicBackground()` must be recreated or rendered as an explicit style.
- The template uses `href="index.html"` and many `href="#"` values. These do not map cleanly to App Router routes and placeholder hashes can jump to the top of the page.
- Generated `.dd-trigger` spans are inserted by jQuery. A server-rendered React version must produce the same markup to avoid hydration/structure differences.
- Sliders clone and mutate DOM nodes. Initializing Slick against server HTML would create hydration mismatches; use `swiper/react` in a client leaf.
- CounterUp mutates `.counter` text after an IntersectionObserver threshold of 1.0. It must run only after hydration and avoid rendering a conflicting initial value.
- SplitText mutates text nodes into character/word wrappers. It must be client-only and scoped through `useGSAP()`.
- CSS load order is behaviorally significant: vendor CSS precedes spacing and `style.css`; changing this order can change specificity and layout.
- `style.css` and Bootstrap contain relative `url()` references. Moving CSS without preserving the `/public/assets/css` to `/public/assets/images` relationship breaks backgrounds.
- The Google Fonts links are runtime network dependencies and the documentation page uses an insecure HTTP Open Sans URL.
- Font Awesome Pro files may be license-restricted for redistribution.
- `Documentation/index.html` uses jQuery at script level, hash mutation, `history.pushState`, and inline scripts; it should not be migrated as a product page unless documentation is in scope.

## Open questions

- Which of the three homepage variants is the production homepage, and should the other two remain reachable as demos?
- Should the documentation page be excluded from the Next.js application?
- Which real social URLs, contact endpoint, email address, and company content replace the template placeholders and `href="#"` links?
- Should Font Awesome Pro remain bundled, or should icons be replaced with a licensed/approved package?
- Should the production site self-host Google Fonts via `next/font`, and are there brand font requirements beyond Ubuntu and DM Sans?
- Are all 17 Orbia pages in scope, or should blog, team, pricing, and detail templates be dropped?
- Should the vendor SCSS, CSS source map, unused `common.css`, and unused plugin files be copied to `public/`, or only runtime dependencies?
- Is exact Slick behavior required on every slider, or may responsive behavior be adjusted where `swiper/react` cannot express Slick's variable-width or vertical autoplay behavior identically?
- What should the contact and newsletter forms do? No submission handler or backend endpoint is present in the source template.

## Summary

**18 HTML pages, 23 CSS files, 20 JS files, 12 distinct third-party library families (including documentation-only libraries), and 4,087,956 bytes of Orbia assets.**
## Addendum

Read-only follow-up to the audit above. Scope is the 14 kept pages only: `index`, `about`, `services`, `service-details`, `projects`, `project-details`, `team`, `team-details`, `blog-standard`, `blog-details`, `contact`, `faqs`, `pricing`, `404`. The dropped set is `index-2.html`, `index-3.html`, `blog-grid.html`. Nothing under `template/` was modified. Line numbers refer to the source files in `template/ai-agency-technology-html-template/orbia/`.

### Bootstrap JavaScript usage

The full inventory of `data-bs-*` attribute names across all 17 Orbia pages is exactly three: `data-bs-toggle`, `data-bs-target`, `data-bs-parent`. There is no `data-bs-dismiss`, `data-bs-ride`, `data-bs-slide`, `data-bs-spy`, `data-bs-placement`, or `data-bs-config` anywhere. `data-bs-toggle` only ever takes the values `modal`, `collapse`, and `tab`.

No page in the template — kept or dropped — contains Bootstrap `dropdown`, `dropdown-menu`, `dropdown-toggle`, `carousel`, `carousel-item`, or `offcanvas` classes. The `.offcanvas__overlay` element present on every page is the template's own element, driven by `offCanvas()` at `theme.js:74`; it is unrelated to Bootstrap's Offcanvas component.

#### Every occurrence, by component

**Modal — search overlay. All 14 pages.**

| File | Line | Markup | Drives |
|---|---:|---|---|
| all 14 pages | 32-43 | `<div class="modal fade search-modal" id="search-modal">` containing `.modal-dialog.modal-dialog-centered` > `.modal-content` > search `<form>` | Modal target |
| all 14 pages | 128 | `<div class="search-btn" data-bs-toggle="modal" data-bs-target="#search-modal">` | Modal trigger, inside the header's `.nav-right-item` |

Both the trigger and the target sit inside byte-identical regions of every page (lines 1-53 and the shared header), so this is one shared component, not fourteen.

**Collapse — accordions. 2 pages.**

| File | Line | Markup | Drives |
|---|---:|---|---|
| `index.html` | 322 | `<div class="project-wrapper" id="projectAccordion">` | Accordion group root (referenced by `data-bs-parent`) |
| `index.html` | 325, 343, 361 | `<div class="project-header" role="button" data-bs-toggle="collapse" data-bs-target="#collapseN" aria-expanded="...">` | Three project-item triggers; item 2 ships `aria-expanded="true"` |
| `index.html` | 331, 349, 367 | `<div id="collapseN" class="accordion-collapse collapse[ show]" data-bs-parent="#projectAccordion">` | Three collapsible panels; `#collapse2` ships `show` |
| `faqs.html` | 182 | `<div class="accordion" id="accordionOne" data-aos="fade-up" data-aos-duration="1000">` | Accordion group root |
| `faqs.html` | 186, 199, 212, 225 | `<h5 class="accordion-title" data-bs-toggle="collapse" data-bs-target="#collapseN" aria-expanded="...">` | Four FAQ triggers; item 2 ships `aria-expanded="true"` |
| `faqs.html` | 190, 203, 216, 229 | `<div id="collapseN" class="accordion-collapse collapse[ show]" data-bs-parent="#accordionOne">` | Four collapsible panels; `#collapse2` ships `show` |

**Tab — team member switcher. 2 pages.**

| File | Line | Markup | Drives |
|---|---:|---|---|
| `index.html` | 906 | `<ul class="nav nav-tabs" ...>` | Tab list container (Bootstrap resolves the group via `closest('.nav')`) |
| `index.html` | 909, 921, 933 | `<div class="team-thumb-item mb-30[ active]" data-bs-toggle="tab" data-bs-target="#team_N">` | Three tab triggers; the second ships `active` |
| `index.html` | 947-1038 | `.tab-content` with `.tab-pane fade` (`#team_one`), `.tab-pane fade show active` (`#team_two`), `.tab-pane fade` (`#team_three`) | Three tab panels |
| `about.html` | 412 | `<ul class="nav nav-tabs" ...>` | Tab list container |
| `about.html` | 415, 427, 439 | `<div class="team-thumb-item mb-30[ active]" data-bs-toggle="tab" data-bs-target="#team_N">` | Three tab triggers; the second ships `active` |
| `about.html` | 453-544 | `.tab-content` with panes `#team_one`, `#team_two` (`show active`), `#team_three` | Three tab panels |

The 12 remaining in-scope pages (`services`, `service-details`, `projects`, `project-details`, `team`, `team-details`, `blog-standard`, `blog-details`, `contact`, `pricing`, `404`, and `faqs` outside its accordion) use Bootstrap JS for the search modal and nothing else.

#### Is `bootstrap.min.js` required at runtime?

**Yes.** The bundle is Bootstrap 5.3.3. `theme.js` contains no handling for modal, collapse, or tab — grepping it for `bootstrap`, `modal`, `collapse`, `tab`, `accordion`, `dropdown`, or `carousel` returns only the `.offcanvas__overlay` lines. Bootstrap's CSS alone cannot drive any of these, because the base rules are static:

- `.modal{ ... display:none ... }` — the search overlay never appears without JS.
- `.collapse:not(.show){display:none}` — every accordion panel is frozen in its shipped state; only `#collapse2` (open on both `index` and `faqs`) would ever be visible, and it could never be closed.
- `.tab-content>.tab-pane{display:none}` plus `.tab-content>.active{display:block}` — only `#team_two` renders; the other two members are unreachable.

So `bootstrap.min.js` is required for exactly four behaviours:

1. **Search modal open/close** — all 14 pages. Bootstrap also adds `.modal-open` to `<body>` and injects `.modal-backdrop`; `style.css:456` exists specifically to neutralise Bootstrap's scroll-lock padding (`overflow:auto !important; padding-right:0 !important`), and `style.css:462` gives `.search-modal` its own `rgba(13,18,23,0.95)` ground over that backdrop.
2. **Project accordion** — `index.html` only.
3. **FAQ accordion** — `faqs.html` only.
4. **Team member tabs** — `index.html` and `about.html` only.

`popper.min.js` is loaded on all 14 pages but is dead weight: Bootstrap only needs Popper for Dropdown, Tooltip, and Popover, none of which appear in the template.

Three details that matter when these are rebuilt in React:

- **`aria-expanded` is load-bearing CSS, not just accessibility.** `style.css:4506` (`.orbia-project-item.style-one .project-header[aria-expanded=true]:after`) and `style.css:5160` (`.accordion-card .accordion-header .accordion-title[aria-expanded=true]:after`) style the open-state indicator off the attribute Bootstrap toggles. A replacement must toggle `aria-expanded` on the trigger, not only a class on the panel.
- **The tab markup is non-standard.** `data-bs-toggle="tab"` sits on bare `<div>` elements inside `<li>` elements — no `.nav-link`, no `role="tab"`, no `role="tablist"`. It works only because Bootstrap 5.3's Tab child selector includes `[data-bs-toggle="tab"]` alongside `.nav-link`, `.list-group-item` and `[role="tab"]`, and its parent lookup is `closest('.list-group, .nav, [role="tablist"]')`, which finds `ul.nav.nav-tabs`. Bootstrap injects `role` and `aria-*` attributes at runtime, so the server HTML and the post-init DOM differ here.
- **Active state lives on the trigger.** `style.css:5402` styles `.orbia-team_one .team-thumb-item.active`; Bootstrap moves `active` between the trigger divs and `show active` between the panes.

### Shared layout: header

The header block is lines **54-142** in all 14 files — same start line, same end line, same length.

It is **not** byte-identical across all 14. There are exactly two groups:

| Group | Pages | Header MD5 |
|---|---|---|
| Home | `index.html` | `5f25023b4208b3d496bac1b7841685e9` |
| Inner | the other 13 | `aacd06a6719c9723fb4f85768ebb10cf` |

The 13 inner-page headers are byte-identical to one another. `index.html` differs in **two lines only**:

| Line | `index.html` | The other 13 |
|---:|---|---|
| 54 | `<header class="header-area header-one transparent-header">` | `<header class="header-area header-one page-header transparent-header">` |
| 112 | `<a href="contact.html" class="theme-btn gradient-btn">Get A Quote...` | `<a href="contact.html" class="theme-btn style-one">Get A Quote...` |

Line 112 is the mobile-drawer CTA inside `.theme-nav-button.mt-20.d-block.d-md-none`. The desktop CTA at line 129 (`.nav-button.d-none.d-md-block`) stays `gradient-btn` on all 14 pages, so only the in-drawer button changes style.

Everything else is shared: same logo pair (`logo-white.png` in `.site-branding`, `logo-main.png` in the mobile `.theme-menu-top`), same six-item `nav.main-menu` with identical submenus, same `.search-btn` modal trigger, same `.navbar-toggler`, same four `.social-link` items. **There is no per-page active/current nav state anywhere** — no `active`, `current-menu-item`, or equivalent class appears in any of the 14 header blocks. Highlighting the current page is a behaviour the template does not have and would have to be added deliberately.

Two further regions are byte-identical across all 14 pages, which effectively extends the shared shell:

- **Lines 1-53** — MD5 `927cb7c0662fd490178ca24244a29125`. The `<head>` (identical title, meta, favicon, Google Fonts link, all six stylesheets), the `#search-modal` markup, and the `.preloader` block.
- **Everything after `</footer>`** — MD5 `26d68172b0bae4ac007be04c5ae0a93b`. The `</main></div></div>` wrapper close and all 13 `<script>` tags in the order the audit records.

### Shared layout: footer

The footer block is 163 lines on every page, at different offsets (`index` 1241-1403, `about` 860-1022, `404` 186-348, and so on). Two groups again:

| Group | Pages | Footer MD5 |
|---|---|---|
| Home | `index.html` | `cb430becb8e9e3bde8933b7203247dcc` |
| Inner | the other 13 | `3ba5cd43183849785022dc8b85cd9947` |

The 13 inner-page footers are byte-identical to one another. `index.html` differs in **one line only** — the opening tag:

| `index.html` | The other 13 |
|---|---|
| `<footer class="main-footer bg_cover" data-src="assets/images/footer/footer-bg.jpg">` | `<footer class="main-footer bg_cover pt-120" data-src="assets/images/footer/footer-bg.jpg">` |

A single spacing utility, `pt-120`. Lines 2-163 are identical everywhere: same `data-src` background pair (`footer-bg.jpg` on the `<footer>`, `footer-widget-bg.jpg` on `.footer-bottom-wrapper`), same newsletter form, same five avatars, same logo, same four social links, same three widget columns, same copyright row, same seven `data-aos` attributes. No breadcrumb or page-conditional content in the footer at all.

**Practical consequence:** one `Header` and one `Footer` component, with a single boolean (home vs inner) controlling three class strings — `page-header` on `<header>`, `gradient-btn` vs `style-one` on the drawer CTA, and `pt-120` on `<footer>`. Nothing else varies.

### Page-header / breadcrumb block

All 13 inner pages carry a `.page-hero` section at lines **147-163** — same start line, same end line, same 17-line length, immediately after `<main>` and before the page's first content section. `index.html` has no such block; its `<main>` opens straight into `<section class="orbia-hero_one">`.

The markup is **structurally identical across all 13**, differing only in the two text nodes:

```html
<!--======  Start Page Hero Section  ======-->
<section class="page-hero bg_cover p-r z-1" data-src="assets/images/innerpage/bg/page-bg.jpg">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <!--=== Page Content ===-->
                <div class="page-content text-center">
                    <h1>{TITLE}</h1>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li>{CRUMB}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section><!--======  End Page Hero Section  ======-->
```

Same classes, same nesting, same `data-src` background (`innerpage/bg/page-bg.jpg`) on every page. No extra classes, no per-page modifier, no third breadcrumb level anywhere — the trail is always exactly `Home / {CRUMB}`, and the `Home` link is always `index.html`. There are no `data-aos` or `text-anm` attributes inside the block on any page.

| Page | `{TITLE}` | `{CRUMB}` |
|---|---|---|
| `about.html` | About Us | About Us |
| `services.html` | Our Services | Services |
| `service-details.html` | Services Details | Services Details |
| `projects.html` | Our Project | Project |
| `project-details.html` | Project Details | Project Details |
| `team.html` | Our Team | Team |
| `team-details.html` | Team Details | Team Details |
| `blog-standard.html` | Blog Standard | Blog Standard |
| `blog-details.html` | Blog Details | Blog Details |
| `contact.html` | Contact Us | Contact Us |
| `faqs.html` | FAQs | FAQs |
| `pricing.html` | Pricing | Pricing |
| `404.html` | Error Pages | 404 |

Title and crumb match exactly on 9 of 13; they diverge on `services`, `projects`, `team`, and `404`. So the component needs both strings as separate props, not one derived from the other.

### Per-page behaviour map

Counts are element counts. For `.text-anm` and `data-aos` the split is written `body / footer`, since the footer contributes a fixed 1 and 7 respectively to every page.

| Page | Sliders (Slick) | Counters (`.counter`) | SplitText (`.text-anm`) | Video modal (`.video-popup`) | Dynamic bg (`[data-src]`) | AOS (`[data-aos]`) | Bootstrap JS | Service hover (`.orbia-service-card`) |
|---|---|---:|---|---:|---:|---:|---|---:|
| `index` | `.testimonial-slider` (2-up, `.testimonial-arrows`) + `.clients-slider` (5-up) | — | 12 / 1 = 13 | — | 9 | 65 / 7 = 72 | modal, collapse x3, tab x3 | 4 |
| `about` | `.testimonial-slider-three` (3-up, `.testimonial-arrows`) + `.clients-slider` (5-up) | 4 | 7 / 1 = 8 | 1 | 5 | 39 / 7 = 46 | modal, tab x3 | — |
| `services` | — | — | 3 / 1 = 4 | — | 4 | 19 / 7 = 26 | modal | — |
| `service-details` | — | — | 0 / 1 = 1 | — | 4 | 8 / 7 = 15 | modal | — |
| `projects` | — | — | 0 / 1 = 1 | — | 3 | 4 / 7 = 11 | modal | — |
| `project-details` | — | — | 0 / 1 = 1 | — | 4 | 5 / 7 = 12 | modal | — |
| `team` | — | — | 1 / 1 = 2 | — | 3 | 9 / 7 = 16 | modal | — |
| `team-details` | — | — | 0 / 1 = 1 | — | 3 | 5 / 7 = 12 | modal | — |
| `blog-standard` | — | — | 0 / 1 = 1 | — | 3 | 8 / 7 = 15 | modal | — |
| `blog-details` | — | — | 0 / 1 = 1 | — | 3 | 7 / 7 = 14 | modal | — |
| `contact` | — | — | 1 / 1 = 2 | — | 3 | 8 / 7 = 15 | modal | — |
| `faqs` | — | — | 1 / 1 = 2 | — | 3 | 3 / 7 = 10 | modal, collapse x4 | — |
| `pricing` | — | — | 1 / 1 = 2 | — | 3 | 4 / 7 = 11 | modal | — |
| `404` | — | — | 1 / 1 = 2 | — | 3 | 3 / 7 = 10 | modal | — |

Behaviours that are unconditional on all 14 pages, from the shared shell: preloader, main/mobile menu, `.offcanvas__overlay`, sticky header, `ScrollSmoother.create()`, `AOS.init({offset:0})`, `dynamicBackground()`, and the search modal. Every page also carries at least two `<form>` elements (search modal plus footer newsletter); `service-details`, `team-details`, `blog-standard` and `contact` have 3, and `blog-details` has 4.

#### Behaviours from the audit's table that no in-scope page uses

Dropping `index-2.html` and `index-3.html` removes five behaviours entirely:

| Behaviour | Hook | Only lives on |
|---|---|---|
| Hero vertical sliders | `.hero-image-slider-top`, `.hero-image-slider-bottom` | `index-3.html` |
| Service slider | `.service-slider` | `index-2.html` |
| Project slider | `.project-slider` | `index-3.html` |
| Testimonial slider two | `.testimonial-slider-two` | `index-2.html` |
| Testimonial progress line | `.progress-line` (`init`/`afterChange` handler, `theme.js:311`) | `index-3.html` |

That answers one of the audit's open questions in the narrow: **Slick's variable-width and vertical-autoplay configurations are not needed at all.** The only sliders left in scope are `.testimonial-slider` (index), `.testimonial-slider-three` (about), and `.clients-slider` (index and about) — all plain horizontal `slidesToShow` carousels that `swiper/react` expresses directly. Sliders exist on 2 of the 14 pages.

Three more narrowings worth recording:

- **Magnific Popup** is needed for exactly one element: `about.html:277`, `<a href="https://www.youtube.com/watch?v=8oON21G1Bqg" class="theme-btn style-one video-popup">Watch Video</a>`.
- **CounterUp** is needed for exactly four elements, all on `about.html` (lines 231, 240, 249, 258: `<span class="counter">58</span>k+` and siblings). `services.html` has `.orbia-counter-item` blocks at lines 331 and 339, but their numbers (`70+`, `3X`) are plain `<h3 class="title">` with no `.counter` class — they are static and never animate. Nothing else in scope uses `.counter`.
- **Service hover active state** (`theme.js:423`) applies to `index.html` only; `services.html` uses different card markup.

### Link inventory

Every distinct internal `href` pointing at a `.html` file, counted across the 14 in-scope pages. Seventeen distinct targets:

| Target | Total occurrences | In dropped set? |
|---|---:|---|
| `index.html` | 127 | no |
| `service-details.html` | 114 | no |
| `contact.html` | 62 | no |
| `blog-details.html` | 32 | no |
| `about.html` | 31 | no |
| `services.html` | 28 | no |
| `projects.html` | 28 | no |
| `blog-standard.html` | 28 | no |
| `project-details.html` | 27 | no |
| `pricing.html` | 23 | no |
| `team-details.html` | 22 | no |
| `team.html` | 14 | no |
| `faqs.html` | 14 | no |
| `404.html` | 14 | no |
| **`index-2.html`** | **14** | **yes** |
| **`index-3.html`** | **14** | **yes** |
| **`blog-grid.html`** | **14** | **yes** |

#### Links into the dropped set

All three dropped targets are linked exactly 14 times — once per page — and every one of those links is in the shared header nav, at a fixed line:

| Target | Line | Markup |
|---|---:|---|
| `index-2.html` | 78 | `<li><a href="index-2.html">Home Two</a></li>` (Home submenu) |
| `index-3.html` | 79 | `<li><a href="index-3.html">Home Three</a></li>` (Home submenu) |
| `blog-grid.html` | 102 | `<li><a href="blog-grid.html">Blog Grid</a></li>` (Blog submenu) |

**Zero references to the dropped set appear in any page body or in the footer.** Removing those three `<li>` elements from the single shared header component eliminates every dead link in the site. No page content, CTA, card, sidebar, or widget points at a dropped page.

Corresponding nav shrinkage: the Home submenu drops from three items to one (`Home One`), which makes `has-children` on the Home item pointless; the Blog submenu drops from three to two (`Blog Standard`, `Blog Details`). The `Pages` and `Services` submenus are unaffected.

#### Other link findings

- **Placeholder `href="#"`** — 7 per header (four mobile-drawer social links, plus the `Services`, `Pages` and `Blog` parent items, which are submenu openers with no real target) and 4 per footer (social box), on every page. Body counts vary: `team` 32, `blog-standard` 29, `blog-details` 28, `index` 18, `about` 12, `service-details` 6, `projects` / `team-details` / `contact` 4, and 0 on `services`, `project-details`, `faqs`, `pricing` and `404`.
- **Links that go nowhere useful.** `index.html:228` — the "View All Project" CTA points at `index.html`, not `projects.html`. The footer's "Terms & Conditions" and "Privacy Policy" both point at `index.html` on all 14 pages.
- **Malformed hrefs in the source.** `index.html:1166` uses `href="mail:info@exmple.com"` (should be `mailto:`, and the domain is a typo). `team-details.html:184` uses `href="LeslieAlexander@gmail.com"` with no scheme at all, which resolves as a relative path. Both need fixing during content replacement; neither is a Next.js-specific problem.
- **Non-HTML hrefs** — `mailto:info@touron.com` and `tel:(+256)214203215` appear once per page in the shared footer (14 each). Page-specific: `contact.html` and `index.html` carry `mailto:evenzahelp@gmail.com` and `tel:+163217322978`; `index.html:1157` adds `tel:+990123456789`; `team-details.html:188` adds `tel:+02-258-5687-363`.
