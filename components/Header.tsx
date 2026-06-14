"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { useI18n } from "@/i18n/useI18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { TicketButton } from "./TicketButton";
import { openContactModal } from "./contactModalEvents";
import { openTicketModal } from "./ticketModalEvents";

const links = [
  ["home", "/#home"],
  ["highlights", "/#highlights"],
  ["tickets", ""],
  ["contact", ""]
] as const;

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-ink transition ${scrolled ? "bg-paper/92 backdrop-blur-xl" : "bg-paper"}`}>
      <div className="grid min-h-[72px] grid-cols-[1fr_auto_auto] items-center border-ink md:grid-cols-[260px_1fr_auto]">
        <Link href="/" className="flex h-full flex-col justify-center border-r border-ink px-4 md:px-6" aria-label={siteConfig.nameEn}>
          <span className="museum-title text-2xl font-black leading-none md:text-3xl">{siteConfig.name}</span>
          <span className="mt-1 text-[11px] font-black uppercase tracking-normal">{siteConfig.nameEn}</span>
        </Link>

        <nav className="hidden h-full items-center md:flex">
          {links.map(([key, href]) =>
            key === "tickets" ? (
              <button key={key} type="button" data-ticket-trigger onClick={openTicketModal} className="flex h-full items-center border-r border-ink px-5 text-sm font-black uppercase transition hover:bg-ink hover:text-white">
                {t(`nav.${key}`)}
              </button>
            ) : key === "contact" ? (
              <button key={key} type="button" data-contact-trigger onClick={openContactModal} className="flex h-full items-center border-r border-ink px-5 text-sm font-black uppercase transition hover:bg-ink hover:text-white">
                {t(`nav.${key}`)}
              </button>
            ) : (
              <a key={key} href={href} className="flex h-full items-center border-r border-ink px-5 text-sm font-black uppercase transition hover:bg-ink hover:text-white">
                {t(`nav.${key}`)}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 px-4 md:flex">
          <LanguageSwitcher />
          <TicketButton compact />
        </div>

        <div className="flex h-full items-center border-l border-ink md:hidden">
          <TicketButton compact className="h-full border-0" />
          <button type="button" onClick={() => setOpen((value) => !value)} className="h-full border-l border-ink px-4 text-sm font-black uppercase">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-b border-ink bg-paper md:hidden">
          <div className="grid grid-cols-2 border-b border-ink">
            {links.map(([key, href]) =>
              key === "tickets" ? (
                <button
                  key={key}
                  type="button"
                  data-ticket-trigger
                  onClick={() => {
                    setOpen(false);
                    openTicketModal();
                  }}
                  className="border-r border-t border-ink px-4 py-4 text-left text-sm font-black uppercase"
                >
                  {t(`nav.${key}`)}
                </button>
              ) : key === "contact" ? (
                <button
                  key={key}
                  type="button"
                  data-contact-trigger
                  onClick={() => {
                    setOpen(false);
                    openContactModal();
                  }}
                  className="border-r border-t border-ink px-4 py-4 text-left text-sm font-black uppercase"
                >
                  {t(`nav.${key}`)}
                </button>
              ) : (
                <a key={key} href={href} onClick={() => setOpen(false)} className="border-r border-t border-ink px-4 py-4 text-sm font-black uppercase">
                  {t(`nav.${key}`)}
                </a>
              )
            )}
          </div>
          <div className="p-4">
            <LanguageSwitcher />
          </div>
        </div>
      ) : null}
    </header>
  );
}


