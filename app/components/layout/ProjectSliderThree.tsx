"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";

/*
 * .project-slider — theme.js:218-245. Ported from index-3.html:524-561.
 * The fifth slider in the project, and the first one taken from an
 * out-of-scope source page.
 *
 * Slick config, mapped option for option:
 *   dots: false            -> no pagination module
 *   arrows: false          -> NOTHING is rendered. prevArrow/nextArrow are
 *                             defined in theme.js but arrows:false means Slick
 *                             never builds them, so neither do we.
 *   infinite: true         -> loop: true
 *   speed: 800             -> speed: 800
 *   autoplay: true         -> delay 3000 (Slick's default autoplaySpeed),
 *                             pauseOnMouseEnter (Slick's pauseOnHover default),
 *                             disableOnInteraction false
 *   variableWidth: true    -> slidesPerView: "auto". Under Slick, variableWidth
 *                             sets no inline width: `.slick-slide{float:left}`
 *                             shrink-wraps each slide around its content, and
 *                             `.orbia-project-item.style-three .project-thumbnail
 *                             img` has no width rule, so the slide ends up at the
 *                             image's intrinsic width. Swiper's own CSS sets
 *                             `.swiper-slide{width:100%}`, which would give one
 *                             full-width slide, so each slide carries an inline
 *                             `width:auto` to restore the shrink-wrap. See the
 *                             divergence note below.
 *   slidesToShow: 2        -> see the responsive note below
 *   slidesToScroll: 1      -> slidesPerGroup: 1
 *
 * THE RESPONSIVE TABLE IS INVERTED, AND ALSO INERT. As written, theme.js has
 * default slidesToShow 2, breakpoint 1200 -> 3 and breakpoint 767 -> 1. Slick
 * breakpoints are upper bounds, so that means *more* slides on a narrower
 * viewport (3 below 1200px vs 2 above it) — almost certainly a vendor mistake.
 * It is reproduced rather than corrected, but it has no visual effect either
 * way: `variableWidth: true` is not overridden by any of the responsive
 * settings blocks, and Slick's setDimensions() skips slide-width calculation
 * entirely while variableWidth is on. slidesToShow therefore never governs
 * width at any breakpoint, which is why this maps to slidesPerView "auto"
 * everywhere and declares no Swiper breakpoints.
 *
 * .slick-current IS LOAD-BEARING HERE — the first time in this migration that a
 * Slick *state* class matters. style.css:4630 and :4634 reveal the overlay on
 * the active slide:
 *     .orbia-project-item.style-three.slick-current .project-thumbnail .hover-content
 *         { visibility:visible; opacity:1 }
 *     .orbia-project-item.style-three.slick-current .project-thumbnail .project-content
 *         { transform: translateY(0) }
 * Swiper emits `.swiper-slide-active` instead, which those selectors do not
 * match, so syncCurrent() below mirrors Swiper's active slide onto
 * `.slick-current` on init and on every slide change. The `:hover` fallback at
 * style.css:4638/:4642 is pure CSS and is unaffected.
 *
 * The class is toggled imperatively rather than through React state because
 * Swiper physically reorders slide nodes in loop mode; keying off the render
 * index would put the class on the wrong element. Swiper's own
 * .swiper-slide-active survives on these nodes, so an imperative class does too.
 *
 * Gutters come from style.css:4756 (`.project-slider .slick-slide{margin: 0 15px}`)
 * via the slick-slide class; spaceBetween stays 0. Class strategy and the
 * .slick-initialized trap are per AGENTS.md rule 6 — see ClientsSlider.
 */

const SOURCE_PROJECTS = [
  { img: 1, tag: "Entertainment", title: ["AI-Generated Ad Campaign for ", "Fashion Brand"] },
  { img: 2, tag: "Entertainment", title: ["AI-Generated Ad Campaign"] },
  { img: 3, tag: "Entertainment", title: ["AI-Generated Ad Campaign"] },
];
/* Rendered twice so Swiper's loop mode has enough slides — see AGENTS.md. */
const PROJECTS = [...SOURCE_PROJECTS, ...SOURCE_PROJECTS];

/** Mirror Swiper's active slide onto Slick's .slick-current. */
function syncCurrent(s: SwiperClass) {
  for (const el of s.slides) el.classList.remove("slick-current");
  s.slides[s.activeIndex]?.classList.add("slick-current");
}

export default function ProjectSliderThree() {
  return (
    /* Project Slider */
    <Swiper
      className="project-slider slick-slider slick-initialized"
      modules={[Autoplay]}
      loop={true}
      speed={800}
      autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      slidesPerView="auto"
      slidesPerGroup={1}
      spaceBetween={0}
      onSwiper={syncCurrent}
      onAfterInit={syncCurrent}
      onSlideChange={syncCurrent}
      onSlideChangeTransitionEnd={syncCurrent}
      onLoopFix={syncCurrent}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {PROJECTS.map((p, i) => (
        /* Orbia Project Item */
        <SwiperSlide
          className="orbia-project-item style-three slick-slide"
          style={{ width: "auto" }}
          key={i}
        >
          <div className="project-thumbnail">
            <img
              src={`/assets/images/home-three/project/project-img${p.img}.jpg`}
              alt="project image"
            />
            <div className="hover-content">
              <div className="project-content">
                <span>{p.tag}</span>
                <h4>
                  {p.title.length === 2 ? (
                    <>
                      {p.title[0]} <br /> {p.title[1]}
                    </>
                  ) : (
                    p.title[0]
                  )}
                </h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
