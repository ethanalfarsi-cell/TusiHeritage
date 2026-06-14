"use client";

import { contactConfig } from "@/data/contact";
import { useI18n } from "@/i18n/useI18n";
import { TicketButton } from "./TicketButton";
import { openContactModal } from "./contactModalEvents";

export function FloatingMobileCTA() {
  const { locale, t } = useI18n();
  const isChinese = locale.startsWith("zh");
  const isEastAsian = locale === "ja" || locale === "ko";

  return (
    <div className="fixed inset-x-3 bottom-3 z-40 flex items-center gap-2 rounded-full border border-ink bg-paper/94 p-2 shadow-museum backdrop-blur-xl md:hidden">
      <TicketButton compact className="flex-1" label={isChinese ? "购票" : t("nav.tickets")} />
      {isChinese ? (
        <button type="button" data-contact-trigger onClick={openContactModal} className="flex-1 rounded-full border border-ink bg-white/45 px-3 py-3 text-center text-xs font-black uppercase">
          微信
        </button>
      ) : (
        <a href={contactConfig.whatsappUrl} className="flex-1 rounded-full border border-ink bg-white/45 px-3 py-3 text-center text-xs font-black uppercase">WhatsApp</a>
      )}
      {isEastAsian || isChinese ? (
        <button type="button" data-contact-trigger onClick={openContactModal} className="flex-1 rounded-full border border-ink bg-white/45 px-3 py-3 text-center text-xs font-black uppercase">
          {isChinese ? "咨询" : "Contact"}
        </button>
      ) : (
        <a href={`mailto:${contactConfig.email}`} className="flex-1 rounded-full border border-ink bg-white/45 px-3 py-3 text-center text-xs font-black uppercase">
          Email
        </a>
      )}
    </div>
  );
}
