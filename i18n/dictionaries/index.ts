import type { Locale } from "@/i18n/config";
import { en } from "./en";
import { zhCN } from "./zh-CN";
import { zhTW } from "./zh-TW";
import { fr } from "./fr";
import { de } from "./de";
import { es } from "./es";
import { it } from "./it";
import { pt } from "./pt";
import { ja } from "./ja";
import { ko } from "./ko";

export const dictionaries: Record<Locale, Record<string, unknown>> = {
  en,
  "zh-CN": zhCN,
  "zh-TW": zhTW,
  fr,
  de,
  es,
  it,
  pt,
  ja,
  ko
};
