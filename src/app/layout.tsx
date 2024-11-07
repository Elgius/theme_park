import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
// import PlausibleProvider from "next-plausible";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Theme Park",
  description: "Theme park for assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <PlausibleProvider
        selfHosted
        customDomain="https://plausibly.wheredoc.org"
        domain="https://themepark.wheredoc.org/"
      > */}
      <Head>
        <script
          defer
          data-domain="themepark.wheredoc.org"
          src="https://plausibly.wheredoc.org/js/script.js"
        ></script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      {/* </PlausibleProvider> */}
    </html>
  );
}

// uses: Shadcn ui
