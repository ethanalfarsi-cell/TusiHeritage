"use client";

import { ContactForm } from "./ContactForm";
import { contactModalEventName } from "./contactModalEvents";
import { useI18n } from "@/i18n/useI18n";

const contactModalScript = `
(() => {
  const init = () => {
    const modal = document.querySelector("[data-contact-modal]");
    if (!modal || modal.dataset.nativeInit === "true") return;
    modal.dataset.nativeInit = "true";
    let previousOverflow = "";

    const open = (event) => {
      if (event && event.preventDefault) event.preventDefault();
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      modal.setAttribute("aria-hidden", "false");
      const firstField = modal.querySelector("input, textarea, button");
      if (firstField && firstField.focus) window.setTimeout(() => firstField.focus(), 80);
    };

    const close = (event) => {
      if (event && event.preventDefault) event.preventDefault();
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = previousOverflow;
    };

    window.addEventListener("${contactModalEventName}", open);
    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!target || !target.closest) return;
      if (target.closest("[data-contact-trigger]")) open(event);
      if (target.closest("[data-contact-close]")) close(event);
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

export function ContactModal() {
  const { t } = useI18n();

  return (
    <>
      <div
        data-contact-modal
        className="fixed inset-0 z-[120] hidden items-center justify-center bg-black/62 p-4"
        role="dialog"
        aria-modal="true"
        aria-hidden="true"
        aria-labelledby="contact-modal-title"
      >
        <div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[1.5rem] border border-ink bg-paper p-5 shadow-museum md:p-8">
          <button
            data-contact-close
            type="button"
            aria-label={t("common.close")}
            className="absolute right-4 top-4 rounded-full border border-ink bg-white px-4 py-2 text-xs font-black uppercase transition hover:bg-ink hover:text-white"
          >
            {t("common.close")}
          </button>
          <p className="text-xs font-black uppercase text-cinnabar">{t("nav.contact")}</p>
          <h2 id="contact-modal-title" className="museum-title mt-3 max-w-3xl pr-24 text-4xl font-black leading-none md:text-6xl">
            {t("contact.title")}
          </h2>
          <p className="mt-5 max-w-3xl text-base font-semibold leading-7 text-ink/72">{t("contact.subtitle")}</p>
          <div className="mt-7">
            <ContactForm />
          </div>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: contactModalScript }} />
    </>
  );
}
