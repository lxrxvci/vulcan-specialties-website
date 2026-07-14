import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vulcan Specialties | Residential General Contractor | Portland Metro",
  description:
    "Licensed, bonded, and insured residential general contractor serving the Portland metro area. Specializing in home additions, dry rot repair, kitchen & bathroom remodeling, fencing, flooring, and handyman services. Free estimates.",
  keywords: [
    "general contractor Portland",
    "home additions Portland",
    "dry rot repair",
    "kitchen remodeling",
    "bathroom renovation",
    "handyman services",
    "Milwaukie contractor",
    "residential contractor Oregon",
    "Vulcan Specialties",
  ],
  openGraph: {
    title: "Vulcan Specialties | Residential General Contractor",
    description:
      "You Dream It. We Build It. Family-run contractor serving Portland metro with 20+ years experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
