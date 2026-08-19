"use client";

import Image from "next/image";
import { useCart } from "@/lib/CartContext";
import { formatPrice } from "@/lib/products";
import { CloseIcon } from "@/components/Icons";
import { useLanguage } from "@/lib/LanguageContext";
import { useTranslatedText } from "@/lib/useTranslatedText";

const ORDERS_EMAIL = "orders@lifetools.com";
const FREE_SHIPPING_THRESHOLD_CENTS = 19900;

function CartLineName({ name }: { name: string }) {
  const { lang } = useLanguage();
  const translated = useTranslatedText(name, lang);
  return <>{translated}</>;
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalCents, clearCart } =
    useCart();
  const { t } = useLanguage();

  if (!isOpen) return null;

  const remainingCents = Math.max(0, FREE_SHIPPING_THRESHOLD_CENTS - totalCents);

  function buildCheckoutEmailLink() {
    const subject = "Life Tools Order Request";

    const lines = items.map(
      (i) =>
        `- ${i.product.name} | Qty: ${i.quantity} | ${formatPrice(
          i.product.priceCents * i.quantity
        )}`
    );

    const body = [
      "Hello Life Tools,",
      "",
      "I would like to place the following order:",
      "",
      ...lines,
      "",
      `Order total: ${formatPrice(totalCents)}`,
      "",
      "Fill in the details below in the same order",
      "Country:",
      "Region:",
      "City:",
      "Street:",
      "House number:",
      "Zip code:",
      "Phone number:",
      "Last name:",
      "First name:",
      "",
      "Please send me a secure payment link to complete this purchase.",
      "(If you need to add more items, close this email and return to the website)",
    ].join("\n");

    return `mailto:${ORDERS_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="fixed inset-0 z-50">
      {/* Invisible overlay to catch outside clicks and close the popover */}
      <button
        aria-label="Close cart overlay"
        onClick={closeCart}
        className="absolute inset-0 bg-transparent"
      />

      {/* Floating cart bubble, anchored under the cart icon in the header */}
      <div
        className="absolute right-4 top-16 sm:right-8 w-[92vw] max-w-sm bg-white text-brand-navyDark rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
        style={{ maxHeight: "80vh" }}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b bg-brand-navy text-white rounded-t-xl">
          <h2 className="text-base font-bold">{t("yourCart")}</h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="p-1 text-white/80 hover:text-white"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {items.length > 0 && (
          <div className="px-4 py-2 text-xs text-center bg-brand-gray text-brand-navyDark border-b">
            {remainingCents > 0 ? (
              <span>{t("spendMoreFreeShipping", { amount: formatPrice(remainingCents) })}</span>
            ) : (
              <span>{t("freeShippingUnlocked")}</span>
            )}
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-4 py-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center text-center py-8 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="w-12 h-12 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.847-4.784 2.121-7.365a1.125 1.125 0 00-1.11-1.235H5.106M7.5 14.25L5.106 5.635M7.5 14.25L5.25 20.25m11.25-15L21 14.25"
                />
              </svg>
              <p className="text-sm text-gray-500">{t("cartEmpty")}</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.product.id} className="flex gap-3 border-b pb-3">
                  <div className="relative w-14 h-14 shrink-0 rounded-md bg-brand-gray overflow-hidden">
                    <Image
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium text-brand-navyDark leading-snug">
                      <CartLineName name={item.product.name} />
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatPrice(item.product.priceCents)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-6 h-6 flex items-center justify-center border rounded text-brand-navyDark hover:bg-brand-gray text-xs"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="text-xs w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-6 h-6 flex items-center justify-center border rounded text-brand-navyDark hover:bg-brand-gray text-xs"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="ml-auto text-xs text-red-500 hover:underline"
                      >
                        {t("remove")}
                      </button>
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-brand-navyDark whitespace-nowrap">
                    {formatPrice(item.product.priceCents * item.quantity)}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t px-4 py-3 space-y-2 bg-white">
            <div className="flex items-center justify-between text-sm font-bold text-brand-navyDark">
              <span>{t("total")}</span>
              <span>{formatPrice(totalCents)}</span>
            </div>

            <a
              href={buildCheckoutEmailLink()}
              onClick={() => {
                setTimeout(() => {
                  clearCart();
                  closeCart();
                }, 300);
              }}
              className="block w-full text-center bg-brand-orange text-white font-semibold py-2.5 rounded-full hover:bg-orange-600 transition text-sm"
            >
              {t("checkout")}
            </a>

            <p className="text-[11px] text-gray-500 text-center">{t("checkoutNote")}</p>
          </div>
        )}

        {items.length === 0 && (
          <div className="px-4 py-3 border-t">
            <a
              href="/#products"
              onClick={closeCart}
              className="block w-full text-center bg-brand-orange text-white font-semibold py-2.5 rounded-full hover:bg-orange-600 transition text-sm"
            >
              {t("shopOurProducts")}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
