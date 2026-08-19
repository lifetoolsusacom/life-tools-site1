"use client";

import { FacebookIcon, WhatsAppIcon, EmailIcon } from "@/components/Icons";
import { useLanguage } from "@/lib/LanguageContext";

const FACEBOOK_URL = "https://facebook.com/worldtools";
const EMAIL_ADDRESS = "support@lifetools.com";
const WHATSAPP_NUMBER = "19096693801";

export default function SocialBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-brand-navyDark text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-10">
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Life Tools on Facebook"
          className="flex items-center gap-2 hover:text-brand-yellow transition"
        >
          <FacebookIcon className="w-5 h-5" />
          <span>{t("facebook")}</span>
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Life Tools on WhatsApp"
          className="flex items-center gap-2 hover:text-brand-yellow transition"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span>{t("whatsapp")}</span>
        </a>
        <a
          href={`mailto:${EMAIL_ADDRESS}`}
          aria-label="Email Life Tools support"
          className="flex items-center gap-2 hover:text-brand-yellow transition"
        >
          <EmailIcon className="w-5 h-5" />
          <span>{t("email")}</span>
        </a>
      </div>
    </div>
  );
}
