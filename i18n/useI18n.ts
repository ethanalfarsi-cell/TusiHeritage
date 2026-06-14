"use client";

import { useCallback, useEffect, useMemo, useSyncExternalStore } from "react";
import { defaultLocale, Locale, locales, normalizeLocale } from "@/i18n/config";
import { dictionaries } from "@/i18n/dictionaries";

const storageKey = "xiangxifu_locale";
const eventName = "xiangxifu-locale-change";

type UnknownRecord = Record<string, unknown>;

function getPath(source: UnknownRecord, path: string): unknown {
  return path.split(".").reduce<unknown>((node, key) => {
    if (node && typeof node === "object" && key in (node as UnknownRecord)) {
      return (node as UnknownRecord)[key];
    }
    return undefined;
  }, source);
}

function detectLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const saved = window.localStorage.getItem(storageKey);
  if (saved) return normalizeLocale(saved);
  const detected = window.navigator.languages?.find(Boolean) ?? window.navigator.language;
  return normalizeLocale(detected);
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => undefined;
  const onChange = () => callback();
  window.addEventListener(eventName, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(eventName, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function useI18n() {
  const locale = useSyncExternalStore(subscribe, detectLocale, () => defaultLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    const normalized = normalizeLocale(nextLocale);
    window.localStorage.setItem(storageKey, normalized);
    window.dispatchEvent(new CustomEvent(eventName));
  }, []);

  const dictionary = useMemo(() => dictionaries[locale] ?? dictionaries.en, [locale]);

  const t = useCallback(
    (path: string): string => {
      const localized = getPath(dictionary, path);
      const fallback = getPath(dictionaries.en, path);
      const value = localized ?? fallback ?? path;
      return typeof value === "string" ? value : path;
    },
    [dictionary]
  );

  const list = useCallback(
    <T,>(path: string): T[] => {
      const localized = getPath(dictionary, path);
      const fallback = getPath(dictionaries.en, path);
      const value = localized ?? fallback;
      return Array.isArray(value) ? (value as T[]) : [];
    },
    [dictionary]
  );

  return { locale, locales, setLocale, t, list };
}
