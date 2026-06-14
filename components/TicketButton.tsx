"use client";

import { ticketConfig } from "@/data/contact";
import { openTicketModal } from "./ticketModalEvents";
import { useI18n } from "@/i18n/useI18n";

type TicketButtonProps = {
  className?: string;
  label?: string;
  compact?: boolean;
};

export function TicketButton({ className = "", label, compact = false }: TicketButtonProps) {
  const { t } = useI18n();

  const onClick = () => {
    if (ticketConfig.ticketUrl && ticketConfig.ticketUrl !== "#") {
      window.location.href = ticketConfig.ticketUrl;
      return;
    }
    openTicketModal();
  };

  return (
    <button
      type="button"
      data-ticket-trigger
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full border border-cinnabar bg-cinnabar px-5 py-3 text-sm font-extrabold uppercase text-white shadow-[0_12px_34px_rgba(158,47,36,0.22)] transition hover:border-ink hover:bg-ink ${compact ? "h-11 px-4 py-2" : ""} ${className}`}
    >
      {label ?? t("common.buyTickets")}
    </button>
  );
}
