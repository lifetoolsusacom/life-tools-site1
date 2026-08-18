"use client";

import Link from "next/link";
import Image from "next/image";
import { CartIcon, SearchIcon } from "@/components/Icons";
import { useCart } from "@/lib/CartContext";
import { formatPrice } from "@/lib/products";

export default function Header() {
  const { totalItems, totalCents, openCart } = useCart();

  return (
    <header className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-4 h-14 overflow-visible relative">
        <Link href="/" className="flex items-center shrink-0 relative z-10">
          <span className="relative w-20 h-20 shrink-0 mt-4">
            <Image
              src="/logo.png"
              alt="Life Tools"
              fill
              className="object-contain"
            />
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

        <button
          onClick={openCart}
          aria-label="Open cart"
          className="hidden md:flex items-center gap-2 text-sm shrink-0 hover:text-brand-yellow transition"
        >
          <CartIcon className="w-6 h-6" />
          <span>
            {totalItems} {totalItems === 1 ? "Item" : "Items"} · {formatPrice(totalCents)}
          </span>
        </button>

        <button
          onClick={openCart}
          aria-label="Open cart"
          className="md:hidden flex items-center gap-1 shrink-0"
        >
          <CartIcon className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="bg-brand-orange text-white text-xs font-bold rounded-full px-1.5 py-0.5">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
