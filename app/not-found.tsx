import Link from "next/link";
import SiteShell from "@/app/components/layout/SiteShell";
import Breadcrumb from "@/app/components/layout/Breadcrumb";

/*
 * The template's 404.html, wired as Next's not-found boundary rather than as a
 * /404 route, so it is served for any genuinely missing path.
 *
 * Source: 404.html lines 147-163 (breadcrumb) and 164-183 (error section).
 * Title/crumb are "Error Pages" / "404" — one of the four pages where the two
 * differ.
 *
 * app/not-found.tsx is rendered by the *root* layout, not by (inner)/layout.tsx,
 * so the shell is composed here explicitly. 404.html uses the inner header and
 * footer variants (its footer carries pt-120), which is what variant="inner"
 * produces.
 */
export default function NotFound() {
  return (
    <SiteShell variant="inner">
      <Breadcrumb title="Error Pages" crumb="404" />
      {/*======  Start Error Section  ======*/}
      <section className="orbia-error-sec pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*=== Orbia Content Box ===*/}
              <div className="orbia-content-box text-center">
                <div className="orbia-image" data-aos="fade-up" data-aos-duration="800">
                  <img src="/assets/images/innerpage/404/404.png" alt="404 image" />
                </div>
                <h2 className="text-anm">Alas, that page is not accessible.</h2>
                <p data-aos="fade-up" data-aos-duration="1000">
                  It appears that nothing was discovered here. Could you try a search
                  or one of the sites below?
                </p>
                <div className="orbia-button" data-aos="fade-up" data-aos-duration="1200">
                  <Link href="/" className="theme-btn gradient-btn">
                    Back To Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
