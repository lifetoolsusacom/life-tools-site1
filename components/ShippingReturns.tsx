"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function ShippingReturns() {
  const { t } = useLanguage();

  return (
    <section
      id="shipping"
      className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 border-t border-gray-200"
    >
      <div>
        <h2 className="text-xl font-bold text-brand-navyDark mb-2">{t("shipping")}</h2>
        <p className="text-gray-600 text-sm">{t("shippingInfoBody")}</p>
      </div>
      <div>
        <h2 className="text-xl font-bold text-brand-navyDark mb-2">{t("returnsAndRefunds")}</h2>
        <p className="text-gray-600 text-sm">
          {t("returnsRefundBody").split("support@lifetools.com")[0]}
          <a href="mailto:support@lifetools.com" className="text-brand-orange hover:underline">
            support@lifetools.com
          </a>
          {t("returnsRefundBody").split("support@lifetools.com")[1]}
        </p>
      </div>
    </section>
  );
}
