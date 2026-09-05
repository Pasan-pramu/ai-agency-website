import Breadcrumb from "@/app/components/layout/Breadcrumb";

/*
 * contact.html, lines 147-268.
 *
 * Server component (rule 8) — nothing on this page is interactive. The contact
 * form is markup only: no onSubmit, no state, no validation. Step 8 wires it up.
 *
 * The page body carries no [data-src] of its own; grep finds exactly three on
 * contact.html and all three are shell elements — line 148 is the breadcrumb
 * (handled inside Breadcrumb) and lines 269/316 are the footer's two
 * backgrounds (handled inside Footer).
 *
 * contact.html's header (54-142) and footer (269-431) are byte-identical to
 * about.html's, verified by diff, so the inner shell covers both unchanged.
 */
export default function Contact() {
  return (
    <>
      <Breadcrumb title="Contact Us" crumb="Contact Us" />
      {/*======  Start Contact Info Section  ======*/}
      <section className="orbia-contact-info-sec pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-8">
              {/* Orbia Content Box */}
              <div className="orbia-content-box">
                <div className="section-title">
                  <span className="sub-title" data-aos="fade-down" data-aos-duration="800">
                    Get in touch
                  </span>
                  <h2 className="text-anm">Contact with Us For Your Any Help</h2>
                </div>
                <p className="mb-20" data-aos="fade-up" data-aos-duration="1000">
                  We’d love to hear from you! Whether you have questions, need more
                  information, or are ready to discuss how we can help you.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="info-list mb-15" data-aos="fade-up" data-aos-duration="1000">
                      <h6>Call Center:</h6>
                      <p>
                        <a href="tel:+163217322978">+163 2173 22978</a>
                      </p>
                      <p>
                        <a href="tel:+163217322978">+163 2173 22979</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-list mb-15" data-aos="fade-up" data-aos-duration="1100">
                      <h6>Our Location:</h6>
                      <p>Apple Upper West Side, Brooklyn</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-list mb-15" data-aos="fade-up" data-aos-duration="1200">
                      <h6>Our Social:</h6>
                      <div className="social-box mt-10">
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
                  <div className="col-md-6">
                    <div className="info-list mb-15" data-aos="fade-up" data-aos-duration="1300">
                      <h6>Our Email:</h6>
                      <p>
                        <a href="mailto:evenzahelp@gmail.com">evenzahelp@gmail.com</a>
                      </p>
                      <p>
                        <a href="mailto:evenzahelp@gmail.com">support@Info.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8">
              {/*=== Map Box ===*/}
              <div className="map-box mt-5 mt-xl-0" data-aos="fade-up" data-aos-duration="1200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d96777.16150026117!2d-74.00840582560909!3d40.71171357405996!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706508986625!5m2!1sen!2sbd"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*======  Start Contact Section  ======*/}
      <section className="orbia-contact_three pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-wrapper text-center" data-aos="fade-up" data-aos-duration="1000">
                <h3 className="title">Get In Touch</h3>
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Your name"
                          name="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Phone Number"
                          name="phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Subject"
                          name="Subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="form_control"
                          placeholder="Message"
                          rows={5}
                          name="message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button className="theme-btn gradient-btn">
                          Send Message
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
      </section>
    </>
  );
}
