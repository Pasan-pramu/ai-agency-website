"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";

/*
 * .testimonial-slider — theme.js:246-267. index.html only.
 *
 * Four options differ from .testimonial-slider-three on about.html; everything
 * else is the same:
 *   slidesToShow      2          (three: 3)
 *   responsive        1024 -> 1  (three: 1199 -> 2, 767 -> 1)
 *   prevArrow  '<div class="prev"><i class="far fa-arrow-left"></i></div>'
 *   nextArrow  '<div class="next"><i class="far fa-arrow-right"></i></div>'
 *                                (three: the words "Previews" / "Next")
 *
 * Unchanged from -three: dots false, arrows true, infinite true, speed 800,
 * appendArrows into the existing .testimonial-arrows, autoplay true (Slick's
 * default autoplaySpeed 3000), slidesToScroll 1.
 *
 * BREAKPOINT INVERSION: Slick's `breakpoint` is an upper bound (applies when
 * windowWidth < N) with the top-level value as the widest case, so default 2 /
 * 1024:1 becomes Swiper base 1, min-width 1024:2.
 *
 * The arrows container here is `.testimonial-arrows mt-60` and ships EMPTY —
 * unlike about's, which contains a `.progress-wrap`. Slick appends prev then
 * next into it, so those two divs are the only children. `slick-arrow` is the
 * class Slick adds to whatever arrow markup you hand it, and it is what
 * style.css:5784 targets for the 55px circles with the gradient hover.
 *
 * Slide set rendered twice per the divergences section: 3 source slides at
 * slidesPerView 2 is below Swiper 14's loop threshold, which silently disables
 * looping. spaceBetween stays 0 — gutters come from style.css:5630 via
 * `slick-slide`. See ClientsSlider for the .slick-initialized trap.
 */

const QUOTE =
  '"This AI product has completely transformed the way our team operates. From automating repetitive task providing smart insights, it’s allowed us to focus more on strategy and branded active creativity!”';

const SOURCE_ITEMS = [
  { img: 1, name: "Guy Hawkins" },
  { img: 2, name: "Jacob Jones" },
  { img: 1, name: "Guy Hawkins" },
];
const ITEMS = [...SOURCE_ITEMS, ...SOURCE_ITEMS];

export default function TestimonialSliderOne() {
  const swiper = useRef<SwiperClass | null>(null);

  return (
    <>
      {/* Testimonial Slider */}
      <Swiper
        className="testimonial-slider slick-slider slick-initialized"
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
        breakpoints={{ 1024: { slidesPerView: 2 } }}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        {ITEMS.map((t, i) => (
          /* Orbia Testimonial Item */
          <SwiperSlide
            className="orbia-testimonial-item style-one slick-slide"
            key={i}
          >
            <div className="testimonial-content">
              <div className="ratings">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>{QUOTE}</p>
              <div className="author-info-quote-wrap">
                <div className="author-thumb-item">
                  <div className="author-thumb">
                    <img
                      src={`/assets/images/home-one/testimonial/author-img${t.img}.jpg`}
                      alt="author image"
                    />
                  </div>
                  <div className="author-info">
                    <h5>{t.name}</h5>
                    <span className="position">
                      Head of Digital Strategy, NovaTech
                    </span>
                  </div>
                </div>
                <div className="quote">
                  <img src="/assets/images/home-one/testimonial/quote.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="testimonial-arrows mt-60"
        data-aos="fade-up"
        data-aos-duration="1400"
      >
        <div className="prev slick-arrow" onClick={() => swiper.current?.slidePrev()}>
          <i className="far fa-arrow-left"></i>
        </div>
        <div className="next slick-arrow" onClick={() => swiper.current?.slideNext()}>
          <i className="far fa-arrow-right"></i>
        </div>
      </div>
    </>
  );
}
