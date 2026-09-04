import Link from "next/link";

/*
 * Source: the `.page-hero` block at lines 147-163 of all 13 inner pages,
 * structurally identical everywhere and differing only in the two text nodes.
 * `title` and `crumb` are separate props because they diverge on 4 of the 13
 * pages (services, projects, team, 404).
 *
 * The `data-src` background is resolved to an inline background-image here
 * rather than left to dynamicBackground() (theme.js:431) — see Footer for why.
 */
export default function Breadcrumb({
  title,
  crumb,
}: {
  title: string;
  crumb: string;
}) {
  const bg = "/assets/images/innerpage/bg/page-bg.jpg";
  return (
    /*======  Start Page Hero Section  ======*/
    <section
      className="page-hero bg_cover p-r z-1"
      data-src={bg}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/*=== Page Content ===*/}
            <div className="page-content text-center">
              <h1>{title}</h1>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>{crumb}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
