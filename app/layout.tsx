import type { Metadata } from "next";
import { Ubuntu, DM_Sans } from "next/font/google";

/*
 * The template's style.css declares:
 *   --heading-font: "Ubuntu", sans-serif;
 *   --body-font: "DM Sans", sans-serif;
 * and every rule references them through var(). style.css is byte-identical
 * to the source and must not be edited, so the loaders publish their families
 * under neutral names and public/css/nextjs-fixes.css re-points the template's
 * two variables at them. That file is <link>ed last, so its :root rule wins
 * the specificity tie against style.css's.
 */

// Matches the template's Google Fonts request: Ubuntu:wght@300;400;500;700
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-ubuntu",
});

// Matches: DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000
const dmSans = DM_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-dm-sans",
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
        {/* Loaded last on purpose — see the file header. */}
        <link rel="stylesheet" href="/css/nextjs-fixes.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
