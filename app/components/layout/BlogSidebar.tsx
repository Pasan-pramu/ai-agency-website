import Link from "next/link";

/*
 * The blog sidebar, shared by blog-standard.html (lines 230-302) and
 * blog-details.html (lines 305-377). A diff of both ranges shows them
 * byte-identical — the only difference inside the compared span is the closing
 * section comment, which sits outside the sidebar.
 *
 * Extracted for the same reason Breadcrumb is: one source of truth for markup
 * that is identical on both pages. The emitted DOM is unchanged, so this is not
 * the kind of de-duplication rule 4 forbids — nothing is simplified or
 * collapsed.
 *
 * Four widgets: search (markup only, no handler until step 8), category nav,
 * recent posts, popular tags. Every category and tag link is an href="#"
 * placeholder in the source and stays one.
 */

const CATEGORIES = [
  "City Guide",
  "Digital Nomad",
  "New Places",
  "Popular Hosts",
  "Room With A View",
  "Tips & Tricks",
];

const RECENT = [
  { thumb: 1, date: "August 1, 2025", title: "AI and Creativity: Can Machines Be Truly" },
  { thumb: 2, date: "August 4, 2025", title: "Building AI Fair Responsible & Systems" },
  { thumb: 3, date: "August 7, 2025", title: "AI-Powered: What’s Next for Future?" },
];

const TAGS = [
  "Automation",
  "Branding",
  "Digital",
  "Networks",
  "Supply",
  "Technology",
];

export default function BlogSidebar() {
  return (
    /*===  Sidebar Widget Area  ===*/
    <div className="sidebar-widget-area">
      {/*===  Sidebar Widget  ===*/}
      <div
        className="sidebar-widget sidebar-search-widget mb-30"
        data-aos="fade-up"
        data-aos-duration="600"
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
        data-aos-duration="800"
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
      {/*=== Sidebar Widget ===*/}
      <div
        className="sidebar-widget sidebar-post-widget mb-40"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h4 className="widget-title">Recent Posts</h4>
        <div className="widget-content">
          <ul className="recent-post-list">
            {RECENT.map((p) => (
              <li className="post-thumbnail-content mb-4" key={p.thumb}>
                <img
                  src={`/assets/images/innerpage/blog/post-thumb${p.thumb}.jpg`}
                  alt="post thumb"
                />
                <div className="post-title-date">
                  <span className="posted-on">
                    <a href="#">{p.date}</a>
                  </span>
                  <h5>
                    <Link href="/blog-details">{p.title}</Link>
                  </h5>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*=== Sidebar Widget ===*/}
      <div
        className="sidebar-widget sidebar-tag-widget mb-30"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h4 className="widget-title">Popular Tags</h4>
        <div className="widget-content">
          {TAGS.map((t) => (
            <a href="#" key={t}>
              {t}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
