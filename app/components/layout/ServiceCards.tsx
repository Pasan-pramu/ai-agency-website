"use client";

import Link from "next/link";
import { useState } from "react";

/*
 * theme.js:423-426 — the service card hover state. index.html only, per the
 * Addendum (services.html uses different card markup and has no such handler).
 *
 *   $(".orbia-service-card").hover(function() {
 *       $(".orbia-service-card").removeClass("item-active");
 *       $(this).addClass("item-active");
 *   });
 *
 * jQuery's .hover() with a SINGLE handler binds it to both mouseenter and
 * mouseleave, so the same function runs on the way out too — which re-adds
 * item-active to the card being left. The net effect is that the class sticks to
 * the last card hovered and is never cleared, which is why the source ships card
 * 2 with `item-active` as the initial state. Binding only mouseEnter here
 * produces the identical DOM, because the mouseleave pass is idempotent.
 *
 * Card 2 (`Machine Learning`) carries item-active in the source markup and is
 * therefore the initial active index.
 */

export type ServiceCard = {
  icon: number;
  title: string;
  body: string;
  duration: string;
};

export default function ServiceCards({ cards }: { cards: ServiceCard[] }) {
  const [active, setActive] = useState(1); // card 2 ships with item-active

  return (
    <>
      {cards.map((c, i) => (
        <div className="col-xl-3 col-md-6 col-sm-12 item-column" key={c.title}>
          {/* Orbia Service Card */}
          <div
            className={`orbia-service-card${i === active ? " item-active" : ""}`}
            data-aos="fade-up"
            data-aos-duration={c.duration}
            onMouseEnter={() => setActive(i)}
          >
            <div className="content">
              <p>{c.body}</p>
              <div className="icon">
                <img
                  src={`/assets/images/home-one/icon/icon${c.icon}.png`}
                  alt="icon"
                />
              </div>
              <h3 className="title">
                <Link href="/service-details">{c.title}</Link>
              </h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
