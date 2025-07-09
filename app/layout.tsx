import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import TopBar from "@/components/Header/TopBar";
import Bot from "@/components/Element/bot";
import Social from "@/components/Element/social";
import Footer from "@/components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adal Medicine — Лечение в Турции с полным сопровождением",
  description:
    "Adal Medicine — ваш надёжный партнёр в медицинском туризме. Помогаем пройти диагностику и лечение в лучших клиниках Турции. Онлайн-консультации, трансфер, проживание, поддержка 24/7.",
  icons: {
    icon: "/Logo-removebg.png",
  },
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
        <TopBar />
        <Navbar />
        {/* <Header /> */}
        {children}
        <Footer />
        <div className="fixed bottom-0 right-6 z-50 flex space-x-4 items-end">
          <Social />
          <Bot />
        </div>
      </body>
    </html>
  );
}
