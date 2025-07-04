import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/app/component/TopNavbar";
import LeftNavbar from "@/app/component/LeftNavbar";
import QueryProvider from "./component/query-provider";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import Providers from "./providers";
import Footer from "./component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
  

export const metadata: Metadata = {
  title: "Good Game",
  description: "Good Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}
      >
        <Providers>
          <QueryProvider>
            <TopNavbar/>
            <div className="flex flex-col md:flex-row">
              <LeftNavbar/>
              {children}
            </div>
            <Footer/>
          </QueryProvider>
        </Providers>
      </body>
    </html>
  );
}
