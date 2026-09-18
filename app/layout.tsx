import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Trauma & Anxiety Therapist in Santa Monica, CA",
  description:
    "Dr. Maya Reynolds, PsyD offers trauma-informed therapy for adults in Santa Monica, CA — supporting anxiety, burnout, and perfectionism through in-person and telehealth sessions across California.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
