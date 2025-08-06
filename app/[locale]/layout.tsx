import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import TopBar from "@/components/Header/TopBar";
import Bot from "@/components/Element/bot";
import Social from "@/components/Element/social";
import Footer from "@/components/Layout/Footer";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";

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

type Params = Promise<{ locale: string }>;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@/messages/${locale}`)).default;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
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
    </NextIntlClientProvider>
  );
}
