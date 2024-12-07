import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { UmamiAnalytics } from "@/components/tracker/UmamiTracker";

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
      <head>
        <script
          defer
          src="https://umami.wheredoc.org/script.js"
          data-website-id="b980b9a6-c68a-4806-8fb5-feb81db92522"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

// uses: Shadcn ui
