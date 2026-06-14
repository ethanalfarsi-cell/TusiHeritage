/* eslint-disable @next/next/no-img-element */
"use client";

import { openContactModal } from "./contactModalEvents";
import { type Attraction, localize } from "@/data/attractions";
import { useI18n } from "@/i18n/useI18n";

export function AttractionCard({ attraction, index }: { attraction: Attraction; index: number }) {
  const { locale, t } = useI18n();

  return (
    <article id={`attraction-${attraction.slug}`} className="card-hover group flex min-h-full scroll-mt-8 flex-col border border-ink bg-white/95">
      <div className="relative aspect-[16/11] overflow-hidden border-b border-ink bg-ink">
        <img src={attraction.image} alt={localize(attraction.name, locale)} className="image-cover" />
        <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/95 px-3 py-2 text-xs font-black uppercase text-cinnabar shadow-[0_10px_26px_rgba(0,0,0,0.2)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <button
          type="button"
          data-contact-trigger
          onClick={openContactModal}
          className="absolute bottom-4 right-4 rounded-full border border-white/70 bg-black/45 px-4 py-2 text-xs font-black uppercase text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm transition hover:bg-cinnabar"
        >
          {t("common.learnMore")}
        </button>
      </div>
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <h3 className="museum-title text-3xl font-black leading-none md:text-[2.35rem]">{localize(attraction.name, locale)}</h3>
        <p className="mt-3 flex-1 text-sm font-semibold leading-6 text-ink/76">{localize(attraction.description, locale)}</p>
      </div>
    </article>
  );
}

