"use client";

import { contactConfig } from "@/data/contact";
import { siteConfig } from "@/data/siteConfig";
import { useI18n } from "@/i18n/useI18n";
import { openContactModal } from "./contactModalEvents";
import { openTicketModal } from "./ticketModalEvents";

const links = ["home", "highlights", "tickets", "contact"] as const;

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="section-line bg-[linear-gradient(135deg,#4f171b_0%,#64221f_46%,#7b2b23_100%)] text-white">
      <div className="grid grid-cols-1 border-b border-[rgba(212,168,106,0.28)] md:grid-cols-[1.3fr_0.8fr_1fr]">
        <div className="border-b border-[rgba(212,168,106,0.28)] p-6 md:border-b-0 md:border-r md:p-9">
          <h2 className="museum-title text-4xl font-black">{siteConfig.name}</h2>
          <p className="mt-1 text-sm font-black uppercase">{siteConfig.nameEn}</p>
          <p className="mt-6 max-w-md text-sm font-semibold leading-7 text-white/78">{t("footer.tagline")}</p>
        </div>
        <div className="border-b border-[rgba(212,168,106,0.28)] p-6 md:border-b-0 md:border-r md:p-9">
          <p className="text-xs font-black uppercase text-gold">{t("footer.quick")}</p>
          <div className="mt-5 grid gap-3 text-sm font-bold">
            {links.map((link) =>
              link === "tickets" ? (
                <button key={link} type="button" data-ticket-trigger onClick={openTicketModal} className="w-fit text-left text-white/92 hover:text-gold">
                  {t(`nav.${link}`)}
                </button>
              ) : link === "contact" ? (
                <button key={link} type="button" data-contact-trigger onClick={openContactModal} className="w-fit text-left text-white/92 hover:text-gold">
                  {t(`nav.${link}`)}
                </button>
              ) : (
                <a key={link} href={`/#${link}`} className="text-white/92 hover:text-gold">
                  {t(`nav.${link}`)}
                </a>
              )
            )}
          </div>
        </div>
        <div className="p-6 md:p-9">
          <p className="text-xs font-black uppercase text-gold">{t("footer.booking")}</p>
          <div className="mt-5 grid gap-3 text-sm font-bold">
            <button type="button" data-ticket-trigger onClick={openTicketModal} className="w-fit text-left text-white/92 hover:text-gold">{t("nav.tickets")}</button>
            <a href={contactConfig.whatsappUrl} className="text-white/92 hover:text-gold">WhatsApp</a>
            <a href={`mailto:${contactConfig.email}`} className="text-white/92 hover:text-gold">{contactConfig.email}</a>
            <a href={contactConfig.googleMaps} className="text-white/92 hover:text-gold">Google Maps</a>
            <span className="text-white/92">{contactConfig.wechat}</span>
          </div>
        </div>
      </div>
      <div className="px-6 py-5 text-xs font-semibold text-white/68 md:px-9">{t("footer.rights")}</div>
    </footer>
  );
}
