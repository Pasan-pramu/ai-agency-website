import Breadcrumb from "@/app/components/layout/Breadcrumb";
import FaqAccordion, { type FaqItem } from "@/app/components/layout/FaqAccordion";

/*
 * faqs.html, lines 147-241.
 *
 * Server component (rule 8). The only interactive piece is the accordion, which
 * is a 'use client' leaf; everything around it stays on the server.
 *
 * All four answers are the same paragraph in the source — that is the template's
 * filler, carried over verbatim rather than "fixed". #collapse2 ships open.
 *
 * No [data-src] in the page body; the three on faqs.html are the breadcrumb
 * (line 148) and the footer's two (243, 290), all handled by the shell.
 */

const ANSWER =
  "Not at all. We build user-friendly AI platforms with simple dashboards and integrations. Our team handles the technical complexity ";

const ITEMS: FaqItem[] = [
  {
    id: "collapse1",
    question: "What industries can benefit from your AI solutions?",
    answer: ANSWER,
  },
  {
    id: "collapse2",
    question: "Do I need technical knowledge to use your AI services?",
    answer: ANSWER,
    open: true,
  },
  {
    id: "collapse3",
    question: "How secure is my data with your AI systems?",
    answer: ANSWER,
  },
  {
    id: "collapse4",
    question: "How long does it take to implement an AI solution?",
    answer: ANSWER,
  },
];

export default function Faqs() {
  return (
    <>
      <Breadcrumb title="FAQs" crumb="FAQs" />
      {/*======  Start Faq Section  ======*/}
      <section className="orbia-faq-sec pt-120 pb-95">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/* Faq Image */}
              <div className="faq-image mb-5 mb-xl-0" data-aos="fade-up" data-aos-duration="1000">
                <img src="/assets/images/innerpage/faq/faq-img1.png" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-10">
              {/* Orbia Contnet Box */}
              <div className="orbia-content-box">
                <div className="section-title mb-40">
                  <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                    FAQ
                  </span>
                  <h2 className="text-anm">
                    We&apos;re here to answer all your questions
                  </h2>
                </div>
                <FaqAccordion
                  id="accordionOne"
                  items={ITEMS}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
