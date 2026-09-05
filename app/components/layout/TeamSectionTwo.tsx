import Link from "next/link";

/*
 * The `.orbia-team_two` section from index-3.html:1069-1157, used on the home
 * page only.
 *
 * This is deliberately a SEPARATE component from TeamSection.tsx rather than a
 * variant of it: TeamSection renders `.orbia-team_one` (the tabbed layout from
 * index.html / about.html) and is still imported by app/(inner)/about/page.tsx,
 * which must render exactly as it did before. The two share no structure —
 * different section class, different heading, different item markup, and one is
 * driven by Bootstrap tabs while this one is static — so there is nothing to
 * fork or parameterise.
 *
 * Consequence worth noting: TeamTabs now has exactly one consumer (/about), and
 * the home page no longer exercises the tabs at all.
 *
 * Behaviours: 6 x data-aos and 1 x .text-anm heading, both already wired
 * globally (AosInit and the SplitText hook in SmoothScroll). No tabs, no
 * slider, no counter, no [data-src], no collapse — a straight markup port.
 *
 * The fourth column is not a member: `.team-content-box` is a "You Can Be Here"
 * recruitment card. All four member/CTA links point at team-details.html in the
 * source, carried over as /team-details.
 */

const MEMBERS = [
  { img: 1, name: "Brooklyn Simmons", duration: "1000" },
  { img: 2, name: "Michael James", duration: "1200" },
  { img: 3, name: "Kevin Joshua", duration: "1400" },
];

const SOCIALS = ["facebook-f", "twitter", "linkedin-in", "instagram"];

export default function TeamSectionTwo() {
  return (
    /*======  Start Team Section  ======*/
    <section className="orbia-team_two pt-115 pb-80">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-7 col-lg-8">
            {/* Section Title */}
            <div className="section-title mb-50">
              <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">
                Our Expert
              </span>
              <h2 className="text-anm">
                Meet the Creative Minds Behind Our AI Innovations
              </h2>
            </div>
          </div>
          <div className="col-xl-5 col-lg-4">
            {/* Text Box */}
            <div className="text-box mb-60 float-lg-end" data-aos="fade-up" data-aos-duration="1000">
              <h2>200+</h2>
              <h4>Awesome Team Members</h4>
            </div>
          </div>
        </div>
        <div className="row">
          {MEMBERS.map((m) => (
            <div className="col-xl-3 col-md-6 col-sm-12" key={m.img}>
              {/* Orbia Team Item */}
              <div
                className="orbia-team-item style-two mb-40"
                data-aos="fade-up"
                data-aos-duration={m.duration}
              >
                <div className="member-image">
                  <img
                    src={`/assets/images/home-three/team/team-img${m.img}.jpg`}
                    alt="team image"
                  />
                  <div className="shape">
                    <img
                      src="/assets/images/home-three/team/team-shape2.png"
                      alt="shape"
                    />
                  </div>
                  <div className="social-box">
                    {SOCIALS.map((s) => (
                      <a href="#" key={s}>
                        <i className={`fab fa-${s}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="member-info">
                  <h4 className="title">
                    <Link href="/team-details">{m.name}</Link>
                  </h4>
                  <span className="position">AI Programmer</span>
                </div>
              </div>
            </div>
          ))}
          <div className="col-xl-3 col-md-6 col-sm-12">
            {/* Team Content Box */}
            <div className="team-content-box mb-40" data-aos="fade-up" data-aos-duration="1600">
              <div className="shape">
                <img src="/assets/images/home-three/team/team-shape.png" alt="shape" />
              </div>
              <div className="content">
                <h4>You Can Be Here</h4>
                <p>
                  We value curiosity, collaboration, and a can-do attitude. Oh, and
                  coffee—lots of coffee. Come join a team that celebrates your unique
                  skills and helps you unlock your full potential.
                </p>
                <Link href="/team-details" className="theme-btn style-one">
                  Meet The Team <i className="far fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
