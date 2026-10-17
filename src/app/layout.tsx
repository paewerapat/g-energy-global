import type { Metadata } from "next";
import "../styles/index.css";
import "../../public/assets/sass/style.scss";
import site from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${site.legalName} | Enterprise Technology & Energy Solutions in Thailand`,
    template: `%s | ${site.brand}`,
  },
  description: `${site.legalName} — part of the ${site.parentGroup} group and an authorised ${site.distributionPartner} partner in Thailand. Cloud, infrastructure, open source, data, cybersecurity, energy and the full Redington service portfolio.`,
  keywords: [site.legalName, site.parentGroup, "Redington Thailand", "cloud", "infrastructure", "cybersecurity", "technology distribution", "solar", "Bangkok"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b1030" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;500;600;700;800&family=IBM+Plex+Sans+Thai:wght@400;500;600;700&display=swap" />
      </head>
      <body suppressHydrationWarning={true}>
        <a href="#main" className="ge-skip">Skip to content</a>
        {children}
      </body>
    </html>
  )
}
