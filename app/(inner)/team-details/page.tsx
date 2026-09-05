import Breadcrumb from "@/app/components/layout/Breadcrumb";

/*
 * team-details.html, lines 147-293.
 *
 * Server component (rule 8). The contact form is markup only — no handler, no
 * state, no validation. Step 8 wires the forms up.
 *
 * ROUTE SHAPE: static /team-details, not /team/[slug]. The template ships one
 * detail page and zero per-member records — all eight cards on team.html link to
 * the same file — so a dynamic route would have to be fed invented bios, emails,
 * phone numbers and skill percentages. That is step 9's job and the client's
 * decision, not this step's. The JSX body is identical either way, so switching
 * later is a file move plus generateStaticParams.
 *
 * DIVERGENCE (AGENTS.md, Deliberate divergences): source line 184 is
 *     <a href="LeslieAlexander@gmail.com">Leslie Alexander@gmail.com</a>
 * a bare address with no scheme, which resolves as a relative path. It gains a
 * mailto: here. The visible link text is left exactly as shipped, space and all.
 *
 * Source inconsistency left alone: the header names Marvin McKinney while the
 * email and the About Me copy both name Leslie Alexander. Picking one would be a
 * content decision.
 *
 * No [data-src] in the page body.
 */

const SKILLS = [
  { label: "Business consultants ", pct: "90%" },
  { label: "Client communication", pct: "70%" },
  { label: "Business strategy", pct: "85%" },
];

export default function TeamDetails() {
  return (
    <>
      <Breadcrumb title="Team Details" crumb="Team Details" />
      {/*======  Start Team Details Wrapper Section  ======*/}
      <section className="orbia-team-details-sec pt-120 pb-120">
        <div className="container">
          <div className="team-details-wrapper">
            <div className="row">
              <div className="col-lg-4">
                {/* Member image Wrap */}
                <div
                  className="member-image-wrap mb-5 mb-lg-0"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="member-image">
                    <img
                      src="/assets/images/innerpage/team/team-single1.jpg"
                      alt="team single"
                    />
                  </div>
                  <div className="member-info">
                    <h4>Marvin McKinney</h4>
                    <span className="position">President of Sales</span>
                    <div className="info-list">
                      <h6>Experience:</h6>
                      <p>20+ Years</p>
                    </div>
                    <div className="info-list">
                      <h6>Email</h6>
                      <p>
                        <a href="mailto:LeslieAlexander@gmail.com">
                          Leslie Alexander@gmail.com
                        </a>
                      </p>
                    </div>
                    <div className="info-list">
                      <h6>Phone</h6>
                      <p>
                        <a href="tel:+02-258-5687-363">+02 -258 -5687-363</a>
                      </p>
                    </div>
                    <div className="info-list">
                      <h6>Social Media</h6>
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
              </div>
              <div className="col-lg-8">
                {/* Team Details Content */}
                <div className="team-details-content">
                  <div className="content-box" data-aos="fade-up" data-aos-duration="1000">
                    <h3>About Me</h3>
                    <p>
                      Leslie Alexander is one of the best online resources for
                      learning about technology in the medical sphere. There’s a real
                      sense skepticiesm cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa
                      qui officia deserunt mollit aniem id If you run an internet
                      search for medical blogs, you’ll come across hundreds of
                      results. And figuring out which sources are reputable can take
                      a lot of time. To help ease the process, we compiled. we
                      present present exciting new ventures.
                    </p>
                    <p>
                      The New York coworking community has also been evolving rapidly
                      Regus and Rockefeller Group Business Center. We Work and other
                      services have a large presence. The demand coworking Brooklyn
                      neighborhoods is high due to the increased number of millennials
                      in workforce; nearly one in 10 workers in the Gowanus, Brooklyn
                      area are remote workers. The industrial area of Gowanus is
                      seeing a surge in new startups that are redesigning old
                      buildings into new coworking spaces.
                    </p>
                  </div>
                  <div className="content-box" data-aos="fade-up" data-aos-duration="1200">
                    <h3>Our team has resolved the issue.</h3>
                    <p>
                      Our mission is to empowers businesses size to thrivie in ses
                      ever changing marketplace We are committed to the delivering
                      exceptionals the value thro strategic ins innovative approaches.
                      Our consulting of our missing empowers businesses of all sizes
                      Committed to the delivering exceptional in the values
                    </p>
                    <ul className="check-list gradient-check mb-40">
                      <li>
                        <i className="fas fa-check-circle"></i>Covers all the
                        international news via websites, blogs, newswires, newspapers,
                        trade publication
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>This Database provides
                        books, conference proceedings and journals covering all
                        disciplines in academics
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Fintech is growing
                        rapidly but Internet Access, Government compliance and Data
                        Security is where it is still
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>Database provides
                        returns for exchange rates, fixed income tax, price earnings,
                        prices, equity data
                      </li>
                    </ul>
                  </div>
                  <div className="content-box" data-aos="fade-up" data-aos-duration="1400">
                    <h3>Professional skills</h3>
                    <p>
                      Our mission is to empowers businesses size to thrivie in ses
                      ever changing marketplace We are committed to the delivering
                      exceptionals the value thro strategic ins innovative approaches.
                      Our consulting of our missing empowers businesses of all sizes
                      Committed to the delivering exceptional in the values
                    </p>
                    {SKILLS.map((s) => (
                      <div className="orbia-progress-item mb-20" key={s.label}>
                        <div className="progress-title">
                          <h6>
                            {s.label}
                            <span>{s.pct}</span>
                          </h6>
                        </div>
                        <div className="progress">
                          <div className="progress-bar" style={{ width: s.pct }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="contact-wrapper mt-40" data-aos="fade-up" data-aos-duration="1600">
                    <h3>Contact With Me</h3>
                    {/* Contact Form */}
                    <form className="contact-form" autoComplete="off">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form_control"
                              placeholder="Enter Name"
                              name="name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form_control"
                              placeholder="Enter Email"
                              name="email"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form_control"
                              placeholder="Enter Subject"
                              name="subject"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form_control"
                              placeholder="Enter Phone"
                              name="phone"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea
                              className="form_control"
                              name="message"
                              placeholder="Enter Message"
                              rows={9}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group text-center">
                            <button className="theme-btn gradient-btn">
                              SEND MESSAGE
                              <i className="far fa-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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
