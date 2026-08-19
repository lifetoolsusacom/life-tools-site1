"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center text-brand-navyDark mb-8">
        {t("faqTitle")}
      </h2>
      <div className="grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="font-semibold text-brand-navyDark mb-1">{t("faqQ1")}</p>
          <p className="text-gray-600">{t("faqA1")}</p>
        </div>
        <div>
          <p className="font-semibold text-brand-navyDark mb-1">{t("faqQ2")}</p>
          <p className="text-gray-600">{t("faqA2")}</p>
        </div>
        <div>
          <p className="font-semibold text-brand-navyDark mb-1">{t("faqQ3")}</p>
          <p className="text-gray-600">
            {t("faqA3").split("support@lifetools.com")[0]}
            <a href="mailto:support@lifetools.com" className="text-brand-orange hover:underline">
              support@lifetools.com
            </a>
            {t("faqA3").split("support@lifetools.com")[1]}
          </p>
        </div>
      </div>
    </section>
  );
}
