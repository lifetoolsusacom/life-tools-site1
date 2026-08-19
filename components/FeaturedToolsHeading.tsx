"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function FeaturedToolsHeading() {
  const { t } = useLanguage();
  return (
    <h2 className="text-2xl font-bold text-center text-brand-navyDark mb-8">
      {t("featuredTools")}
    </h2>
  );
}
