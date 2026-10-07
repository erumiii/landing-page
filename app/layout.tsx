import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keenan Muhammad Otthmar Emzed — Cloud & DevOps Engineer",
  description:
    "Personal landing page of Keenan Muhammad Otthmar Emzed, a Computer Science student at BINUS University focused on cloud computing, software infrastructure, and system design. Open to internship opportunities in Cloud Engineering and DevOps.",
  keywords: [
    "Keenan Emzed",
    "Cloud Engineering",
    "DevOps",
    "AWS",
    "GCP",
    "BINUS University",
    "Cloud Architecture",
  ],
  authors: [{ name: "Keenan Muhammad Otthmar Emzed" }],
  openGraph: {
    title: "Keenan Muhammad Otthmar Emzed — Cloud & DevOps Engineer",
    description:
      "Computer Science student focused on cloud computing, DevOps, and Cloud Architecture.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keenan Muhammad Otthmar Emzed — Cloud & DevOps Engineer",
    description:
      "Computer Science student focused on cloud computing, DevOps, and Cloud Architecture.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-full flex flex-col antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
