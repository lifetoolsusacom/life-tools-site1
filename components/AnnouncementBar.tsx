"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function AnnouncementBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-brand-navyDark text-white text-center text-sm font-semibold py-2">
      {t("allPurchasesEmail")}
    </div>
  );
}
