import { type Metadata } from "next";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ModalProvider from "@/components/ui/modal-proivder";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { arSA, enUS } from '@clerk/localizations';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zacky",
  description: "AI Platform",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        type: "image/svg",
        sizes: "256x256",
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider localization={locale === 'ar' ? arSA : enUS} appearance={{ baseTheme: dark }}>
          <NextIntlClientProvider messages={messages}>
            <ModalProvider />
            {children}
          </NextIntlClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
