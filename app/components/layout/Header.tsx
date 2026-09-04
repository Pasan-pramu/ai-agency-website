import Link from "next/link";
import HeaderNavigation from "./HeaderNavigation";
import ThemeNavMenu from "./ThemeNavMenu";
import NavbarToggler from "./NavbarToggler";
import SearchButton from "./SearchButton";

/*
 * Source: index.html:54-142 (home) and about.html:54-142 (inner). The two
 * differ on exactly two lines, verified with a diff of both ranges:
 *   line  54  header class list gains `page-header` on inner pages
 *   line 112  the mobile-drawer CTA is `gradient-btn` on home, `style-one` on
 *             inner (that line lives in ThemeNavMenu)
 * The desktop CTA at line 129 stays `gradient-btn` on all 14 pages.
 *
 * Stays a server component; the interactive parts are client leaves.
 */
export default function Header({ variant }: { variant: "home" | "inner" }) {
  return (
    <header
      className={`header-area header-one ${variant === "inner" ? "page-header " : ""}transparent-header`}
    >
      {/*====  Header Navigation  ===*/}
      <HeaderNavigation>
        <div className="container-fluid">
          {/*====  Primary Menu  ===*/}
          <div className="primary-menu">
            {/*====  Site Branding  ===*/}
            <div className="site-branding">
              <Link href="/" className="brand-logo">
                <img
                  src="/assets/images/home-one/logo/logo-white.png"
                  alt="Brand Logo"
                />
              </Link>
            </div>
            {/*=== Main Menu ===*/}
            <ThemeNavMenu variant={variant} />
            {/*=== Header Nav Right ===*/}
            <div className="nav-right-item">
              <div className="search-button">
                <SearchButton />
              </div>
              <div className="nav-button d-none d-md-block">
                <Link href="/contact" className="theme-btn gradient-btn">
                  Get A Quote
                  <i className="far fa-arrow-right"></i>
                </Link>
              </div>
              <NavbarToggler />
            </div>
          </div>
        </div>
      </HeaderNavigation>
    </header>
  );
}
