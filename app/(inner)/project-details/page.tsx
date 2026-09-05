import Link from "next/link";
import Breadcrumb from "@/app/components/layout/Breadcrumb";

/*
 * project-details.html, lines 147-310.
 *
 * Server component (rule 8). No collapse markup on this page.
 *
 * ROUTE SHAPE: static /project-details for now, not /projects/[slug]. This is
 * the closer call of the two detail pages — the sidebar's
 * .sidebar-project-info-widget defines a genuine per-entry record (client,
 * category, date, address) and the prev/next block implies an ordered
 * collection — but the template fills in exactly one instance and all four
 * cards on projects.html point at it. Going dynamic now would mean inventing
 * client names and delivery dates for three more projects, which is a worse
 * class of placeholder than lorem text on a real company site. See the report
 * for the exact fields a step-9 data file would need.
 *
 * The prev/next links both point at project-details.html in the source, i.e.
 * at the page itself; carried over as /project-details.
 *
 * The .sidebar-cta-widget carries a page-body [data-src] (line 298) — the first
 * outside the shell in this migration. Rendered as a server-side inline style
 * alongside the preserved attribute, per the divergences section.
 */

const CTA_BG = "/assets/images/innerpage/blog/cta-widget-bg.jpg";

const INFO = [
  { icon: "fas fa-user", label: "Clients:", value: "Michel Miller" },
  { icon: "far fa-folder-open", label: "Category:", value: "Digital Marketing" },
  { icon: "fas fa-calendar-alt", label: "Date:", value: "21 Jun, 2024" },
  { icon: "fas fa-map-marker-alt", label: "Address:", value: "42 Hangston, USA" },
];

export default function ProjectDetails() {
  return (
    <>
      <Breadcrumb title="Project Details" crumb="Project Details" />
      {/*======  Start Project Details Section  ======*/}
      <section className="orbia-project-details-sec pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/* Project Details Wrapper */}
              <div className="project-details-wrapper">
                <div className="project-main-item mb-30">
                  <div className="project-thumbnail mb-20">
                    <img
                      src="/assets/images/innerpage/project/project-single1.jpg"
                      alt="Project Image"
                    />
                  </div>
                  <div className="project-content">
                    <h3 className="title">
                      Using Personalized Technology to Encourage Innovation.
                    </h3>
                    <p>
                      we are at the forefront of innovation, redefining how
                      intelligence shapes the technology of tomorrow. Our focus is on
                      building solutions that integrate artificial intelligence,
                      machine learning, and next-generation technologies to transform
                      industries and create smarter, more efficient systems. From
                      predictive analytics and intelligent automation to adaptive
                      algorithms and data-driven decision-making, our solutions
                      empower businesses to stay ahead in a rapidly evolving
                      world.With a commitment to pushing the boundaries of what’s
                      possible.
                    </p>
                    <p>
                      With a commitment to pushing the boundaries of what’s possible,
                      we aim to create technology that doesn’t just solve problems but
                      anticipates needs, adapts to changes, and drives sustainable
                      growth. Whether it&apos;s building smart applications, advancing
                      IoT ecosystems, or leveraging AI for business insights, we
                      deliver solutions that are intelligent, scalable, and
                      future-ready. Join us in shaping the future.
                    </p>
                    <h3>Project Overview</h3>
                    <p>
                      we are at the forefront of innovation, redefining how
                      intelligence shapes the technology of tomorrow. Our focus is on
                      building solutions that integrate artificial intelligence,
                      machine learning, and next-generation technologies to transform
                      industries and create smarter, more efficient systems.
                    </p>
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <ul className="check-list gradient-check mb-30">
                          <li>
                            <i className="fas fa-check-circle"></i>Analytics To
                            Explained
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Scalability And
                            Adaptability
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul className="check-list gradient-check mb-30">
                          <li>
                            <i className="fas fa-check-circle"></i>Capacity Expansion
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>AI-Driven Automation
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul className="check-list gradient-check mb-30">
                          <li>
                            <i className="fas fa-check-circle"></i>Key Deliverables
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Custom Technology
                            Solutions
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h3>Get the Result</h3>
                    <p>
                      we are at the forefront of innovation, redefining how
                      intelligence shapes the technology of tomorrow. Our focus is on
                      building solutions that integrate artificial intelligence,
                      machine learning, and next-generation{" "}
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="orbia-image mb-30" data-aos="fade-up" data-aos-duration="800">
                          <img
                            src="/assets/images/innerpage/project/project-single2.jpg"
                            alt="project image"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="orbia-image mb-30" data-aos="fade-up" data-aos-duration="1000">
                          <img
                            src="/assets/images/innerpage/project/project-single3.jpg"
                            alt="project image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Project Navigation Wrapper */}
                <div
                  className="project-navigation-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <Link href="/project-details" className="project-navigation-item">
                        <div className="thumbnail">
                          <img
                            src="/assets/images/innerpage/project/prev.jpg"
                            alt="prev"
                          />
                        </div>
                        <div className="content">
                          <h4>Preview</h4>
                          <p>Analsytic Solutions</p>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-2 d-none d-md-block">
                      <div className="project-navigation-icon text-center">
                        <i className="fas fa-th"></i>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <Link
                        href="/project-details"
                        className="project-navigation-item item-rtl"
                      >
                        <div className="thumbnail">
                          <img
                            src="/assets/images/innerpage/project/next.jpg"
                            alt="prev"
                          />
                        </div>
                        <div className="content">
                          <h4>Next</h4>
                          <p>Software Development</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-10">
              {/*=== Sidebar Widget Area ===*/}
              <div className="sidebar-widget-area">
                {/*===  Sidebar Widget  ===*/}
                <div
                  className="sidebar-widget sidebar-project-info-widget mb-30"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <h4 className="widget-title">Project Info</h4>
                  <div className="widget-content">
                    {INFO.map((item, i) => (
                      <div
                        className={
                          i === INFO.length - 1
                            ? "project-info-item"
                            : "project-info-item mb-30"
                        }
                        key={item.label}
                      >
                        <div className="icon">
                          <i className={item.icon}></i>
                        </div>
                        <div className="info">
                          <span>{item.label}</span>
                          <h5>{item.value}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/*===  Sidebar Widget  ===*/}
                <div
                  className="sidebar-widget sidebar-cta-widget bg_cover"
                  data-src={CTA_BG}
                  style={{ backgroundImage: `url(${CTA_BG})` }}
                  data-aos="fade-up"
                  data-aos-duration="1000"
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
