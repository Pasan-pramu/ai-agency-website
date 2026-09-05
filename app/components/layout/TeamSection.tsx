import TeamTabs, { type TabMember } from "./TeamTabs";

/*
 * The `.orbia-team_one` section, shared by index.html (891-1038) and about.html
 * (397-544). A diff of both ranges shows them byte-identical, so this is one
 * component rather than two copies — same reasoning as Breadcrumb and
 * BlogSidebar. The emitted DOM is unchanged; nothing is simplified or collapsed.
 *
 * Server component. Only TeamTabs inside it is a client leaf, and the pane
 * markup is rendered here and handed over as ready-made elements — a render prop
 * cannot cross the RSC boundary, but elements can.
 *
 * All three members share the same copy, skills and experience in the source;
 * only the name, thumbnail and photo differ. #team_two ships active.
 */

const MEMBERS: TabMember[] = [
  { id: "team_one", thumb: 1, image: 1, name: "Guy Hawkins" },
  { id: "team_two", thumb: 2, image: 2, name: "Brooklyn Simmons", active: true },
  { id: "team_three", thumb: 3, image: 3, name: "Jenny Wilson" },
];

const SOCIALS = ["facebook-f", "twitter", "linkedin-in", "youtube"];

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
            <div className="social-box">
              {SOCIALS.map((s) => (
                <a href="#" key={s}>
                  <i className={`fab fa-${s}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    /*======  Start Team Section  ======*/
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
          <TeamTabs
            members={MEMBERS}
            panes={MEMBERS.map((m) => (
              <TeamPane key={m.id} {...m} />
            ))}
          />
        </div>
      </div>
    </section>
  );
}
