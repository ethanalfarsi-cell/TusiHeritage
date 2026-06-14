"use client";

import { localeLabels, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/useI18n";

export function LanguageSwitcher() {
  const { locale, locales, setLocale, t } = useI18n();
  const handleLocaleChange = (value: string) => setLocale(value as Locale);

  return (
    <label className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-normal">
      <span className="hidden md:inline">{t("common.language")}</span>
      <select
        value={locale}
        aria-label={t("common.language")}
        onChange={(event) => handleLocaleChange(event.currentTarget.value)}
        onInput={(event) => handleLocaleChange(event.currentTarget.value)}
        className="h-10 rounded-full border border-ink bg-white/30 px-3 text-sm font-semibold outline-none transition hover:bg-ink hover:text-white"
      >
        {locales.map((item) => (
          <option key={item} value={item}>
            {localeLabels[item]}
          </option>
        ))}
      </select>
    </label>
  );
}
