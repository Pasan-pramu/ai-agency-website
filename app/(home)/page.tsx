import Link from "next/link";
import ServiceCards, { type ServiceCard } from "@/app/components/layout/ServiceCards";
import ProjectAccordion, { type ProjectItem } from "@/app/components/layout/ProjectAccordion";
import ClientsSlider from "@/app/components/layout/ClientsSlider";
import TestimonialSliderOne from "@/app/components/layout/TestimonialSliderOne";
import TeamSection from "@/app/components/layout/TeamSection";

/*
 * index.html, lines 147-1239. Twelve sections, the largest page in the template
 * and the only one with no breadcrumb — its <main> opens straight into the hero.
 * Uses the `home` shell variant via app/(home)/layout.tsx: no `page-header` on
 * <header>, no `pt-120` on <footer>, drawer CTA `gradient-btn`.
 *
 * Stays a server component (rule 8). Four interactive leaves: ServiceCards,
 * ProjectAccordion, ClientsSlider, TestimonialSliderOne, plus TeamTabs inside
 * the shared TeamSection.
 *
 * Seven page-body [data-src] backgrounds (150, 236, 431, 610, 797, 841, 1089)
 * render as server-side inline styles alongside the preserved attribute.
 *
 * DIVERGENCE (AGENTS.md): source line 1166 is
 *     <a href="mail:info@exmple.com">info@exmple.com</a>
 * — a broken scheme AND a typo'd domain. The href becomes a valid mailto: with
 * the placeholder address below. THE VISIBLE TEXT IS LEFT AS SHIPPED, so the
 * page still reads "info@exmple.com" until real contact details replace both.
 *
 * Source oddities carried over: the About section's "View All Project" button
 * links to index.html (i.e. this page) rather than projects.html; the project
 * accordion's "View Details" icon class is the broken `far fa arrow-right`; the
 * animated text marquee is pure CSS with no JS behind it, and its two rows are
 * identical.
 */

const HERO_BG = "/assets/images/home-one/hero/hero-bg.jpg";
const SERVICE_BG = "/assets/images/home-one/bg/service-bg.jpg";
const CHOOSE_BG = "/assets/images/home-one/bg/choose-bg.jpg";
const TESTIMONIAL_SHAPE = "/assets/images/home-one/testimonial/testimonial-shape.png";
const PRICING_BG = "/assets/images/home-one/bg/pricing-bg.jpg";
const PRICING_BG2 = "/assets/images/home-one/bg/pricing-bg2.jpg";
const CONTACT_BG = "/assets/images/home-one/bg/contact-bg.jpg";

/* Placeholder — replace with the real address (see the divergence note above). */
const CONTACT_EMAIL = "info@example.com";

const SERVICES: ServiceCard[] = [
  {
    icon: 1,
    title: "AI Strategy",
    body: "Successful AI adoption starts with  strategy. works with you  assess opportunities, design  AI roadmap, ensure smooth integration results",
    duration: "800",
  },
  {
    icon: 2,
    title: "Machine Learning",
    body: "Harness predictive models and advanced analytics to make smarter decisions. assess opportunities, ensure integration results",
    duration: "1000",
  },
  {
    icon: 3,
    title: "Computer Vision",
    body: "Streamline operations aboost productivity with driven automation. design  AI roadmap, ensure integration AI roadmap integration results",
    duration: "1200",
  },
  {
    icon: 4,
    title: "NLP & Chatbots",
    body: "Unique AI solutions built to fit your industry challenges and goals. works with you assess opportunities, ensure integration results",
    duration: "1400",
  },
];

const PROJECTS: ProjectItem[] = [
  {
    id: "collapse1",
    eyebrow: "Deep Vision:",
    title: "Autonomous vehicle navigation with advanced Ai Startup Agency",
    img: 1,
    duration: "800",
  },
  {
    id: "collapse2",
    eyebrow: "Ai Verse:",
    title: "Natural language pocessing powered by Ai Startup Agency",
    img: 2,
    duration: "1000",
    open: true,
  },
  {
    id: "collapse3",
    eyebrow: "Deep Vision:",
    title: "Predictive stock market analysis using Ai Startup Agency",
    img: 3,
    duration: "1200",
  },
];

const MARQUEE = [
  "AI Image Generator",
  "AI Technology",
  "Generate With Ease",
  "Content Generator",
  "AI Technology",
];

const ADVANCE = [
  { n: "01", icon: 7, title: "Tech support", duration: "1000" },
  { n: "02", icon: 8, title: "Robo Genius", duration: "1200" },
  { n: "03", icon: 7, title: "Image Generation", duration: "1400" },
  { n: "04", icon: 7, title: "Chatbots", duration: "1600" },
];

const PLAN_FEATURES = [
  "1 User",
  "Unlimited Projects",
  "Download prototypes",
  "1 Gb workspace",
  "25 Deployment Slots",
  "Customer Management",
];

const POSTS = [
  { img: 1, title: "Unlocking the Power of Data for Business Success.", duration: "1000" },
  { img: 2, title: "The Future of Work Embracin Digital Transformation.", duration: "1200" },
  { img: 3, title: "How AI is Revolutionizing Business and Industry Today", duration: "1400" },
];

function ScrollTextRow() {
  return (
    <div className="oriba-scroll-text scroll-left">
      {MARQUEE.map((t, i) => (
        <span className="scroll-text-inner" key={i}>
          <span className="text">{t}</span>
          <span className="icon">
            <i className="far fa-star-of-life"></i>
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/*======  Start Hero Section  ======*/}
      <section className="orbia-hero_one">
        {/* Hero Wrapper */}
        <div
          className="hero-wrapper bg_cover"
          data-src={HERO_BG}
          style={{ backgroundImage: `url(${HERO_BG})` }}
        >
          <div className="hero-shape shape-one">
            <img src="/assets/images/home-one/hero/hero-shape2.png" alt="shape" />
          </div>
          <div className="hero-shape shape-two">
            <img src="/assets/images/home-one/hero/hero-shape1.png" alt="shape" />
          </div>
          <div className="container-fluid">
            <div className="row justify-content-center justify-content-xl-start">
              <div className="col-xl-6 col-lg-10">
                {/* Hero Content */}
                <div className="hero-content text-center text-xl-start">
                  <span className="tag-line" data-aos="fade-down" data-aos-duration="1500">
                    Smarter Tech for Tomorrow
                  </span>
                  <h1 className="text-anm">
                    <span>AI For Your</span> Business Boosting <span>Growth</span>
                  </h1>
                  <p data-aos="fade-up" data-aos-duration="1500">
                    Web developers and marketers who’ve been delivering digital success
                    for more than a decade. We excel at marketing websites,
                  </p>
                  <div className="hero-button-wrap">
                    <div className="orbia-button" data-aos="fade-up" data-aos-duration="1500">
                      <Link href="/contact" className="theme-btn gradient-btn">
                        Get A Quote
                        <i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="orbia-avatar-box" data-aos="fade-up" data-aos-duration="1700">
                      <div className="avatar-list">
                        <ul>
                          {[1, 2, 3].map((n) => (
                            <li key={n}>
                              <img
                                src={`/assets/images/home-one/hero/avatar-img${n}.jpg`}
                                alt="avatar image"
                              />
                            </li>
                          ))}
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
                          <h6>20K+ users</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-10">
                {/* Hero Image */}
                <div className="hero-image">
                  <img src="/assets/images/home-one/hero/hero-img1.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*======  Start About Section  ======*/}
      <section className="orbia-about_one pt-90 pb-120">
        <div className="shape">
          <img src="/assets/images/home-one/about/about-shape.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-10">
              {/* Orbia Image Box */}
              <div className="orbia-image-box mb-5 mb-xl-0">
                <div className="orbia-image image_one" data-aos="fade-down" data-aos-duration="800">
                  <img src="/assets/images/home-one/about/about-img1.jpg" alt="about image" />
                </div>
                <div className="orbia-image image_two" data-aos="fade-up" data-aos-duration="1000">
                  <img src="/assets/images/home-one/about/about-img2.png" alt="about image" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-10">
              {/* Orbia Content Box */}
              <div className="orbia-content-box">
                <div className="section-title">
                  <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                    About Us
                  </span>
                  <h2 className="text-anm">
                    Transforming Businesses with AI-Powered Innovation
                  </h2>
                </div>
                <p className="mb-30" data-aos="fade-up" data-aos-duration="1200">
                  we are pioneers in the fusion of creativity and cutting-edge AI
                  technology. Our mission is transform the way businesses approach
                  design anddigital strategy by delivering innovative,
                </p>
                <ul className="check-list gradient-check mb-30" data-aos="fade-up" data-aos-duration="1400">
                  <li>
                    <i className="fas fa-check-circle"></i>Advanced Artificial
                    Intelligence Capabilities for Enhanced Efficiency.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Real-time Data Analysis and
                    Monitoring for Optimized Performance.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Collaborative and Autonomous
                    Robots for Seamless Integration
                  </li>
                </ul>
                <div className="orbia-button" data-aos="fade-up" data-aos-duration="1600">
                  <Link href="/" className="theme-btn gradient-btn">
                    View All Project
                    <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*======  Start Service Section  ======*/}
      <section
        className="orbia-service_one bg_cover pt-115 pb-120"
        data-src={SERVICE_BG}
        style={{ backgroundImage: `url(${SERVICE_BG})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10">
              {/* Section Title */}
              <div className="section-title text-center text-white mb-45">
                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                  Our Best Services
                </span>
                <h2 className="text-anm">
                  Advanced Features Tailored to Your Services
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <ServiceCards cards={SERVICES} />
          </div>
        </div>
      </section>
      {/*======  Start Project Section  ======*/}
      <section className="orbia-project_one pt-115 pb-110 p-r z-1">
        <div className="shape">
          <img src="/assets/images/home-one/project/shape.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-10 text-center text-xl-start">
              {/* Sub Title */}
              <div className="section-title mb-4 mb-xl-5" data-aos="fade-down" data-aos-duration="1000">
                <span className="sub-title">Our Projects &amp; Case Studies</span>
              </div>
            </div>
            <div className="col-xl-7 col-lg-10">
              {/* Section Title */}
              <div className="section-title mb-55 text-center text-xl-start">
                <h2 className="text-anm">
                  Real-World Applications of AI Technology That Drive Impact
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-xl-7 col-lg-12">
              <ProjectAccordion id="projectAccordion" items={PROJECTS} />
            </div>
          </div>
        </div>
      </section>
      {/*====== Start Animated Text ======*/}
      <section className="animated-text-slide pb-120">
        <ScrollTextRow />
        <ScrollTextRow />
      </section>
      {/*====== Start Choose Section ======*/}
      <section className="orbia-choose_one">
        <div
          className="orbia-choose-wrapper p-r z-1 bg_cover"
          data-src={CHOOSE_BG}
          style={{ backgroundImage: `url(${CHOOSE_BG})` }}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-5">
                {/* Orbia Image */}
                <div className="orbia-image mb-5 mb-xl-0" data-aos="fade-up" data-aos-duration="1000">
                  <img src="/assets/images/home-one/gallery/choose-img1.jpg" alt="choose image" />
                  <div className="orbia-rating-box">
                    <div className="content">
                      <h2>98%</h2>
                      <p>Highly rated by millions of user!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                {/* Orbia Content Box */}
                <div className="orbia-content-box">
                  {/* Section Title */}
                  <div className="section-title text-white">
                    <span className="sub-title" data-aos="fade-down" data-aos-duration="1400">
                      WHY CHOOSE US
                    </span>
                    <h2 className="text-anm">
                      Transform your online presence with AI Technology
                    </h2>
                  </div>
                  <p data-aos="fade-up" data-aos-duration="1200">
                    To be a leading AI agency recognized for creating intelligent
                    solutions that dr meaningful change across industries, fostering
                    smarter decision making, and enabling businesses to achieve their
                    full potential to make image creation accessible, efficient, and
                    inspiring for
                  </p>
                  <div className="experience-iconic-wrapper">
                    <div className="experience-box" data-aos="fade-up" data-aos-duration="1400">
                      <div className="content">
                        <div className="number">
                          <h2>25</h2>
                          <span className="symbol">
                            <img src="/assets/images/home-one/gallery/plus.png" alt="plus symbol" />
                          </span>
                        </div>
                        <h4>Years Of Experience</h4>
                      </div>
                    </div>
                    <div className="iconic-box-list">
                      <div className="orbia-iconic-left-box style-one mb-30" data-aos="fade-up" data-aos-duration="1600">
                        <div className="icon">
                          <img src="/assets/images/home-one/icon/icon5.png" alt="icon" />
                        </div>
                        <div className="content">
                          <h5>Technology Integration</h5>
                          <p>We bring a team of experienced AI specialists, data scientists</p>
                        </div>
                      </div>
                      <div className="orbia-iconic-left-box style-one mb-30" data-aos="fade-up" data-aos-duration="1800">
                        <div className="icon">
                          <img src="/assets/images/home-one/icon/icon6.png" alt="icon" />
                        </div>
                        <div className="content">
                          <h5>Certified Experts</h5>
                          <p>We bring a team of experienced AI specialists, data scientists,</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p data-aos="fade-up" data-aos-duration="2000">
                    Anyone Can Make You Promise We Can Give You Proof
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Start Client Section ======*/}
      <section className="orbia-client-sec pt-120 pb-60">
        <div className="container-fluid">
          <ClientsSlider />
        </div>
      </section>
      {/*====== Start Process Section ======*/}
      <section className="orbia-process_one p-r z-1 pt-55 pb-120">
        <div className="process-shape">
          <img src="/assets/images/home-one/gallery/process-shape.png" alt="process shape" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Section TItle */}
              <div className="section-title text-center mb-55">
                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                  How IT WORK
                </span>
                <h2 className="text-anm">The AI Transformation Journey</h2>
                <p data-aos="fade-up" data-aos-duration="1200">
                  We begin with a detailed consultation to learn about your business
                  challenges, goals, and opportunities for AI integration
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* Process Wrapper */}
              <div className="process-wrapper">
                {/* Orbis Process Box */}
                <div className="orbia-process-box" data-aos="fade-up" data-aos-duration="1000">
                  <div className="content">
                    <img src="/assets/images/home-one/gallery/process-sh1.png" alt="process shape" />
                    <h4 className="title">Discovery &amp; Consultation</h4>
                  </div>
                </div>
                {/* Orbia Process Arrow Box */}
                <div className="orbia-proces-arrow-box" data-aos="fade-up" data-aos-duration="1200">
                  <div className="content">
                    <img src="/assets/images/home-one/gallery/process-arrow.png" alt="process shape" />
                    <p>Understanding Your Needs</p>
                  </div>
                </div>
                {/* Orbia Process Box */}
                <div className="orbia-process-box-wrap" data-aos="fade-up" data-aos-duration="1400">
                  <div className="orbia-process-circle-box bg_one">
                    <div className="content">
                      <img src="/assets/images/home-one/gallery/process-sh2.png" alt="process shape" />
                      <h4 className="title">
                        Data &amp; <br /> Feasibility
                      </h4>
                    </div>
                  </div>
                  <div className="orbia-process-circle-box bg_two">
                    <div className="content">
                      <p>Our experts analyze your data, workflows, and technology stack </p>
                    </div>
                  </div>
                </div>
                {/* Process Arrow Box */}
                <div className="orbia-proces-arrow-box" data-aos="fade-up" data-aos-duration="1600">
                  <div className="content">
                    <img src="/assets/images/home-one/gallery/process-arrow.png" alt="process shape" />
                    <p>Understanding Your Needs</p>
                  </div>
                </div>
                {/* Orbia Process Box */}
                <div className="orbia-process-box" data-aos="fade-up" data-aos-duration="1800">
                  <div className="content">
                    <img src="/assets/images/home-one/gallery/process-sh3.png" alt="process shape" />
                    <h4 className="title">Development &amp; Integration</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Start Testimonial Section ======*/}
      <section className="orbia-testimonial_one pt-115 pb-120 p-r z-1">
        <div
          className="testimonial-shape bg_cover"
          data-src={TESTIMONIAL_SHAPE}
          style={{ backgroundImage: `url(${TESTIMONIAL_SHAPE})` }}
        ></div>
        <div className="testimonial-image" data-aos="fade-left" data-aos-duration="1000">
          <img src="/assets/images/home-one/testimonial/testimonial-img.jpg" alt="testimonial image" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-8 col-lg-10">
              {/* Section Title */}
              <div className="section-title mb-55">
                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                  Testimonial
                </span>
                <h2 className="text-anm">
                  Hear what our about customer say about our AI agency
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-11">
              <TestimonialSliderOne />
            </div>
          </div>
        </div>
      </section>
      {/*====== Start Advanced Section ======*/}
      <section className="orbia-advance-sec pt-115 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Section Title */}
              <div className="section-title text-center mb-55">
                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                  Advanced Technology
                </span>
                <h2 className="text-anm">
                  Advances in AI Technology Are Here to Impact the Future.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {ADVANCE.map((a) => (
              <div
                className="col-xl-3 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-duration={a.duration}
                key={a.n}
              >
                {/* Orbia Iconic Box */}
                <div className="orbia-iconic-box style-one mb-40">
                  <div className="box-border"></div>
                  <div className="icon-wrap">
                    <div className="number">{a.n}</div>
                    <div className="icon">
                      <img src={`/assets/images/home-one/icon/icon${a.icon}.png`} alt="icon" />
                    </div>
                  </div>
                  <div className="content">
                    <h4 className="title">{a.title}</h4>
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
      </section>
      {/*====== Start Pricing Section ======*/}
      <section
        className="orbia-pricing_one bg_cover pt-115 pb-90"
        data-src={PRICING_BG}
        style={{ backgroundImage: `url(${PRICING_BG})` }}
      >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-7 col-lg-8">
              {/* Section Title */}
              <div className="section-title mb-55">
                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                  Pricing plan
                </span>
                <h2 className="text-anm">
                  Simple and Adaptable, Pay only for what you need.
                </h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4">
              {/* Orbia Button */}
              <div className="orbia-button mb-60 text-lg-end" data-aos="fade-up" data-aos-duration="1000">
                <Link href="/contact" className="theme-btn gradient-btn">
                  Get In Touch <i className="far fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* Orbia Pricing Item */}
              <div className="orbia-pricing-item style-one mb-30" data-aos="fade-up" data-aos-duration="1000">
                <div className="pricing-inner-wrapper">
                  <div className="pricing-header">
                    <span className="plan">Basic</span>
                    <h2 className="price">Free</h2>
                    <p>Great for private individuals</p>
                  </div>
                  <div className="pricing-body">
                    <ul className="check-list style-two">
                      {PLAN_FEATURES.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pricing-button">
                    <Link href="/pricing" className="theme-btn gradient-btn">
                      <span>
                        Get Started Now<i className="far fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Orbia Pricing Item */}
              <div className="orbia-pricing-item style-one item-active mb-30" data-aos="fade-up" data-aos-duration="1200">
                <div
                  className="pricing-inner-wrapper bg_cover"
                  data-src={PRICING_BG2}
                  style={{ backgroundImage: `url(${PRICING_BG2})` }}
                >
                  <div className="rib-badge">Popular</div>
                  <div className="pricing-header">
                    <span className="plan">Premium</span>
                    <h2 className="price">$69</h2>
                    <p>14 days free period</p>
                  </div>
                  <div className="pricing-body">
                    <ul className="check-list style-two">
                      {PLAN_FEATURES.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pricing-button">
                    <Link href="/pricing" className="theme-btn gradient-btn">
                      <span>
                        Get Started Now<i className="far fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Orbia Pricing Item */}
              <div className="orbia-pricing-item style-one mb-30" data-aos="fade-up" data-aos-duration="1400">
                <div className="pricing-inner-wrapper">
                  <div className="pricing-header">
                    <span className="plan">Advanced</span>
                    <h2 className="price">$99</h2>
                    <p>01 Month free period</p>
                  </div>
                  <div className="pricing-body">
                    <ul className="check-list style-two">
                      {PLAN_FEATURES.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pricing-button">
                    <Link href="/pricing" className="theme-btn gradient-btn">
                      <span>
                        Get Started Now<i className="far fa-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
      {/*======  Start Contact Section  ======*/}
      <section
        className="orbia-contact_one bg_cover pt-120 pb-120"
        data-src={CONTACT_BG}
        style={{ backgroundImage: `url(${CONTACT_BG})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              {/* Orbia Contact Wrapper */}
              <div className="orbia-contact-wrapper mb-5 mb-xl-0" data-aos="fade-up" data-aos-duration="1000">
                <h3>Get in touch</h3>
                <p>
                  Just fill out the form and our global experts will be in touch right
                  away with package and price solution to help you!
                </p>
                <form className="orbia-contact-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="text" className="form_control" placeholder="Your name" name="name" required />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="email" className="form_control" placeholder="Email Address" name="email" required />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="text" className="form_control" placeholder="Company Name" name="company_name" required />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="text" className="form_control" placeholder="Phone Number" name="phone" required />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input type="text" className="form_control" placeholder="Subject" name="Subject" required />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea className="form_control" placeholder="Message" rows={3} name="message"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button className="theme-btn gradient-btn">
                          Send Message<i className="far fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              {/* Orbia Content Box */}
              <div className="orbia-content-box">
                <div className="section-title text-white">
                  <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                    We&apos;re here to answer all your questions
                  </span>
                  <h2 className="text-anm">
                    Welcome to the future of artificial intelligence!
                  </h2>
                </div>
                <p data-aos="fade-up" data-aos-duration="1200">
                  Artificial Intelligence refers to the development of computer systems
                  that possess the ability to perform activities typically requiring
                  human intelligence abilities!
                </p>
                <div className="orbia-button-wrapper" data-aos="fade-up" data-aos-duration="1400">
                  <Link href="/contact" className="theme-btn gradient-btn">
                    Get In Touch<i className="far fa-arrow-right"></i>
                  </Link>
                  <Link href="/contact" className="theme-btn style-two">
                    Learn More<i className="far fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="orbia-contact-info-list">
                  <div className="orbia-info-box style-one" data-aos="fade-up" data-aos-duration="1500">
                    <div className="icon">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="content">
                      <span>Feel Free to get in Touch</span>
                      <h4>
                        <a href="tel:+990123456789">+990 123 456 789</a>
                      </h4>
                    </div>
                  </div>
                  <div className="orbia-info-box style-one" data-aos="fade-up" data-aos-duration="1600">
                    <div className="icon">
                      <i className="far fa-envelope"></i>
                    </div>
                    <div className="content">
                      <span>How can we Help you</span>
                      <h4>
                        {/* href fixed from the source's `mail:info@exmple.com`;
                            the visible text is left as shipped. */}
                        <a href={`mailto:${CONTACT_EMAIL}`}>info@exmple.com</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*======  Start Blog Section  ======*/}
      <section className="orbia-blog_one pt-115 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/* Section Title */}
              <div className="section-title text-center mb-55">
                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                  Latest blog{" "}
                </span>
                <h2 className="text-anm">AI and Creativity Stories Tips.</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {POSTS.map((p) => (
              <div className="col-xl-4 col-md-6 col-sm-12" key={p.img}>
                {/* Orbia Blog Post */}
                <div
                  className="orbia-blog-post-item style-one mb-40"
                  data-aos="fade-up"
                  data-aos-duration={p.duration}
                >
                  <div className="post-thumbnail">
                    <img
                      src={`/assets/images/home-one/blog/blog-img${p.img}.jpg`}
                      alt="blog image"
                    />
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span>
                        <i className="far fa-user"></i>By<a href="#">Admin</a>
                      </span>
                      <span>
                        <i className="far fa-comments"></i>
                        <a href="#">(03) Comments</a>
                      </span>
                    </div>
                    <h4 className="title">
                      <Link href="/blog-details">{p.title}</Link>
                    </h4>
                    <Link href="/blog-details" className="read-more style-one">
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
    </>
  );
}
