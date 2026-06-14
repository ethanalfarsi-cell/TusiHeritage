"use client";

import { FormEvent, useState } from "react";
import { useI18n } from "@/i18n/useI18n";

export function ContactForm() {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="rounded-[1.25rem] border border-ink bg-white/95 p-5 shadow-[0_24px_70px_rgba(58,38,24,0.1)] md:p-7">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-black uppercase text-ink/82">
          {t("contact.form.name")}
          <input required className="rounded-xl border border-ink bg-paper/70 px-4 py-3 font-semibold outline-none transition focus:border-cinnabar focus:bg-white focus:ring-2 focus:ring-cinnabar/20" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-black uppercase text-ink/82">
          {t("contact.form.email")}
          <input type="email" required className="rounded-xl border border-ink bg-paper/70 px-4 py-3 font-semibold outline-none transition focus:border-cinnabar focus:bg-white focus:ring-2 focus:ring-cinnabar/20" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-black uppercase text-ink/82">
          {t("contact.form.phone")}
          <input className="rounded-xl border border-ink bg-paper/70 px-4 py-3 font-semibold outline-none transition focus:border-cinnabar focus:bg-white focus:ring-2 focus:ring-cinnabar/20" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-black uppercase text-ink/82">
          {t("contact.form.date")}
          <input type="date" className="rounded-xl border border-ink bg-paper/70 px-4 py-3 font-semibold outline-none transition focus:border-cinnabar focus:bg-white focus:ring-2 focus:ring-cinnabar/20" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-black uppercase text-ink/82 md:col-span-2">
          {t("contact.form.size")}
          <input type="number" min="1" className="rounded-xl border border-ink bg-paper/70 px-4 py-3 font-semibold outline-none transition focus:border-cinnabar focus:bg-white focus:ring-2 focus:ring-cinnabar/20" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-black uppercase text-ink/82 md:col-span-2">
          {t("contact.form.message")}
          <textarea rows={5} className="resize-none rounded-xl border border-ink bg-paper/70 px-4 py-3 font-semibold outline-none transition focus:border-cinnabar focus:bg-white focus:ring-2 focus:ring-cinnabar/20" />
        </label>
      </div>
      <button type="submit" className="mt-5 w-full rounded-full border border-ink bg-ink px-5 py-4 text-sm font-black uppercase text-white transition hover:border-cinnabar hover:bg-cinnabar">
        {t("contact.form.submit")}
      </button>
      {submitted ? <p className="mt-4 border-l-4 border-cinnabar pl-4 text-sm font-bold leading-6">{t("contact.form.success")}</p> : null}
    </form>
  );
}
