"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/*
 * .clients-slider — theme.js:320-355.
 *
 * Slick config, mapped option for option:
 *   dots: false            -> no pagination module registered
 *   arrows: false          -> no navigation rendered at all. prevArrow/nextArrow
 *                             are defined in theme.js but arrows:false means
 *                             Slick never builds them, so neither do we.
 *   infinite: true         -> loop: true
 *   speed: 800             -> speed: 800
 *   autoplay: true         -> autoplay with Slick's default autoplaySpeed 3000,
 *                             plus pauseOnHover (Slick default true) mapped to
 *                             pauseOnMouseEnter, and disableOnInteraction false
 *                             because Slick keeps autoplaying after a swipe.
 *   slidesToShow: 5        -> slidesPerView, see the breakpoint inversion below
 *   slidesToScroll: 1      -> slidesPerGroup: 1
 *
 * BREAKPOINT INVERSION. Slick's `responsive` breakpoints are upper bounds — a
 * rule applies when windowWidth < breakpoint — and the top-level slidesToShow is
 * the widest case. Swiper's breakpoints are min-width. So Slick's
 *   default 5 / 1450:4 / 1200:3 / 992:2 / 600:1
 * becomes base 1, then 600:2, 992:3, 1200:4, 1450:5. Boundaries line up exactly:
 * at w=600 Slick asks `600 < 600` (false) and falls through to the 992 rule for
 * 2 slides, which is what Swiper's min-width 600 gives.
 *
 * spaceBetween stays 0 on purpose: the 15px gutters come from style.css:6489
 * (`.clients-slider .slick-slide{margin-left:15px;margin-right:15px}`), which
 * applies because the slide carries `slick-slide`. Adding spaceBetween would
 * double them.
 *
 * INFINITE LOOP — RECORDED DIVERGENCE, NEEDS SIGN-OFF.
 * Slick achieves `infinite: true` by cloning slides into the DOM (.slick-cloned).
 * Swiper 14's loop mode instead shifts real slides and silently refuses to
 * engage when there are fewer than about 2x slidesPerView of them. Measured with
 * the source's slide count: snapGrid collapsed to [0, 293], isEnd was true at
 * activeIndex 1, and both the arrows and autoplay were dead — the slider moved
 * one step and stopped. Adding spaceBetween did not help (it also overrode the
 * template's margin-right to 30px, leaving an asymmetric 15/30 gutter).
 * The set is therefore rendered twice, which is what Slick's clones amount to in
 * the DOM and restores continuous scrolling. The alternative is loop:false, which
 * would visibly break a carousel the template scrolls forever.
 *
 * Class strategy per AGENTS.md rule 6: both class sets, item classes on the
 * SwiperSlide itself, no slideClass/wrapperClass, no slick-list/slick-track.
 * `slick-initialized` on the container is load-bearing — without it
 * slick.css's `.slick-slide{display:none}` wins over `.swiper-slide{display:block}`
 * at equal specificity and every slide vanishes.
 */

const SOURCE_LOGOS = [1, 2, 3, 4, 5, 3];
// Rendered twice so Swiper's loop mode has enough slides — see the header.
const LOGOS = [...SOURCE_LOGOS, ...SOURCE_LOGOS];

export default function ClientsSlider() {
  return (
    /* Client Slider */
    <Swiper
      className="clients-slider slick-slider slick-initialized"
      modules={[Autoplay]}
      loop={true}
      speed={800}
      autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      slidesPerView={1}
      slidesPerGroup={1}
      spaceBetween={0}
      breakpoints={{
        600: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
        1450: { slidesPerView: 5 },
      }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {LOGOS.map((n, i) => (
        /* Orbia Client Item */
        <SwiperSlide className="orbia-client-item style-one slick-slide" key={i}>
          <div className="content">
            <img
              src={`/assets/images/home-one/client/client-logo${n}.png`}
              alt="client logo"
            />
            <p>
              <span>458+</span> Airbnb 5 start reviews
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
