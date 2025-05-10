import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Object Oriented Teens",
  description: "Object Oriented Teens is a community of developers who are passionate about programming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} bg-[#040814]`}
      >
        <div className="bg-[#08090f] min-h-screen m-4 rounded-lg border border-gray-900 shadow-lg">

        <Navbar />
        {children}
        </div>
      </body>
    </html>
  );
}
