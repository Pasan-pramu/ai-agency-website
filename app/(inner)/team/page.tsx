import Link from "next/link";
import Breadcrumb from "@/app/components/layout/Breadcrumb";

/*
 * team.html, lines 147-324.
 *
 * Server component (rule 8) — nothing interactive.
 *
 * All eight cards link to the same team-details.html in the source, so all eight
 * link to /team-details here. The template ships one detail page and no
 * per-member records; see app/(inner)/team-details/page.tsx.
 *
 * Source oddities carried over: every member's position is "President of Sales",
 * and "Darlene Robertson" appears twice (cards 4 and 6). data-aos-duration steps
 * 1000, 1200, ... 2400 across the eight cards.
 *
 * No [data-src] in the page body.
 */

const MEMBERS = [
  { name: "Brooklyn Simmons", img: 1, duration: "1000" },
  { name: "Leslie Alexander", img: 2, duration: "1200" },
  { name: "Savannah Nguyen", img: 3, duration: "1400" },
  { name: "Darlene Robertson", img: 4, duration: "1600" },
  { name: "Jenny Wilson", img: 5, duration: "1800" },
  { name: "Darlene Robertson", img: 6, duration: "2000" },
  { name: "Darrell Steward", img: 7, duration: "2200" },
  { name: "Marvin McKinney", img: 8, duration: "2400" },
];

export default function Team() {
  return (
    <>
      <Breadcrumb title="Our Team" crumb="Team" />
      {/*======  Start Team Section  ======*/}
      <section className="orbia-team-sec pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-50">
                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                  Expert Team
                </span>
                <h2 className="text-anm">Meet the leadership team</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {MEMBERS.map((m) => (
              <div className="col-xl-3 col-md-6 col-sm-12" key={m.img}>
                {/*=== Orbia Team Item ===*/}
                <div
                  className="orbia-team-item style-one mb-30"
                  data-aos="fade-up"
                  data-aos-duration={m.duration}
                >
                  <div className="member-image">
                    <img
                      src={`/assets/images/innerpage/team/team-img${m.img}.jpg`}
                      alt="team image"
                    />
                  </div>
                  <div className="member-info">
                    <h4 className="title">
                      <Link href="/team-details">{m.name}</Link>
                    </h4>
                    <span className="position">President of Sales</span>
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
