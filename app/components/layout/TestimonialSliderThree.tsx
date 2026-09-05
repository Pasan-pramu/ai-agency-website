"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";

/*
 * .testimonial-slider-three — theme.js:284-312.
 *
 * Slick config, mapped option for option:
 *   dots: false            -> no pagination module
 *   arrows: true           -> the two arrows below
 *   infinite: true         -> loop: true
 *   speed: 800             -> speed: 800
 *   appendArrows: $('.testimonial-arrows')
 *                          -> Slick appends the arrow markup into that existing
 *                             element, after whatever is already inside it. The
 *                             source ships `.testimonial-arrows` containing a
 *                             `.progress-wrap`, so the runtime order is
 *                             progress-wrap, prev, next — reproduced here.
 *   autoplay: true         -> delay 3000 (Slick's default autoplaySpeed),
 *                             pauseOnMouseEnter true (Slick's pauseOnHover),
 *                             disableOnInteraction false
 *   slidesToShow: 3        -> slidesPerView, inverted below
 *   slidesToScroll: 1      -> slidesPerGroup: 1
 *   prevArrow: '<div class="prev">Previews</div>'
 *   nextArrow: '<div class="next">Next</div>'
 *                          -> Slick adds `slick-arrow` to whatever markup you
 *                             hand it, so the rendered class list is
 *                             "prev slick-arrow" / "next slick-arrow". That is
 *                             what style.css:5954 targets.
 *
 * BREAKPOINT INVERSION: Slick's default 3 / 1199:2 / 767:1 (upper bounds)
 * becomes Swiper base 1, 767:2, 1199:3 (min-width).
 *
 * Arrows are driven by slidePrev/slideNext rather than Swiper's Navigation
 * module, because with loop:true Slick's arrows never enter a disabled state and
 * Navigation would add swiper-button-disabled classes the template never has.
 *
 * The `.progress-wrap` is rendered but stays empty: theme.js:311 writes a width
 * onto `.progress-line`, and no in-scope page contains that element, so the
 * handler is a no-op on about.html. Reproduced as shipped.
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
 * Gutters come from style.css:5639; spaceBetween stays 0. See ClientsSlider for
 * the full class-strategy rationale and the .slick-initialized trap.
 */

const QUOTE =
  '"I was here for a conference, but it felt more like a vacation. The meeting facilities were top notch, and I still had time to relax by the pool. Best business trip ever!"';

export default function TestimonialSliderThree() {
  const swiper = useRef<SwiperClass | null>(null);

  return (
    <>
      {/* Testimonial Slider */}
      <Swiper
        className="testimonial-slider-three slick-slider slick-initialized"
        modules={[Autoplay]}
        onSwiper={(s) => {
          swiper.current = s;
        }}
        loop={true}
        speed={800}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={0}
        breakpoints={{
          767: { slidesPerView: 2 },
          1199: { slidesPerView: 3 },
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          /* Orbia Testimonial Item */
          <SwiperSlide
            className="orbia-testimonial-item style-three slick-slide"
            key={i}
          >
            <div className="testimonial-content">
              <div className="quote-ratings-wrap">
                <div className="quote">
                  <i className="fas fa-quote-left"></i>
                </div>
                <div className="ratings">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p>{QUOTE}</p>
              <div className="author-thumb-item">
                <div className="author-thumb">
                  <img
                    src="/assets/images/innerpage/testimonial/author-img1.jpg"
                    alt="author-image"
                  />
                </div>
                <div className="author-info">
                  <h5>Brooklyn Simmons</h5>
                  <span className="position">CEO,AB Tech</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="testimonial-arrows" data-aos="fade-up" data-aos-duration="1200">
        <div className="progress-wrap"></div>
        <div className="prev slick-arrow" onClick={() => swiper.current?.slidePrev()}>
          Previews
        </div>
        <div className="next slick-arrow" onClick={() => swiper.current?.slideNext()}>
          Next
        </div>
      </div>
    </>
  );
}
