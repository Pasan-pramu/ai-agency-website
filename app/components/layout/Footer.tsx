import Link from "next/link";

/*
 * Source: index.html:1241-1403 (home) and about.html:860-1022 (inner). A diff of
 * both 163-line ranges shows exactly one differing line — the opening tag, where
 * inner pages add `pt-120`. Everything else is byte-identical.
 *
 * dynamicBackground() (theme.js:431) walks every [data-src] after load and sets
 * background-image from it. Both backgrounds here are known at build time, so
 * the inline style is rendered directly: it produces the same post-init DOM
 * jQuery would, with no client JS and no flash of an unpainted background.
 * `data-src` is kept on the elements (rule 4), rewritten to a /assets root as
 * the audit requires for every runtime asset path.
 */
export default function Footer({ variant }: { variant: "home" | "inner" }) {
  const footerBg = "/assets/images/footer/footer-bg.jpg";
  const widgetBg = "/assets/images/footer/footer-widget-bg.jpg";

  return (
    <footer
      className={`main-footer bg_cover${variant === "inner" ? " pt-120" : ""}`}
      data-src={footerBg}
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="shape">
        <img src="/assets/images/footer/footer-shape1.png" alt="shape" />
      </div>
      <div className="container">
        {/*=== Footer Newsletter Wrapper ===*/}
        <div className="footer-newsletter-wrapper pb-120">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-7 col-lg-10">
              {/*=== Orbia Content Box ===*/}
              <div className="orbia-content-box text-center text-xl-start mb-5 mb-xl-0">
                <div className="section-title text-white">
                  <span
                    className="sub-title"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    Get started
                  </span>
                  <h2 className="text-anm">Join our AI-driven Creative Community!</h2>
                </div>
                <div
                  className="orbia-avatar-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="avatar-list">
                    <ul>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <li key={n}>
                          <img
                            src={`/assets/images/footer/avatar-img${n}.jpg`}
                            alt="avatar image"
                          />
                        </li>
                      ))}
                    </ul>
                    <h6>4689 weekly subscribe</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-10">
              {/*=== Orbia Newsletter Box ===*/}
              <div
                className="orbia-newsletter-box"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <form autoComplete="off">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Email Address"
                      name="email"
                      required
                    />
                    <button className="theme-btn gradient-btn">
                      subscribe <i className="far fa-bell"></i>
                    </button>
                  </div>
                  <div className="form-check mt-20">
                    <label className="form-check-label" htmlFor="radio1">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="radio"
                        id="radio1"
                      />
                      I Agree To The Terms, Privacy Policy.
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Footer Bottom Wrapper ===*/}
      <div
        className="footer-bottom-wrapper bg_cover"
        data-src={widgetBg}
        style={{ backgroundImage: `url(${widgetBg})` }}
      >
        <div className="container">
          {/*=== Footer Widget Area ===*/}
          <div className="footer-widget-area pt-100 pb-55">
            <div className="row">
              <div className="col-lg-4 col-md-6 order-1">
                {/*=== Footer Widget ===*/}
                <div
                  className="footer-widget footer-about-widget mb-40"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className="widget-content">
                    <div className="footer-logo mb-30">
                      <Link href="/">
                        <img
                          src="/assets/images/home-one/logo/logo-white.png"
                          alt="Brand Logo"
                        />
                      </Link>
                    </div>
                    <p>
                      Our operations are centered on data protection and security,
                      guaranteeing adherence to international regulations such as
                      GDPR and HIPAA.
                    </p>
                    <div className="social-box">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 order-3 order-lg-2">
                <div className="row">
                  <div className="col-md-6">
                    {/*=== Footer Widget ===*/}
                    <div
                      className="footer-widget footer-nav-widget mb-40"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="widget-content">
                        <h4 className="widget-title">Quick Links</h4>
                        <div className="line-wrap">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <ul className="widget-nav">
                          <li>
                            <Link href="/">Home</Link>
                          </li>
                          <li>
                            <Link href="/about">About Us</Link>
                          </li>
                          <li>
                            <Link href="/services">Services</Link>
                          </li>
                          <li>
                            <Link href="/projects">Projects</Link>
                          </li>
                          <li>
                            <Link href="/blog">Latest Blog</Link>
                          </li>
                          <li>
                            <Link href="/contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/*=== Footer Widget ===*/}
                    <div
                      className="footer-widget footer-nav-widget mb-40"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <div className="widget-content">
                        <h4 className="widget-title">Our Services</h4>
                        <div className="line-wrap">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <ul className="widget-nav">
                          {[
                            "AI-Powered Solutions",
                            "Custom Technology",
                            "Customer Feedback",
                            "Machine Learning",
                            "Language Processing",
                            "Computer Vision",
                          ].map((label) => (
                            <li key={label}>
                              <Link href="/service-details">{label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 order-2 order-lg-3">
                {/*=== Footer Widget ===*/}
                <div
                  className="footer-widget footer-contact-info-widget mb-40"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <div className="widget-content">
                    <h4 className="widget-title">Recent Post</h4>
                    <div className="line-wrap">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="orbia-info-box style-two mb-20">
                      <div className="icon">
                        <i className="far fa-map-marker-alt"></i>
                      </div>
                      <div className="info">
                        <p>9550 Bolsa Ave #126, USA</p>
                      </div>
                    </div>
                    <div className="orbia-info-box style-two mb-20">
                      <div className="icon">
                        <i className="far fa-envelope"></i>
                      </div>
                      <div className="info">
                        <p>
                          <a href="mailto:info@touron.com">info@touron.com</a>
                        </p>
                      </div>
                    </div>
                    <div className="orbia-info-box style-two mb-20">
                      <div className="icon">
                        <i className="far fa-phone-alt"></i>
                      </div>
                      <div className="info">
                        <p>
                          <a href="tel:(+256)214203215">(+256) 214 203 215</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Copyright Area ===*/}
          <div className="copyright-area">
            <div className="row">
              <div className="col-lg-6">
                {/*=== Copyright Text ===*/}
                <div className="copyright-text text-lg-start text-center">
                  <p>
                    &copy;All Copyright 2025 by <span>Orbia</span>. All Rights
                    Reserved.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                {/*=== Copyright link ===*/}
                <div className="copyright-link text-lg-end text-center">
                  {/* Both point at index.html in the source; carried over as "/"
                      until real Terms and Privacy pages exist. */}
                  <Link href="/">Terms &amp; Conditions</Link>
                  <Link href="/">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
