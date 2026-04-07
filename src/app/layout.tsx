import { type Metadata } from "next";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ModalProvider from "@/components/ui/modal-proivder";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider appearance={{ baseTheme: dark }}>
          <ModalProvider />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
