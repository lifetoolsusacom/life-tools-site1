"use client";

import Image from "next/image";
import { useCart } from "@/lib/CartContext";
import { formatPrice } from "@/lib/products";
import { CloseIcon } from "@/components/Icons";

const ORDERS_EMAIL = "orders@lifetools.com";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalCents, clearCart } =
    useCart();

  if (!isOpen) return null;

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
      "My details:",
      "Name:",
      "Shipping address:",
      "Phone:",
      "",
      "Please send me a secure payment link to complete this purchase.",
    ].join("\n");

    return `mailto:${ORDERS_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <button
        aria-label="Close cart overlay"
        onClick={closeCart}
        className="absolute inset-0 bg-black/50"
      />

      {/* Drawer panel */}
      <div className="relative w-full sm:w-[420px] h-full bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-bold text-brand-navyDark">Your Cart</h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-1 text-gray-500 hover:text-brand-navyDark">
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="text-sm text-gray-500 text-center mt-10">
              Your cart is empty.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.product.id} className="flex gap-3 border-b pb-4">
                  <div className="relative w-16 h-16 shrink-0 rounded-md bg-brand-gray overflow-hidden">
                    <Image
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium text-brand-navyDark leading-snug">
                      {item.product.name}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {formatPrice(item.product.priceCents)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-7 h-7 flex items-center justify-center border rounded text-brand-navyDark hover:bg-brand-gray"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-7 h-7 flex items-center justify-center border rounded text-brand-navyDark hover:bg-brand-gray"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="ml-auto text-xs text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-brand-navyDark whitespace-nowrap">
                    {formatPrice(item.product.priceCents * item.quantity)}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t px-5 py-4 space-y-3">
            <div className="flex items-center justify-between text-base font-bold text-brand-navyDark">
              <span>Total</span>
              <span>{formatPrice(totalCents)}</span>
            </div>

            <a
              href={buildCheckoutEmailLink()}
              onClick={() => {
                // Give the browser time to open the mail client before clearing.
                setTimeout(() => {
                  clearCart();
                  closeCart();
                }, 300);
              }}
              className="block w-full text-center bg-brand-orange text-white font-semibold py-3 rounded-full hover:bg-orange-600 transition"
            >
              Finalizar Compra
            </a>

            <p className="text-xs text-gray-500 text-center">
              This opens an email with your order details. We will reply with
              a secure payment link to complete your purchase.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
