import Link from "next/link";
import Breadcrumb from "@/app/components/layout/Breadcrumb";
import Counter from "@/app/components/layout/Counter";
import VideoPopup from "@/app/components/layout/VideoPopup";
import TeamTabs, { type TabMember } from "@/app/components/layout/TeamTabs";
import ClientsSlider from "@/app/components/layout/ClientsSlider";
import TestimonialSliderThree from "@/app/components/layout/TestimonialSliderThree";

/*
 * about.html, lines 147-858. Eight sections.
 *
 * Stays a server component (rule 8). Five interactive leaves are dropped in:
 * Counter x4, VideoPopup, TeamTabs, ClientsSlider, TestimonialSliderThree.
 * Everything else — including all the static markup inside the tab panes, which
 * is rendered here and handed to TeamTabs as ready-made elements — is server
 * rendered.
 *
 * Two page-body [data-src] backgrounds (lines 267 and 340) render as
 * server-side inline styles alongside the preserved attribute, as established.
 *
 * Source oddities carried over: the "Discover More", "Explore More" and
 * "Get Started Now" buttons all link to about.html, i.e. this page; the
 * clients slider repeats client-logo3 as its sixth item; all four testimonials
 * are the same person with the same quote; every team member has identical copy,
 * skills and experience.
 */

const CTA_BG = "/assets/images/innerpage/bg/cta-bg.jpg";
const PROCESS_BG = "/assets/images/innerpage/bg/process-bg.jpg";

const COUNTERS = [
  { value: "58", suffix: "k+", label: "Project Completed", duration: "1000" },
  { value: "6", suffix: "k+", label: "Creative Minds", duration: "1200" },
  { value: "36", suffix: "k+", label: "Happy Customers", duration: "1400" },
  { value: "50", suffix: "K+", label: "Collaborative Team", duration: "1600" },
];

const PROCESS = [
  { title: "Design Optimization", duration: "1000" },
  { title: "Development Implementation", duration: "1200" },
  { title: "Performance Analysis", duration: "1400" },
];

const FEATURES = [
  { icon: 6, title: "Tech Support", duration: "1000" },
  { icon: 7, title: "Robo Genius", duration: "1200" },
  { icon: 8, title: "Image Generation", duration: "1400" },
  { icon: 9, title: "Chatbots", duration: "1600" },
];

const MEMBERS: TabMember[] = [
  { id: "team_one", thumb: 1, image: 1, name: "Guy Hawkins" },
  { id: "team_two", thumb: 2, image: 2, name: "Brooklyn Simmons", active: true },
  { id: "team_three", thumb: 3, image: 3, name: "Jenny Wilson" },
];

const SOCIALS = ["facebook-f", "twitter", "linkedin-in", "youtube"];

function SocialBox() {
  return (
    <div className="social-box">
      {SOCIALS.map((s) => (
        <a href="#" key={s}>
          <i className={`fab fa-${s}`}></i>
        </a>
      ))}
    </div>
  );
}

function TeamPane(m: TabMember) {
  return (
    <div className="row">
      <div className="col-lg-5">
        {/* Member Image */}
        <div className="member-image" data-aos="fade-up" data-aos-duration="1000">
          <img
            src={`/assets/images/home-one/team/team-img${m.image}.jpg`}
            alt="team image"
          />
        </div>
      </div>
      <div className="col-lg-7">
        {/* Member Info */}
        <div className="member-info" data-aos="fade-up" data-aos-duration="1000">
          <h3 className="title">{m.name}</h3>
          <span className="position">President of Sales</span>
          <p>
            We value curiosity, collaboration, and a can do attitude. Oh, and coffee
            lots of coffee. Come join a team celebrates your unique skills and helps
            you{" "}
          </p>
          <div className="orbia-progress-item mb-20">
            <div className="progress-title">
              <h6>
                Artificial Intelligence <span>90%</span>
              </h6>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="orbia-progress-item mb-20">
            <div className="progress-title">
              <h6>
                Robotics Management<span>70%</span>
              </h6>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="team-experience-social-box mt-40">
            <div className="experience-box">
              <h3>
                10+ <span>Professional Experience </span>
              </h3>
            </div>
            <SocialBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Breadcrumb title="About Us" crumb="About Us" />
      {/*======  Start About Section  ======*/}
      <section className="orbia-about_four pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-9">
              {/* Orbia Image Box */}
              <div className="orbia-image-box mb-5 mb-xl-0">
                <div className="orbia-image image_one">
                  <img src="/assets/images/innerpage/about/about-img1.jpg" alt="about image" />
                </div>
                <div className="orbia-image image_two">
                  <img src="/assets/images/innerpage/about/about-img2.png" alt="about image" />
                </div>
                <div className="shape shape-one">
                  <img src="/assets/images/innerpage/about/shape1.png" alt="shape one" />
                </div>
                <div className="shape shape-two">
                  <img src="/assets/images/innerpage/about/shape2.png" alt="shape one" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              {/* Orbia Content Box */}
              <div className="orbia-content-box">
                <div className="section-title">
                  <span className="sub-title" data-aos="fade-up" data-aos-duration="1000">
                    About Us
                  </span>
                  <h2 className="text-anm">
                    Using AI Solutions to Lead the Future of Business{" "}
                  </h2>
                </div>
                <p data-aos="fade-up" data-aos-duration="1200">
                  We begin by understanding your business goals, challenges, and
                  opportunities for AI integration. Our experts assess your current
                  systems and identify areas where AI can bring the most impact. Our
                  team designs a tailor-made AI solution based on your specific
                  requirements. We develop machine learning models, build algorithms,
                  and create prototypes with your business objectives.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    {/* Orbia Iconic Box */}
                    <div className="orbia-iconic-box style-three mb-35" data-aos="fade-up" data-aos-duration="1200">
                      <div className="icon">
                        <img src="/assets/images/innerpage/icon/icon1.png" alt="" />
                      </div>
                      <div className="content">
                        <h5>100% Customers Satisfaction</h5>
                        <p>
                          We bring a team of experienced AI specialists, data
                          scientists, industry experts committed to pushing boundaries.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* Orbia Iconic Box */}
                    <div className="orbia-iconic-box style-three mb-35" data-aos="fade-up" data-aos-duration="1400">
                      <div className="icon">
                        <img src="/assets/images/innerpage/icon/icon2.png" alt="" />
                      </div>
                      <div className="content">
                        <h5>Quality Assurance Guarantee</h5>
                        <p>
                          We bring a team of experienced AI specialists, data
                          scientists, industry experts committed to pushing boundaries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="orbia-button" data-aos="fade-up" data-aos-duration="1600">
                  <Link href="/about" className="theme-btn gradient-btn">
                    Discover More
                    <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*======  Start Counter Section  ======*/}
      <section className="orbia-counter-sec pb-80">
        <div className="container">
          <div className="row">
            {COUNTERS.map((c) => (
              <div className="col-xl-3 col-md-6 col-sm-12" key={c.label}>
                {/* Orbia Counter Item */}
                <div
                  className="orbia-counter-item style-two mb-40"
                  data-aos="fade-up"
                  data-aos-duration={c.duration}
                >
                  <div className="content">
                    <h2>
                      <Counter value={c.value} />
                      {c.suffix}
                    </h2>
                    <p>{c.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*======  Start CTA Section  ======*/}
      <section
        className="orbia-cta_three bg_cover"
        data-src={CTA_BG}
        style={{ backgroundImage: `url(${CTA_BG})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Orbia Content Box */}
              <div className="orbia-content-box text-center text-white">
                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                  Solutions
                </span>
                <h2 className="text-anm">
                  Enhance Customer Service with Intelligent Chatbots for Stress-Free
                  Assistance
                </h2>
                <div className="orbia-button" data-aos="fade-up" data-aos-duration="1000">
                  <Link href="/about" className="theme-btn gradient-btn">
                    Explore More
                    <i className="far fa-arrow-right"></i>
                  </Link>
                  <VideoPopup
                    href="https://www.youtube.com/watch?v=8oON21G1Bqg"
                    className="theme-btn style-one video-popup"
                  >
                    Watch Video
                    <i className="far fa-arrow-right"></i>
                  </VideoPopup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*======  Start Who We Section  ======*/}
      <section className="orbia-we_two pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/* Orbia Content Box */}
              <div className="orbia-content-box mb-5 mb-xl-0">
                <div className="section-title">
                  <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                    Who We are
                  </span>
                  <h2 className="text-anm">Redefining Creativity with the Power of AI.</h2>
                </div>
                <p data-aos="fade-up" data-aos-duration="1000">
                  We are a cutting-edge AI agency passionate about turning imagination
                  into reality. Our mission is to empower businesses, creators, and
                  innovators{" "}
                </p>
                <div className="iconic-box-wrapper">
                  <div className="row">
                    <div className="col-md-6 item-column">
                      <div className="orbia-iconic-left-box style-two mb-40" data-aos="fade-up" data-aos-duration="1200">
                        <div className="icon">
                          <img src="/assets/images/innerpage/icon/icon3.png" alt="icon" />
                        </div>
                        <div className="content">
                          <h5>
                            AI-Powered <br /> Innovation
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 item-column">
                      <div className="orbia-iconic-left-box style-two mb-40" data-aos="fade-up" data-aos-duration="1400">
                        <div className="icon">
                          <img src="/assets/images/innerpage/icon/icon4.png" alt="icon" />
                        </div>
                        <div className="content">
                          <h5>
                            Limitless <br /> Styles
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="check-list gradient-check mb-30" data-aos="fade-up" data-aos-duration="1600">
                  <li>
                    <i className="fas fa-check-circle"></i>Harnessing advanced models
                    for unmatched creativity.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>From ultra-realistic to
                    artistic, fantasy, and futuristic.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Generate visuals in seconds,
                    for individuals or enterprises.
                  </li>
                </ul>
                <div className="orbia-button">
                  <Link href="/about" className="theme-btn gradient-btn">
                    Get Started Now
                    <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-10">
              {/* Orbia Image */}
              <div className="orbia-image" data-aos="fade-up" data-aos-duration="1000">
                <img src="/assets/images/innerpage/gallery/who-we-img.jpg" alt="who we image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*======  Start Process Section  ======*/}
      <section
        className="orbia-process_two bg_cover pt-110 pb-70"
        data-src={PROCESS_BG}
        style={{ backgroundImage: `url(${PROCESS_BG})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/* Section Title */}
              <div className="section-title text-center mb-50">
                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                  Work Process
                </span>
                <h2 className="text-anm">Building Success, One Step at a Time</h2>
              </div>
            </div>
          </div>
          {/* Process Wrpper */}
          <div className="process-wrapper">
            <div className="shape shape-one">
              <img src="/assets/images/innerpage/gallery/process-arrow-img1.png" alt="arrow" />
            </div>
            <div className="shape shape-two">
              <img src="/assets/images/innerpage/gallery/process-arrow-img2.png" alt="arrow" />
            </div>
            <div className="row justify-content-center">
              {PROCESS.map((p) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={p.title}>
                  {/* Orbia Iconic Box */}
                  <div className="orbia-iconic-box style-four mb-40" data-aos="fade-up" data-aos-duration={p.duration}>
                    <div className="icon">
                      <img src="/assets/images/innerpage/icon/icon5.png" alt="icon" />
                    </div>
                    <div className="content">
                      <h4>{p.title}</h4>
                      <p>
                        Conduct thorough market of the research to the fast target
                        audience behaviors. Submit as many design tasks
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/*======  Start Team Section  ======*/}
      <section className="orbia-team_one pt-115 pb-105 p-r z-1">
        <div className="shape">
          <img src="/assets/images/home-one/team/team-shape.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              {/* Section Title */}
              <div className="section-title text-center mb-50">
                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                  AI Expert Team
                </span>
                <h2 className="text-anm">Our Professionals AI Expert Team.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <TeamTabs members={MEMBERS} panes={MEMBERS.map((m) => <TeamPane key={m.id} {...m} />)} />
          </div>
        </div>
      </section>
      {/*======  Start Technology Section  ======*/}
      <section className="orbia-features_three gray-bg">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-6">
              {/* Orbia Image */}
              <div className="orbia-image">
                <img src="/assets/images/innerpage/bg/techno-bg.jpg" alt="image" />
                <div className="orbia-avatar-box" data-aos="fade-up" data-aos-duration="1000">
                  <div className="avatar-list">
                    <h3>54K</h3>
                    <h5>Clients Reviews</h5>
                    <ul>
                      {[1, 2, 3].map((n) => (
                        <li key={n}>
                          <img
                            src={`/assets/images/innerpage/feature/avatar-img${n}.jpg`}
                            alt="avatar"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              {/* Orbia Content Box */}
              <div className="orbia-content-box mt-45">
                {/* Section Title */}
                <div className="section-title mb-30">
                  <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                    Advanced Technology
                  </span>
                  <h2 className="text-anm">The AI Intelligent Choice for Business Growth</h2>
                </div>
                <div className="row">
                  {FEATURES.map((f) => (
                    <div className="col-md-6" key={f.title}>
                      {/* Orbia Iconic Box */}
                      <div className="orbia-iconic-box style-five mb-40" data-aos="fade-up" data-aos-duration={f.duration}>
                        <div className="shape">
                          <img src="/assets/images/innerpage/gallery/box-shape.png" alt="shape" />
                        </div>
                        <div className="icon">
                          <img src={`/assets/images/innerpage/icon/icon${f.icon}.png`} alt="icon" />
                        </div>
                        <div className="content">
                          <h4>{f.title}</h4>
                          <p>
                            To empower businesses with intelligent, scalable, impactful
                            solutions that drive
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*======  Start Client Section  ======*/}
      <section className="orbia-client-sec pt-60 pb-60">
        <div className="container-fluid">
          <ClientsSlider />
        </div>
      </section>
      {/*======  Start Testimonial Section  ======*/}
      <section className="orbia-testimonial_three pt-60 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/* Section Title */}
              <div className="section-title text-center mb-50">
                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                  Testimonial
                </span>
                <h2 className="text-anm">
                  Hear what our about customer say about our AI agency
                </h2>
              </div>
            </div>
          </div>
          <TestimonialSliderThree />
        </div>
      </section>
    </>
  );
}
