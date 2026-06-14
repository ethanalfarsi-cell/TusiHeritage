"use client";

import { ticketConfig } from "@/data/contact";
import { useI18n } from "@/i18n/useI18n";
import { ticketModalEventName } from "./ticketModalEvents";

const ticketUrl = ticketConfig.ticketUrl && ticketConfig.ticketUrl !== "#" ? ticketConfig.ticketUrl : "";

const ticketModalScript = `
(() => {
  const init = () => {
    const modal = document.querySelector("[data-ticket-modal]");
    if (!modal || modal.dataset.nativeInit === "true") return;
    modal.dataset.nativeInit = "true";
    const ticketUrl = ${JSON.stringify(ticketUrl)};
    let previousOverflow = "";

    const open = (event) => {
      if (event && event.preventDefault) event.preventDefault();
      if (ticketUrl) {
        window.location.href = ticketUrl;
        return;
      }
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      modal.setAttribute("aria-hidden", "false");
      const firstButton = modal.querySelector("button");
      if (firstButton && firstButton.focus) window.setTimeout(() => firstButton.focus(), 80);
    };

    const close = (event) => {
      if (event && event.preventDefault) event.preventDefault();
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = previousOverflow;
    };

    window.addEventListener("${ticketModalEventName}", open);
    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!target || !target.closest) return;
      if (target.closest("[data-ticket-trigger]")) open(event);
      if (target.closest("[data-ticket-close]")) close(event);
      if (target.closest("[data-ticket-contact]")) close(event);
      if (target === modal) close(event);
    });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !modal.classList.contains("hidden")) close(event);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
`;

export function TicketModal() {
  const { t } = useI18n();

  return (
    <>
      <div
        data-ticket-modal
        className="fixed inset-0 z-[110] hidden items-center justify-center bg-black/55 p-4"
        role="dialog"
        aria-modal="true"
        aria-hidden="true"
        aria-labelledby="ticket-modal-title"
      >
        <div className="relative w-full max-w-2xl rounded-[1.5rem] border border-ink bg-white p-7 shadow-museum md:p-12">
          <button
            data-ticket-close
            type="button"
            aria-label={t("common.close")}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-ink text-xl font-bold transition hover:bg-ink hover:text-white"
          >
            X
          </button>
          <p className="mb-3 text-xs font-black uppercase text-cinnabar">{t("nav.tickets")}</p>
          <h2 id="ticket-modal-title" className="museum-title max-w-xl text-5xl font-black leading-[0.9] md:text-7xl">
            {t("tickets.modalTitle")}
          </h2>
          <p className="mt-6 max-w-xl text-base font-semibold leading-7 md:text-lg">{t("tickets.modalText")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              data-ticket-contact
              data-contact-trigger
              className="rounded-full border border-ink bg-ink px-5 py-3 text-sm font-black uppercase text-white hover:border-cinnabar hover:bg-cinnabar"
            >
              {t("common.contactUs")}
            </button>
            <button
              type="button"
              data-ticket-close
              className="rounded-full border border-ink px-5 py-3 text-sm font-black uppercase hover:bg-ink hover:text-white"
            >
              {t("common.close")}
            </button>
          </div>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: ticketModalScript }} />
    </>
  );
}
