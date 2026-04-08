"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from "../root/_components/Logo";
import { useTranslations } from "next-intl";

export default function LandingFooter() {
  const t = useTranslations("LandingFooter");

  const footerLinks = [
    {
      title: t("product"),
      links: [
        { label: t("features"), href: "#features" },
        { label: t("howItWorks"), href: "#how-it-works" },
        { label: t("pricing"), href: "/pricing" },
        { label: t("faq"), href: "#faq" },
      ],
    },
    {
      title: t("company"),
      links: [
        { label: t("about"), href: "/about" },
        { label: t("blog"), href: "/blog" },
        { label: t("careers"), href: "/careers" },
        { label: t("contact"), href: "/contact" },
      ],
    },
    {
      title: t("legal"),
      links: [
        { label: t("privacy"), href: "/privacy" },
        { label: t("terms"), href: "/terms" },
        { label: t("cookies"), href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/50 pt-16 pb-8 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-10">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-x-2">
              <Logo />
              <span className="text-2xl font-bold tracking-tight text-white">
                Zacky
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              {t("description")}
            </p>
            <div className="flex gap-x-4 pt-2">
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="text-sm font-bold tracking-wider text-white uppercase">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-primary text-sm text-gray-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-gray-500">
            {t("copyright")}
          </p>
          <div className="flex gap-x-8">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 transition-colors hover:text-white"
            >
              {t("privacyPolicy")}
            </Link>
            <Link
              href="/terms"
              className="text-xs text-gray-500 transition-colors hover:text-white"
            >
              {t("termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
