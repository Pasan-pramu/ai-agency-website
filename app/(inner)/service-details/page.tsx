import Link from "next/link";
import Breadcrumb from "@/app/components/layout/Breadcrumb";

/*
 * service-details.html, lines 147-291.
 *
 * Server component (rule 8). The sidebar search form is markup only — no
 * handler, no state — like every other form until step 8. Note its submit
 * button carries class "search-btn", the same class the header's search-modal
 * trigger uses; that is the template's own collision and is preserved as-is.
 *
 * ROUTE SHAPE: static /service-details. This page contains zero service-specific
 * content — no name, no icon, no field that distinguishes one of the six cards
 * on services.html from another. A /services/[slug] route would emit six URLs
 * of byte-identical content under the same H1. See the report.
 *
 * The .sidebar-cta-widget carries a page-body [data-src] (line 279), rendered as
 * a server-side inline style alongside the preserved attribute.
 *
 * Breadcrumb reads "Services Details" for both title and crumb — the vendor's
 * wording, not a typo introduced here.
 */

const CTA_BG = "/assets/images/innerpage/blog/cta-widget-bg.jpg";

const CATEGORIES = [
  "City Guide",
  "Digital Nomad",
  "New Places",
  "Popular Hosts",
  "Room With A View",
  "Tips & Tricks",
];

export default function ServiceDetails() {
  return (
    <>
      <Breadcrumb title="Services Details" crumb="Services Details" />
      {/*======  Start Service Details Section  ======*/}
      <section className="orbia-service-details-sec pt-120 pb-85">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              {/* Service Details Wrapper */}
              <div className="service-details-wrapper">
                <div className="service-main-item">
                  <div className="thumbnail mb-30">
                    <img
                      src="/assets/images/innerpage/service/sevice-single-img1.jpg"
                      alt="service image"
                    />
                  </div>
                  <div className="content">
                    <h3>Using Personalized Technology to Encourage Innovation.</h3>
                    <p>
                      Our specialty is developing custom technological solutions that
                      are suited to your company&apos;s particular requirements. We
                      offer cutting-edge solutions that optimize workflows, boost
                      efficiency, and spur expansion, ranging from cloud computing and
                      AI-powered tools to custom software development and IoT
                      integration. Our team of professionals guarantees that every
                      solution is scalable, safe, and in line with your objectives,
                      whether you&apos;re wanting to modernize legacy systems, automate
                      workflows, or create intelligent apps. by fusing state-of-the-art
                      technology.
                    </p>
                    <p>
                      With a thorough understanding of your company, we provide strong
                      tools that not only address your problems but also enable you to
                      maintain your competitive edge in the ever changing digital
                      market. make sure that our technology not only addresses current
                      issues but also sets up your company for long-term success in the
                      rapidly changing digital landscape.
                    </p>
                    <div className="content-box">
                      <h3>Key Features of AI Technology</h3>
                      <p>
                        Our specialty is developing custom technological solutions that
                        are suited to your company&apos;s part requirements. We offer
                        cutting-edge solutions that optimize workflows, boost
                        efficiency, and spur expansion,
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="check-list gradient-check mb-40">
                            <li>
                              <i className="fas fa-check-circle"></i>Consultation and
                              Discovery
                            </li>
                            <li>
                              <i className="fas fa-check-circle"></i>Discover our
                              expertise
                            </li>
                            <li>
                              <i className="fas fa-check-circle"></i>Troubleshooting
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="check-list gradient-check mb-40">
                            <li>
                              <i className="fas fa-check-circle"></i>Meet or team
                            </li>
                            <li>
                              <i className="fas fa-check-circle"></i>Meet our team and
                              learn
                            </li>
                            <li>
                              <i className="fas fa-check-circle"></i>Journey and
                              commitment to explanined
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="orbia-image mb-40" data-aos="fade-up" data-aos-duration="800">
                          <img
                            src="/assets/images/innerpage/service/sevice-single-img2.jpg"
                            alt="service image"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="orbia-image mb-40" data-aos="fade-up" data-aos-duration="1000">
                          <img
                            src="/assets/images/innerpage/service/sevice-single-img3.jpg"
                            alt="service image"
                          />
                        </div>
                      </div>
                    </div>
                    <p data-aos="fade-up" data-aos-duration="1000">
                      Our specialty is developing custom technological solutions that
                      are suited to your company&apos;s particular requirements. We
                      offer cutting-edge solutions that optimize workflows, boost
                      efficiency, and spur expansion, ranging from cloud computing and
                      AI-powered tools to custom software development and IoT
                      integration.{" "}
                    </p>
                    <div className="content-box mb-30" data-aos="fade-up" data-aos-duration="1000">
                      <h3>Benefits of AI Technology</h3>
                      <p>
                        Our specialty is developing custom technological solutions that
                        are suited to your company&apos;s particular requirements. We
                        offer cutting-edge solutions that optimize workflows, boost
                        efficiency, and spur expansion, ranging from cloud computing
                        and AI-powered tools to custom software development and IoT
                        integration.{" "}
                      </p>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="orbia-content-item style-two mb-40">
                            <div className="content">
                              <h5>Improved Accuracy</h5>
                              <p>
                                These companies provide services for a digital agency
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="orbia-content-item style-two mb-40">
                            <div className="content">
                              <h5>Efficiency &amp; Automation</h5>
                              <p>
                                These companies provide services for a digital agency
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="orbia-content-item style-two mb-40">
                            <div className="content">
                              <h5>24/7 Online Support</h5>
                              <p>
                                We provide service for Digital Agency Online Support.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-box" data-aos="fade-up" data-aos-duration="1000">
                      <h3>AI Technology</h3>
                      <p>
                        Our specialty is developing custom technological solutions that
                        are suited to your company&apos;s particular requirements. We
                        offer cutting-edge solutions that optimize workflows, boost
                        efficiency, and spur expansion, ranging from cloud computing
                        and AI-powered tools to custom software development and IoT
                        integration.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                {/*===  Sidebar Widget  ===*/}
                <div
                  className="sidebar-widget sidebar-search-widget mb-30"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className="widget-content">
                    <form>
                      <div className="form-group">
                        <input
                          type="search"
                          className="form_control"
                          placeholder="Enter Keyword"
                          name="search"
                          required
                        />
                        <button className="search-btn">
                          <i className="far fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/*===  Sidebar Widget  ===*/}
                <div
                  className="sidebar-widget sidebar-nav-widget mb-30"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h4 className="widget-title">Category</h4>
                  <div className="widget-content">
                    <ul>
                      {CATEGORIES.map((c) => (
                        <li key={c}>
                          <a href="#">
                            {c}
                            <span>
                              <i className="far fa-arrow-right"></i>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/*===  Sidebar Widget  ===*/}
                <div
                  className="sidebar-widget sidebar-cta-widget bg_cover"
                  data-src={CTA_BG}
                  style={{ backgroundImage: `url(${CTA_BG})` }}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="widget-content">
                    <h3>Transform with AI</h3>
                    <p>
                      Our specialty is developing AI technological solutions that are
                      suited to your company&apos;s part requirements. We offer cutting
                    </p>
                    <Link href="/contact" className="theme-btn gradient-btn">
                      Get Started Now
                      <i className="far fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
