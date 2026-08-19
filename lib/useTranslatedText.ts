"use client";

import { useEffect, useState } from "react";
import { Language } from "@/lib/i18n";

const CACHE_KEY = "life-tools-translation-cache";

type Cache = Record<string, string>;

function loadCache(): Cache {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveCache(cache: Cache) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {
    // ignore
  }
}

function cacheKey(text: string, lang: Language) {
  return `${lang}::${text}`;
}

const LIBRETRANSLATE_ENDPOINT = "https://libretranslate.com/translate";

async function translateText(text: string, targetLang: Language): Promise<string> {
  try {
    const res = await fetch(LIBRETRANSLATE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: text,
        source: "en",
        target: targetLang,
        format: "text",
      }),
    });
    if (!res.ok) throw new Error("Translation request failed");
    const data = await res.json();
    return data.translatedText || text;
  } catch {
    return text;
  }
}

/**
 * Translates a piece of product text (name/description) on the fly for
 * non-English languages, caching results in localStorage so repeat visits
 * and repeat renders don't re-call the API.
 * English text is returned immediately without any network call.
 */
export function useTranslatedText(text: string, lang: Language): string {
  const [translated, setTranslated] = useState(text);

  useEffect(() => {
    if (lang === "en" || !text) {
      setTranslated(text);
      return;
    }

    const key = cacheKey(text, lang);
    const cache = loadCache();

    if (cache[key]) {
      setTranslated(cache[key]);
      return;
    }

    let isCurrent = true;
    translateText(text, lang).then((result) => {
      if (!isCurrent) return;
      setTranslated(result);
      const freshCache = loadCache();
      freshCache[key] = result;
      saveCache(freshCache);
    });

    return () => {
      isCurrent = false;
    };
  }, [text, lang]);

  return translated;
}
