/**
 * @file src/app/layout.tsx
 */

import "@/app/globals.css";
import { SnackbarContextProvider } from "@/context/SnackbarContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "xlxtractor",
  description: "Extract key data from Excel files",
  openGraph: {
    title: "xlxtractor",
    description: "Extract key data from Excel files",
    type: "website",
    locale: "ja_JP",
    url: "https:/iwasakishuto.github.io/xlxtractor/",
    images: [
      {
        url: "https:/iwasakishuto.github.io/xlxtractor/cover.png",
        width: 1200,
        height: 630,
        alt: "xlxtractor",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SnackbarContextProvider children={children} />
      </body>
    </html>
  );
}
