import type { Metadata } from "next";
import { Ubuntu, DM_Sans } from "next/font/google";
import "@/styles/nextjs-fixes.css";

/*
 * The template's style.css declares:
 *   --heading-font: "Ubuntu", sans-serif;
 *   --body-font: "DM Sans", sans-serif;
 * and every rule references them through var(). style.css is byte-identical
 * to the source and must not be edited, so the font loaders publish their
 * families under those exact same variable names, applied to <html> via the
 * class list.
 *
 * Cascade note (verified against the built output, not assumed): Next emits
 * its font CSS as a stylesheet BEFORE the <link>s below, and
 * `.ubuntu_..._variable` and `:root` have equal specificity, so style.css's
 * `:root` declarations actually win the tie. Text still renders in the right
 * faces because next/font names the self-hosted @font-face families literally
 * "Ubuntu" and "DM Sans", which is exactly what style.css asks for. What is
 * lost is only next/font's metric-adjusted fallback ("Ubuntu Fallback" /
 * "DM Sans Fallback"), which would have reduced layout shift during swap.
 */

// Matches the template's Google Fonts request: Ubuntu:wght@300;400;500;700
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--heading-font",
});

// Matches: DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000
const dmSans = DM_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--body-font",
});

export const metadata: Metadata = {
  title: "Orbia - AI Agency & Technology HTML Template",
  description: "AI, Agency, Technology",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${ubuntu.variable} ${dmSans.variable}`}>
      <head>
        {/* Template stylesheets, served untouched from public/assets/ in the
            source template's head order. They are <link>s rather than ESM
            imports so the browser resolves their relative url() references
            against /assets/css/, exactly as in the source template. */}
        <link rel="stylesheet" href="/assets/fonts/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/slick.css" />
        <link rel="stylesheet" href="/assets/css/plugins/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/plugins/aos.css" />
        <link rel="stylesheet" href="/assets/css/spacings.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
