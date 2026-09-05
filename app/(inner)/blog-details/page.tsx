import Breadcrumb from "@/app/components/layout/Breadcrumb";
import BlogSidebar from "@/app/components/layout/BlogSidebar";

/*
 * blog-details.html, lines 147-378.
 *
 * Server component (rule 8). Both forms — the comment form and the sidebar
 * search — are markup only until step 8.
 *
 * NO SLIDER. Confirmed again here: the page body contains no .slick-*,
 * .swiper or *-slider class, and no data-bs-* collapse markup. The only
 * slick references on the page are the shared <link> to slick.css in the head
 * and the shared <script> for slick.min.js in the footer, both of which appear
 * on all 14 pages. AGENTS.md rule 6 already records the corrected list:
 * sliders live on index.html and about.html only.
 *
 * ROUTE SHAPE: static /blog-details for now. This is the strongest of the three
 * detail pages — its <h4 class="title"> is verbatim the title of blog-standard's
 * first card, so the page really is post #1 rather than a generic stand-in, and
 * every field of a blog schema is present and filled. It still ships exactly one
 * article, and blog's eventual driver is more likely MDX or a CMS than a local
 * TS file, so the [slug] route is worth building once against the real source.
 * See the report for the derived schema.
 *
 * The sidebar is byte-identical to blog-standard's and comes from the shared
 * BlogSidebar component. No [data-src] in the page body.
 */

const COMMENTS = [
  {
    img: 1,
    name: "Mariya Dsuza",
    date: "16 Aug, 2025  06:30pm",
    body: "Provide regular updates to donors and supporters through newsletters, social media, & the charity website, detailing how funds are being used and the impact achieved.",
  },
  {
    img: 2,
    name: "Michel Phelops",
    date: "16 Aug, 2025  08:30pm",
    body: "Use metrics and feedback to assess the success of projects and programs, and share these results with the community to demonstrate accountability and build trust.",
  },
];

function Comment({ c }: { c: (typeof COMMENTS)[number] }) {
  return (
    <>
      <div className="comment-avatar">
        <img
          src={`/assets/images/innerpage/blog/comment-img${c.img}.jpg`}
          alt="comment author"
        />
      </div>
      <div className="comment-wrap">
        <div className="comment-author-content">
          <span className="author-name">
            {c.name}
            <span className="date">{c.date}</span>
          </span>
          <p>{c.body}</p>
          <a href="#" className="reply">
            <i className="fas fa-reply"></i>Reply
          </a>
        </div>
      </div>
    </>
  );
}

export default function BlogDetails() {
  return (
    <>
      <Breadcrumb title="Blog Details" crumb="Blog Details" />
      {/*======  Start Blog Standard Section  ======*/}
      <section className="orbia-blog-details-sec pt-120 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              {/*=== Blog Details wrapper ===*/}
              <div className="blog-details-wrapper">
                {/*=== Blog Post Main ===*/}
                <div className="blog-post-main mb-70" data-aos="fade-up" data-aos-duration="1000">
                  <div className="blog-post-item">
                    <div className="post-thumbnail">
                      <img
                        src="/assets/images/innerpage/blog/blog-single-img1.jpg"
                        alt="Post Thumbnail"
                      />
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="far fa-user"></i> By <a href="#">Admin</a>
                        </span>
                        <span>
                          <i className="far fa-tags"></i>
                          <a href="#">Corporate</a>
                        </span>
                        <span>
                          <i className="far fa-comment"></i>
                          <a href="#">Comments (03)</a>
                        </span>
                      </div>
                      <h4 className="title">
                        The Potential Benefits of AI Solutions for Small Businesses
                      </h4>
                      <p>
                        Artificial Intelligence (AI) development focuses on creating
                        intelligent systems that can mimic human cognitive functions
                        such as learning, reasoning, problem-solving, and
                        decision-making. AI development involves building algorithms,
                        models, and applications that allow machines to perform tasks
                        that typically require human intelligence. From simple
                        automation to advanced machine learning and neural networks, AI
                        is revolutionizing industries across the globe. AI development
                        refers to the process of designing, building, and deploying
                        AI-powered solutions to automate tasks, analyze large amounts
                        of data, and improve business processes. The core goal of AI
                        development is to create smart systems capable of making
                        decisions, learning from experience, and performing tasks with
                        minimal human intervention.
                      </p>
                      <p>
                        AI Machine Learning (ML) is a core branch of Artificial
                        Intelligence (AI) that enables computers and systems to
                        automatically learn from data, identify patterns, and make
                        decisions without being explicitly programmed. It allows
                        machines to improve their performance over time by learning
                        from experience, much like how humans learn through practice
                        and feedback.Machine Learning has become a transformative
                        technology across industries, empowering businesses to automate
                        processes, predict outcomes, and solve complex problems with
                        data-driven insights.
                      </p>
                      <blockquote>
                        <div className="content">
                          <p>
                            AI solutions require ongoing monitoring to maintain accuracy
                            and efficiency. We provide continuous support, updates, and
                            performance enhancements to ensure your AI system remains
                            effective as your business evolves.
                          </p>
                          <h5>Martin &amp; Michiel</h5>
                        </div>
                      </blockquote>
                      <p>
                        Our team designs a tailor-made AI solution based on your
                        specific requirements. We develop machine learning models, build
                        algorithms, and create prototypes to ensure the solution aligns
                        with your business objectives. We begin by understanding your
                        business goals, challenges, and opportunities for AI
                        integration. Our experts assess your current systems and
                        identify areas where AI can bring the most impact.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="orbia-image">
                            <img
                              src="/assets/images/innerpage/blog/blog-single-img2.jpg"
                              alt="Single blog"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="orbia-image">
                            <img
                              src="/assets/images/innerpage/blog/blog-single-img3.jpg"
                              alt="Single blog"
                            />
                          </div>
                        </div>
                      </div>
                      <p>
                        Our team designs a tailor-made AI solution based on your
                        specific requirements. We develop machine learning models, build
                        algorithms, and create prototypes to ensure the solution aligns
                        with your business objectives. We begin by understanding your
                        business goals, challenges, and opportunities for AI
                        integration. Our experts assess your current systems and
                        identify areas where AI can bring the most impact.
                      </p>
                    </div>
                  </div>
                  <div className="entry-footer mt-30">
                    <div className="tag-links">
                      <span>Tag:</span>
                      <a href="#">Apartment</a>
                      <a href="#">Buyer</a>
                      <a href="#">Luxury</a>
                    </div>
                    <div className="social-share">
                      <span>Share:</span>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/*=== Post Navigation ===*/}
                <div className="comments-area mb-80" data-aos="fade-up" data-aos-duration="1200">
                  <h3 className="comments-title">Popular Comments</h3>
                  <ul className="comments-list">
                    <li>
                      <div className="comment">
                        <Comment c={COMMENTS[0]} />
                      </div>
                      <ul className="comment-reply">
                        <li className="comment">
                          <Comment c={COMMENTS[1]} />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="comment">
                        <Comment
                          c={{ ...COMMENTS[1], date: "16 Aug, 2025  10:30pm" }}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                {/*=== Contact Wrapper ===*/}
                <div className="comment-wrapper mb-50" data-aos="fade-up" data-aos-duration="1400">
                  <h3 className="mb-30">Leave a Reply</h3>
                  <form autoComplete="off" className="comment-form">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Name"
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
                            placeholder="Email"
                            name="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            className="form_control"
                            placeholder="Message"
                            name="message"
                            rows={5}
                            cols={8}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <button className="theme-btn gradient-btn">
                            Submit Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
