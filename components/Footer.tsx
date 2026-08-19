"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-brand-navyDark text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm text-center">
        <div>
          <h3 className="text-white font-semibold mb-2">Life Tools</h3>
          <p>{t("footerTagline")}</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">{t("support")}</h3>
          <p>{t("supportEmailLabel")}: support@lifetools.com</p>
          <p>{t("supportOrderUpdatesLine")}</p>
          <p>{t("supportReplyTime")}</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">{t("policiesTitle")}</h3>
          <ul className="space-y-1 flex flex-col items-center">
            <li>
              <Link href="/policies/shipping" className="hover:text-brand-yellow hover:underline transition">
                {t("shippingPolicy")}
              </Link>
            </li>
            <li>
              <Link href="/policies/returns" className="hover:text-brand-yellow hover:underline transition">
                {t("returnsRefundsPolicy")}
              </Link>
            </li>
            <li>
              <Link href="/policies/privacy" className="hover:text-brand-yellow hover:underline transition">
                {t("privacyPolicy")}
              </Link>
            </li>
            <li>
              <Link href="/policies/terms" className="hover:text-brand-yellow hover:underline transition">
                {t("termsOfService")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} Life Tools. {t("footerRights")}❤️
      </div>
    </footer>
  );
}
