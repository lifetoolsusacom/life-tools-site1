"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function FreeShippingBanner() {
  const { t } = useLanguage();

  return (
    <div className="bg-brand-yellow text-brand-navyDark text-center py-1 px-4">
      <p className="font-bold text-sm md:text-base leading-tight">
        {t("freeShippingBannerText")}
      </p>
    </div>
  );
}
