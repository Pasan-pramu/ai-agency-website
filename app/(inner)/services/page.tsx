import Link from "next/link";
import Breadcrumb from "@/app/components/layout/Breadcrumb";

/*
 * services.html, lines 147-440. Three sections: the six service cards, the
 * features block, and a pricing block.
 *
 * Server component (rule 8) — nothing interactive.
 *
 * All six service cards link to the same service-details.html; see
 * app/(inner)/service-details/page.tsx for the route shape decision.
 *
 * The pricing section here is NOT the same markup as pricing.html, despite
 * looking it. Differences that must not be "unified": the cards have no `mb-40`,
 * the section-title column is col-xl-7 (pricing.html uses col-xl-6), the
 * durations run 1000/1200/1400 (pricing.html: 1000/1200/1000), and the inner row
 * is a plain `.row` (pricing.html: `.row.justify-content-center`). The
 * row-inside-a-row nesting is the vendor's and is preserved on both pages.
 *
 * The section carries a page-body [data-src] (line 356), rendered as a
 * server-side inline style alongside the preserved attribute.
 *
 * Source typos kept verbatim: "OUr best services", "Predicative Analytics",
 * "pircing-logo.png", "sevice-single-*.jpg".
 */

const PRICING_BG = "/assets/images/innerpage/bg/pricing-bg.jpg";

const SERVICES = [
  { n: "01", icon: 10, title: "AI-Powered Solution", duration: "1000" },
  { n: "02", icon: 11, title: "Custom Technology", duration: "1200" },
  { n: "03", icon: 12, title: "Machine Learning", duration: "1400" },
  { n: "04", icon: 13, title: "Predicative Analytics", duration: "1600" },
  { n: "05", icon: 14, title: "Automation Process", duration: "1800" },
  { n: "06", icon: 15, title: "Education & Science", duration: "2000" },
];

const PLANS = [
  { plan: "Standard", price: "$29", duration: "1000" },
  { plan: "Professional", price: "$69", duration: "1200", badge: true },
  { plan: "Business", price: "$99", duration: "1400" },
];

export default function Services() {
  return (
    <>
      <Breadcrumb title="Our Services" crumb="Services" />
      {/*======  Start Service Section  ======*/}
      <section className="orbia-service-sec gray-bg pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/* Section Title */}
              <div className="section-title text-center mb-55">
                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                  OUr best services
                </span>
                <h2 className="text-anm">
                  Best Innovative Solution for Businesses
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {SERVICES.map((s) => (
              <div className="col-xl-4 col-md-6 col-sm-12" key={s.n}>
                {/* Orbia Service Box */}
                <div
                  className="orbia-iconic-box style-two mb-30"
                  data-aos="fade-up"
                  data-aos-duration={s.duration}
                >
                  <div className="shape">
                    <img
                      src="/assets/images/innerpage/service/service-shape.png"
                      alt="shape"
                    />
                  </div>
                  <div className="sn-number">{s.n}</div>
                  <div className="icon">
                    <img
                      src={`/assets/images/innerpage/icon/icon${s.icon}.png`}
                      alt="icon"
                    />
                  </div>
                  <div className="content">
                    <h3 className="title">
                      <Link href="/service-details">{s.title}</Link>
                    </h3>
                    <p>
                      Specialize in delivering AI-powered solution revolutionize the
                      way businesses operate. By leveraging the latest.
                    </p>
                    <Link href="/service-details" className="read-more style-one">
                      Read More
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*======  Start Features Section  ======*/}
      <section className="orbia-features_two pt-120 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-8 d-none d-xl-block">
              {/* Orbia Image Box */}
              <div className="orbia-image-box">
                <div className="orbia-image" data-aos="fade-up" data-aos-duration="1000">
                  <img
                    src="/assets/images/innerpage/feature/feature-img1.jpg"
                    alt="feature image"
                  />
                </div>
                <div className="orbia-avatar-box mt-60" data-aos="fade-up" data-aos-duration="1200">
                  <div className="avatar-list">
                    <ul>
                      <li>
                        <img
                          src="/assets/images/home-one/hero/avatar-img1.jpg"
                          alt="avatar image"
                        />
                      </li>
                      <li>
                        <img
                          src="/assets/images/home-one/hero/avatar-img2.jpg"
                          alt="avatar image"
                        />
                      </li>
                      <li>
                        <img
                          src="/assets/images/home-one/hero/avatar-img3.jpg"
                          alt="avatar image"
                        />
                      </li>
                      <li>
                        <span>10+</span>
                      </li>
                    </ul>
                    <div className="text">
                      <div className="ratings">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half"></i>
                      </div>
                      <p>20K+ users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-12">
              {/* Orbia Content Box */}
              <div className="orbia-content-box">
                <div className="section-title mb-60">
                  <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                    Our feature
                  </span>
                  <h2 className="text-anm">
                    The Smarter Choice for AI-Powered Creativity and Visual Excellence
                  </h2>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="orbia-image mb-5 mb-lg-0" data-aos="fade-up" data-aos-duration="1000">
                      <img
                        src="/assets/images/innerpage/feature/feature-img2.jpg"
                        alt="feature image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="orbia-content-wrap">
                      <div
                        className="orbia-content-item style-one mb-20"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <div className="content">
                          <h3 className="title">Advanced AI Technology</h3>
                          <p>
                            We use the latest AI models to generate high-quality
                            visuals with precision and creativity.
                          </p>
                        </div>
                      </div>
                      <div
                        className="orbia-content-item style-one mb-20"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                      >
                        <div className="content">
                          <h3 className="title">Unlimited Creativity</h3>
                          <p>
                            We use the latest AI models to generate high-quality
                            visuals with precision and creativity.
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div
                            className="orbia-counter-item style-one mb-40"
                            data-aos="fade-up"
                            data-aos-duration="1300"
                          >
                            <div className="content">
                              <h3 className="title">70+</h3>
                              <h5>Support for Global Language</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div
                            className="orbia-counter-item style-one mb-40"
                            data-aos="fade-up"
                            data-aos-duration="1400"
                          >
                            <div className="content">
                              <h3 className="title">3X</h3>
                              <h5>Faster Content Production</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*======  Start Pricing Section  ======*/}
      <section
        className="orbia-pricing_two pt-120 pb-120 bg_cover"
        data-src={PRICING_BG}
        style={{ backgroundImage: `url(${PRICING_BG})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10">
              <div className="section-title text-center mb-50">
                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                  Popular Package
                </span>
                <h2 className="text-anm">
                  Flexible Pricing, Powerful Tangible Results
                </h2>
              </div>
            </div>
            <div className="row">
              {PLANS.map((p) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={p.plan}>
                  {/* Orbia Pricing Item */}
                  <div
                    className="orbia-pricing-item style-two"
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
