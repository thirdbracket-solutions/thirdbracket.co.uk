import "./globals.css";
import localFont from "next/font/local";
import { ThemeScript } from "@thirdbracket/bracketui";
import Header from "../../components/Header";
import SiteFooter from "../../components/Footer";
import { Settings } from "../../lib/meta";
import { Metadata } from "next";
import { WebPage, WithContext } from "schema-dts";

const roboto = localFont({
  src: [
    {
      path: "./Roboto-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Roboto-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Roboto-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Roboto-Medium.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Roboto-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Roboto-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./Roboto-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

// import Header from "..npm run dev
// /../components/Header";

export const jsonLd: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Third Bracket",

  url: "https://www.thirdbracket.co.uk/",
  description:
    "Step into Third Bracket Solutions, a UK-based modern web infrastructure development service born from the collective efforts of a group of nomads who conquered platforms like Upwork and Fiverr",

  isPartOf: {
    "@type": "WebSite",
    name: "Third Bracket Solutions",
    url: "https://www.thirdbracket.co.uk/",
  },
  publisher: {
    "@type": "Organization",
    name: "Third Bracket Solution",
    url: "https://www.thirdbracket.co.uk/",
    legalName: "Third Bracket Solution",
    sameAs: ["https://www.facebook.com/thirdbracket.co.uk"],
  },
};

const baseUrl = Settings.metadataBase;

export const metadata: Metadata = {
  title: Settings.title,
  metadataBase: new URL(baseUrl),
  description: Settings.description,
  keywords: Settings.keywords,
  openGraph: {
    type: Settings.openGraph.type,
    url: baseUrl,
    title: Settings.openGraph.title,
    description: Settings.openGraph.description,
    siteName: Settings.openGraph.siteName,
    images: Settings.openGraph.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },
  twitter: {
    card: Settings.twitter.card,
    title: Settings.twitter.title,
    description: Settings.twitter.description,
    site: Settings.twitter.site,
    images: Settings.twitter.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },
  // verification: {
  //   google: Settings.verification.google,
  // },

  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.className} antialiased dark:bg-primary-950 dark:text-white`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta
          name="facebook-domain-verification"
          content="jvzc8wivgbd7yp2malwzexmw1rj7rh"
        />
      </head>
      <body suppressHydrationWarning>
        {/* <MegaHeader /> */}

        <Header />
        <main className="min-h-screen pt-16 lg:pt-20 bg-white dark:bg-black">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
