"use client";

import { CartIcon, MailCheckIcon, LockIcon, TruckIcon } from "@/components/Icons";
import { useLanguage } from "@/lib/LanguageContext";

export default function HowToBuy() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "1",
      icon: CartIcon,
      title: t("howToBuyStep1Title"),
      description: t("howToBuyStep1Desc"),
    },
    {
      number: "2",
      icon: MailCheckIcon,
      title: t("howToBuyStep2Title"),
      description: t("howToBuyStep2Desc"),
    },
    {
      number: "3",
      icon: LockIcon,
      title: t("howToBuyStep3Title"),
      description: t("howToBuyStep3Desc"),
    },
    {
      number: "4",
      icon: TruckIcon,
      title: t("howToBuyStep4Title"),
      description: t("howToBuyStep4Desc"),
    },
  ];

  return (
    <section id="how-to-buy" className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-center text-brand-navyDark mb-2">
        {t("howToBuyTitle")}
      </h2>
      <p className="text-center text-sm text-gray-500 max-w-2xl mx-auto mb-10">
        {t("howToBuySubtitle")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="relative w-16 h-16 rounded-full bg-sky-700 text-white flex items-center justify-center mb-4">
                <Icon className="w-7 h-7" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="font-semibold text-brand-navyDark mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          );
        })}
      </div>

      <p className="text-center text-xs text-gray-400 mt-10">{t("howToBuyDeliveryNote")}</p>
    </section>
  );
}
