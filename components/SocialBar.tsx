import { FacebookIcon, WhatsAppIcon, EmailIcon } from "@/components/Icons";

// Update these links to your real Facebook page, support email, and WhatsApp number.
const FACEBOOK_URL = "https://facebook.com/lifetools";
const EMAIL_ADDRESS = "support@lifetools.com";
const WHATSAPP_NUMBER = "15551234567"; // country code + number, digits only

export default function SocialBar() {
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
          <span>Facebook</span>
        </a>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Life Tools on WhatsApp"
          className="flex items-center gap-2 hover:text-brand-yellow transition"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span>Whatsapp</span>
        </a>

        <a
          href={`mailto:${EMAIL_ADDRESS}`}
          aria-label="Email Life Tools support"
          className="flex items-center gap-2 hover:text-brand-yellow transition"
        >
          <EmailIcon className="w-5 h-5" />
          <span>Email</span>
        </a>
      </div>
    </div>
  );
}
