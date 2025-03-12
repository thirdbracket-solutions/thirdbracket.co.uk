import "./globals.css";
import localFont from "next/font/local";
import { ThemeScript } from "@thirdbracket/bracketui";
import Header from "../../components/Header";
import SiteFooter from "../../components/Footer";
import { Settings } from "../../lib/meta";
import { Metadata } from "next";

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
      className={`${roboto.className} antialiased dark:bg-gray-950 dark:text-white`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body suppressHydrationWarning>
        {/* <MegaHeader /> */}

        <Header />

        <main className="min-h-screen pt-16 lg:pt-20 dark:bg-gray-950 dark:text-white">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
