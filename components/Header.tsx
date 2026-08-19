"use client";

import Link from "next/link";
import Image from "next/image";
import { CartIcon, SearchIcon, WhatsAppIcon, FacebookIcon, EmailIcon } from "@/components/Icons";
import { useCart } from "@/lib/CartContext";
import { formatPrice } from "@/lib/products";

// Update these to your real Facebook page, support email, and WhatsApp number.
const FACEBOOK_URL = "https://facebook.com/worldtools";
const EMAIL_ADDRESS = "support@lifetools.com";
const WHATSAPP_NUMBER = "19096693801"; // country code + number, digits only
const WHATSAPP_MESSAGE = "Hi, I want to make my purchase here! \ud83d\ude0a";

export default function Header() {
  const { totalItems, totalCents, isOpen, openCart, closeCart } = useCart();

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <header className="bg-brand-navy text-white relative">
      {/* Main bar: logo + brand name, search, WhatsApp buy button, cart */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-4 h-14 overflow-visible relative">
        <Link
          href="/"
          className="flex flex-col items-center shrink-0 relative z-10 ml-6"
        >
          <span className="relative w-20 h-20 shrink-0 -mt-2">
            <Image
              src="/logo.png"
              alt="Life Tools"
              fill
              className="object-contain"
            />
          </span>
          <span className="lifetools-brand text-brand-yellow text-xl leading-none -mt-1 select-none">
            Life Tools
          </span>
        </Link>

        <form action="/#products" className="flex-1 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full rounded-md pl-4 pr-10 py-2 text-brand-navyDark text-sm focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-0 top-0 h-full px-3 flex items-center justify-center text-brand-navyDark"
            >
              <SearchIcon className="w-5 h-5" />
            </button>
          </div>
        </form>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buy via WhatsApp"
          className="hidden sm:flex items-center gap-2 shrink-0 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition whitespace-nowrap"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span>Buy via WhatsApp</span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buy via WhatsApp"
          className="sm:hidden flex items-center justify-center shrink-0 bg-green-600 hover:bg-green-500 text-white p-2 rounded-full transition"
        >
          <WhatsAppIcon className="w-5 h-5" />
        </a>

        <div className="relative shrink-0">
          <button
            onClick={() => (isOpen ? closeCart() : openCart())}
            aria-label="Open cart"
            className="hidden md:flex items-center gap-2 text-sm hover:text-brand-yellow transition"
          >
            <CartIcon className="w-6 h-6" />
            <span>
              {totalItems} {totalItems === 1 ? "Item" : "Items"} · {formatPrice(totalCents)}
            </span>
          </button>

          <button
            onClick={() => (isOpen ? closeCart() : openCart())}
            aria-label="Open cart"
            className="md:hidden flex items-center gap-1"
          >
            <CartIcon className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="bg-brand-orange text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Merged second bar: same navy background as the main bar, social links */}
      <div className="bg-brand-navy text-white text-sm border-t border-white/10">
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
            href={whatsappHref}
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
    </header>
  );
}
