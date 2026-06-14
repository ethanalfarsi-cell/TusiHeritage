export const locales = ["en", "zh-CN", "zh-TW", "fr", "de", "es", "it", "pt", "ja", "ko"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  it: "Italiano",
  pt: "Português",
  ja: "日本語",
  ko: "한국어"
};

export const defaultLocale: Locale = "en";

const aliases: Record<string, Locale> = {
  zh: "zh-CN",
  "zh-Hans": "zh-CN",
  "zh-Hant": "zh-TW",
  pt: "pt",
  "pt-BR": "pt",
  "pt-PT": "pt"
};

export function normalizeLocale(input?: string | null): Locale {
  if (!input) return defaultLocale;
  const clean = input.trim();
  if ((locales as readonly string[]).includes(clean)) return clean as Locale;
  if (aliases[clean]) return aliases[clean];
  const base = clean.split("-")[0];
  const match = locales.find((locale) => locale.split("-")[0] === base);
  return match ?? defaultLocale;
}
