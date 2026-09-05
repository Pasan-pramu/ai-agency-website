import Link from "next/link";
import Breadcrumb from "@/app/components/layout/Breadcrumb";

/*
 * pricing.html, lines 147-250.
 *
 * Server component (rule 8) — nothing interactive on the page.
 *
 * Two source quirks preserved rather than tidied (rule 4):
 *  - line 175 opens a second `.row justify-content-center` *inside* the first,
 *    and the section-title column is a sibling of that inner row rather than a
 *    child. Nesting copied exactly.
 *  - every card's "View All Price" button links to pricing.html, i.e. the page
 *    it is already on. Carried over as "/pricing".
 *  - the image filename really is "pircing-logo.png"; the typo is the vendor's.
 *
 * The middle card is the only one with `.badge`, and cards 1 and 3 share
 * data-aos-duration="1000" while card 2 uses 1200 — also as shipped.
 *
 * No [data-src] in the page body.
 */

type Plan = {
  plan: string;
  price: string;
  duration: string;
  badge?: boolean;
};

const PLANS: Plan[] = [
  { plan: "Standard", price: "$29", duration: "1000" },
  { plan: "Professional", price: "$69", duration: "1200", badge: true },
  { plan: "Business", price: "$99", duration: "1000" },
];

export default function Pricing() {
  return (
    <>
      <Breadcrumb title="Pricing" crumb="Pricing" />
      {/*======  Start Pricing Section  ======*/}
      <section className="orbia-pricing-sec pt-120 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-50">
                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                  Popular Package
                </span>
                <h2 className="text-anm">
                  Flexible Pricing, Powerful Tangible Results
                </h2>
              </div>
            </div>
            <div className="row justify-content-center">
              {PLANS.map((p) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={p.plan}>
                  {/*=== Orbia Pricing Item ===*/}
                  <div
                    className="orbia-pricing-item style-two mb-40"
                    data-aos="fade-up"
                    data-aos-duration={p.duration}
                  >
                    <div className="shape">
                      <img
                        src="/assets/images/innerpage/pricing/pricing-shape.png"
                        alt="shape"
                      />
                    </div>
                    {p.badge ? <div className="badge">Popular</div> : null}
                    <div className="pricing-header">
                      <img
                        src="/assets/images/innerpage/pricing/pircing-logo.png"
                        alt="pricing image"
                      />
                      <span className="plan">{p.plan}</span>
                      <p>Ideal For Personal Projects</p>
                      <div className="price">
                        {p.price}
                        <span>/Per Month</span>
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="check-list style-one">
                        <li>
                          <i className="far fa-check-double"></i>Access AI tools
                        </li>
                        <li>
                          <i className="far fa-check-double"></i>Exclusive features
                        </li>
                        <li>
                          <i className="far fa-check-double"></i>Discord access
                        </li>
                        <li>
                          <i className="far fa-check-double"></i>24/7 support
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <Link href="/pricing" className="theme-btn style-one">
                        View All Price
                        <i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
