import Link from "next/link";
import Breadcrumb from "@/app/components/layout/Breadcrumb";

/*
 * projects.html, lines 147-240.
 *
 * Server component (rule 8) — nothing interactive. No [data-bs-*] collapse
 * markup on this page; the project accordion the Addendum found is index.html
 * only (the sole data-bs-* here is line 128, the shared header's search-modal
 * trigger).
 *
 * All four cards link to the same project-details.html, so all four link to
 * /project-details here. See app/(inner)/project-details/page.tsx for the route
 * shape decision.
 *
 * Source oddities preserved: the category label above each title is an
 * href="#" placeholder, `<h3 class="title">` opens with a leading space before
 * its inner <a>, and card 2's link text carries a trailing newline.
 *
 * No [data-src] in the page body.
 */

const PROJECTS = [
  {
    img: 1,
    tag: "Robotics, Program",
    title: "Transforming Businesses with Intelligence",
    duration: "1000",
  },
  {
    img: 2,
    tag: "User Research",
    title: "Intelligence for Modern Challenges\n",
    duration: "1200",
  },
  {
    img: 3,
    tag: "User Research",
    title: "Redefining Intelligence for Tomorrow Tech",
    duration: "1400",
  },
  {
    img: 4,
    tag: "Robotics, Program",
    title: "Elevating Possibilities with Intelligence",
    duration: "1600",
  },
];

export default function Projects() {
  return (
    <>
      <Breadcrumb title="Our Project" crumb="Project" />
      {/*======  Start Project Section  ======*/}
      <section className="orbia-project-sec pt-120 pb-120">
        <div className="container">
          <div className="row">
            {PROJECTS.map((p) => (
              <div className="col-lg-6" key={p.img}>
                {/* Orbia Project Item */}
                <div
                  className="orbia-project-item style-four mb-30"
                  data-aos="fade-up"
                  data-aos-duration={p.duration}
                >
                  <div className="project-thumbnail">
                    <img
                      src={`/assets/images/innerpage/project/project-img${p.img}.jpg`}
                      alt="project image"
                    />
                  </div>
                  <div className="project-content-wrap">
                    <div className="project-content">
                      <a href="#">{p.tag}</a>
                      <h3 className="title">
                        {" "}
                        <Link href="/project-details">{p.title}</Link>
                      </h3>
                    </div>
                    <div className="icon-button">
                      <Link href="/project-details" className="icon-btn style-one">
                        <i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
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
