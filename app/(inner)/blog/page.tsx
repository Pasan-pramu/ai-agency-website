import Link from "next/link";
import Breadcrumb from "@/app/components/layout/Breadcrumb";
import BlogSidebar from "@/app/components/layout/BlogSidebar";

/*
 * blog-standard.html, lines 147-303, routed as /blog per the scope decision
 * (blog-grid.html is out of scope, so the standard layout becomes the blog
 * index). The header nav's "Blog Standard" entry and the footer's "Latest Blog"
 * already point here.
 *
 * Server component (rule 8) — nothing interactive. No slider and no collapse
 * markup on this page; the only data-bs-* is line 128, the shared header's
 * search-modal trigger.
 *
 * All three posts carry identical meta ("By Admin", "June 15, 2025",
 * "(03) Comments") and the same body paragraph — the vendor's filler, carried
 * over rather than varied. All three link to blog-details.html.
 *
 * Note the post-meta spacing differs from blog-details.html: here it is
 * `<i/>By<a>` with no spaces, there it is `<i/> By <a>`. Both are preserved
 * as-shipped rather than harmonised.
 *
 * Pagination is five href="#" placeholders. No [data-src] in the page body.
 */

const POSTS = [
  {
    img: 1,
    title: "The Potential Benefits of AI Solutions for Small Businesses",
    duration: "800",
  },
  {
    img: 2,
    title: "Unlocking the Power of Data for Business Success.",
    duration: "1000",
  },
  {
    img: 3,
    title: "Ethical AI: Building Responsible and Fair AI Systems",
    duration: "1200",
  },
];

const EXCERPT =
  "Our specialty is developing custom technological solutions that are suited to your company's part requirements.  We offer cutting-edge solutions that optimize workflows, boost efficiency, and spur expansion, ranging from cloud computing and AI-powered tools to custom software development ";

export default function Blog() {
  return (
    <>
      <Breadcrumb title="Blog Standard" crumb="Blog Standard" />
      {/*======  Start Blog Section  ======*/}
      <section className="orbia-blog-standard-sec pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="blog-standard-wrapper">
                {POSTS.map((p) => (
                  /* Orbia Blog Post */
                  <div
                    className="orbia-blog-post-item style-one mb-30"
                    data-aos="fade-up"
                    data-aos-duration={p.duration}
                    key={p.img}
                  >
                    <div className="post-thumbnail">
                      <img
                        src={`/assets/images/innerpage/blog/blog-std-img${p.img}.jpg`}
                        alt="blog image"
                      />
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="far fa-user"></i>By<a href="#">Admin</a>
                        </span>
                        <span>
                          <i className="far fa-calendar-alt"></i>
                          <a href="#">June 15, 2025</a>
                        </span>
                        <span>
                          <i className="far fa-comments"></i>
                          <a href="#">(03) Comments</a>
                        </span>
                      </div>
                      <h4 className="title">
                        <Link href="/blog-details">{p.title}</Link>
                      </h4>
                      <p>{EXCERPT}</p>
                      <Link href="/blog-details" className="read-more style-one">
                        Read More
                        <i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}
                <div className="theme-pagination mt-30" data-aos="fade-up" data-aos-duration="1400">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-arrow-left"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">01</a>
                    </li>
                    <li>
                      <a href="#">02</a>
                    </li>
                    <li>
                      <a href="#">03</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-10">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
