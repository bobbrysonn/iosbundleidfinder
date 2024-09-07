import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
      </body>
    </html>
  );
}
