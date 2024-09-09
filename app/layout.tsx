import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

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
  applicationName: "IOS Bundle ID Identifier",
  authors: [{ name: "Bob Moriasi", url: "https://bobbrysonn.dev" }],
  creator: "Bob Moriasi",
  title: "IOS Bundle ID Identifier",
  description:
    "Discover the Bundle ID Identifier for any app present in the AppStore and in any country or region",
  keywords: [
    "ios",
    "appstore",
    "bundle id",
    "identifier",
    "ios bundle id finder",
    "id finder",
    "udid",
    "ipa",
    "ipa name",
    "ipa bundle id",
    "bundle id generator",
  ],
  icons: [
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
