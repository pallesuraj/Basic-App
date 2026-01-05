import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Footer/page";
import Header from "./Header/page";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "BASIC",
    template: "%s | BASIC",
  },
  description: "BASIC – A verified healthcare workforce platform",
  icons: {
    icon: "/vaidya.png",
    shortcut: "/vaidya.png",
    apple: "/vaidya.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-[#f7f9ff]
          text-slate-900
        `}
      >
        <Header />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
