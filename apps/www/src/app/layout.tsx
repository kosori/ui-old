import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "~/styles/globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "UI - codingcodax",
  description: "Build high-quality and accessible apps in a short time.",
  openGraph: {
    title: "UI library",
    description: "Build high-quality and accessible apps in a short time.",
    url: "https://ui.condingcodax.dev",
    siteName: "UI",
  },
  twitter: {
    card: "summary_large_image",
    site: "@codingcodax",
    creator: "@codingcodax",
  },
};

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={["font-sans", fontSans.variable].join(" ")}>
        {props.children}
      </body>
    </html>
  );
};

export default Layout;
