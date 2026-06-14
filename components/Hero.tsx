"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { TicketButton } from "./TicketButton";
import { openContactModal } from "./contactModalEvents";
import { localeLabels, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/useI18n";

type Stat = { value: string; label: string };

const menuLinks = [
  ["navVisit", "#highlights"],
  ["navCollect", "#highlights"],
  ["navStories", "#about"]
] as const;

export function Hero() {
  const { locale, locales, setLocale, t, list } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const stats = list<Stat>("hero.stats");
  const isChinese = locale.startsWith("zh");
  const heroTitle = isChinese ? "湘西府" : "XIANGXI FU";
  const changeLocale = (value: string) => setLocale(value as Locale);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-ink text-white">
      <Image
        src="/images/hero-home.jpg"
        alt="Xiangxi Fu architecture and Zhangjiajie landscape"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <nav className="relative z-20 flex items-center justify-between px-5 py-5 text-sm font-black text-white md:px-12 lg:px-[5.25rem]">
        <div className="flex items-center gap-5 lg:gap-8">
          <button
            type="button"
            aria-label={menuOpen ? t("common.close") : "Menu"}
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-9 w-9 place-items-center"
          >
            <span className="grid w-6 gap-1.5">
              <span className="h-0.5 bg-white" />
              <span className="h-0.5 bg-white" />
              <span className="h-0.5 bg-white" />
            </span>
          </button>
          <Link href="#highlights" aria-label="Search" className="relative hidden h-8 w-8 md:block">
            <span className="absolute left-1 top-1 h-4 w-4 rounded-full border-2 border-white" />
            <span className="absolute left-[18px] top-[19px] h-0.5 w-3 rotate-45 bg-white" />
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {menuLinks.map(([key, href]) => (
              <a key={key} href={href} className="transition hover:text-gold">
                {t(`hero.${key}`)}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-7">
          <label className="hidden items-center gap-2 md:flex">
            <span>{isChinese ? "语言" : t("common.language")}</span>
            <select
              value={locale}
              aria-label={t("common.language")}
              onChange={(event) => changeLocale(event.currentTarget.value)}
              onInput={(event) => changeLocale(event.currentTarget.value)}
              className="max-w-24 bg-transparent text-xs font-black text-white outline-none"
            >
              {locales.map((item) => (
                <option key={item} value={item} className="text-ink">
                  {localeLabels[item]}
                </option>
              ))}
            </select>
          </label>
          <button type="button" data-contact-trigger onClick={openContactModal} className="hidden transition hover:text-gold md:inline">
            {t("hero.navConsult")}
          </button>
          <TicketButton compact label={t("hero.ticketsLabel")} className="border-cinnabar bg-cinnabar px-4 text-xs hover:border-white hover:bg-white hover:text-ink md:px-5" />
        </div>
      </nav>

      {menuOpen ? (
        <div className="absolute left-5 right-5 top-20 z-30 border border-white/30 bg-black/72 p-4 text-sm font-black uppercase backdrop-blur-xl md:hidden">
          <a href="#highlights" onClick={() => setMenuOpen(false)} className="block border-b border-white/20 py-3">{t("hero.navVisit")}</a>
          <a href="#highlights" onClick={() => setMenuOpen(false)} className="block border-b border-white/20 py-3">{t("hero.navCollect")}</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="block border-b border-white/20 py-3">{t("hero.navStories")}</a>
          <button
            type="button"
            data-contact-trigger
            onClick={() => {
              setMenuOpen(false);
              openContactModal();
            }}
            className="block w-full py-3 text-left"
          >
            {t("hero.navConsult")}
          </button>
        </div>
      ) : null}

      <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-5 md:px-12 md:pb-7 lg:px-[5.25rem]">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-black leading-tight md:text-3xl">{t("hero.headline")}</h2>
          </div>

          <div className="hidden w-[min(56vw,980px)] min-w-[520px] text-white md:block">
            <h1 className={`${isChinese ? "font-serifCn text-[6rem] md:text-[9rem] lg:text-[11rem] xl:text-[12.5rem]" : "font-sans text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[8.7rem]"} mb-6 text-right font-black uppercase leading-[0.82] tracking-normal text-white`}>
              {heroTitle}
            </h1>
            <div className="grid grid-cols-3 items-end gap-7">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t border-white/45 pt-3">
                  <p className="font-sans text-2xl font-black leading-none">{stat.value}</p>
                  <p className="mt-2 text-[11px] font-black uppercase leading-4 text-white/78">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 grid overflow-hidden rounded-[1.25rem] border border-white/12 bg-[linear-gradient(90deg,rgba(158,47,36,0.5)_0%,rgba(158,47,36,0.42)_48%,rgba(96,32,28,0.3)_66%,rgba(21,21,21,0.38)_86%,rgba(21,21,21,0.44)_100%)] shadow-[0_20px_64px_rgba(0,0,0,0.12)] md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_390px]">
          <div className="p-4 md:p-5">
            <h3 className="museum-title max-w-3xl text-2xl font-black leading-none text-white md:text-4xl">
              {t("ticketStrip.title")}
            </h3>
            <p className="mt-3 max-w-4xl text-sm font-bold leading-5 text-white/88 md:leading-6">
              {t("ticketStrip.text")}
            </p>
          </div>
          <div className="flex flex-col justify-between bg-black/5 p-4 md:p-5">
            <p className="text-sm font-bold leading-5 text-white/88 md:leading-6">{t("ticketStrip.note")}</p>
            <div className="mt-4">
              <TicketButton compact className="border-cinnabar bg-cinnabar text-white hover:border-white hover:bg-white hover:text-ink" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
