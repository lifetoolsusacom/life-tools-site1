"use client";

import Image from "next/image";
import Link from "next/link";
import { Product, formatPrice } from "@/lib/products";
import { useCart } from "@/lib/CartContext";
import { useLanguage } from "@/lib/LanguageContext";
import { useTranslatedText } from "@/lib/useTranslatedText";

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <div className="text-brand-yellow text-sm leading-none" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const addItem = useCart().addItem;
  const { lang, t } = useLanguage();
  const name = useTranslatedText(product.name, lang);
  const onSale = !!product.compareAtCents && product.compareAtCents > product.priceCents;

  return (
    <div className="flex flex-col text-center px-2">
      <Link href={`/product/${product.slug}`} className="block relative">
        <div className="relative w-full h-40 md:h-48 mb-3 overflow-hidden rounded-md bg-white flex items-center justify-center">
          <Image src={product.imageUrl} alt={name} fill className="object-contain p-3" />
          {product.badge && (
            <span className="absolute top-2 left-2 bg-brand-orange text-white text-[11px] font-semibold px-2 py-1 rounded">
              {product.badge}
            </span>
          )}
        </div>
      </Link>

      {product.brand && <p className="text-xs text-gray-500">{product.brand}</p>}

      <Link href={`/product/${product.slug}`}>
        <h3 className="text-sm font-medium text-brand-navyDark leading-snug hover:underline min-h-[40px]">
          {name}
        </h3>
      </Link>

      {typeof product.rating === "number" && (
        <div className="flex items-center justify-center gap-1 mt-1">
          <Stars rating={product.rating} />
          {product.reviewCount ? (
            <span className="text-xs text-gray-500">
              ({product.reviewCount} {product.reviewCount === 1 ? t("review") : t("reviews")})
            </span>
          ) : null}
        </div>
      )}

      <p
        className={`mt-1 text-[11px] font-semibold flex items-center justify-center gap-1 ${
          product.inStock ? "text-[#39e75f]" : "text-red-500"
        }`}
      >
        <span
          className={`inline-block w-1.5 h-1.5 rounded-full ${
            product.inStock ? "bg-[#39e75f]" : "bg-red-500"
          }`}
        />
        {product.inStock ? t("inStockQuickShip") : t("outOfStock")}
      </p>

      <div className="mt-2 mb-3">
        {onSale ? (
          <p className="text-sm">
            <span className="font-bold text-brand-navyDark">
              {t("now")}: {formatPrice(product.priceCents)}
            </span>{" "}
            <span className="text-gray-400 line-through text-xs">
              {formatPrice(product.compareAtCents!)}
            </span>
          </p>
        ) : (
          <p className="font-bold text-brand-navyDark text-sm">
            {t("startingAt")} {formatPrice(product.priceCents)}
          </p>
        )}
      </div>

      <button
        onClick={() => addItem(product, 1)}
        disabled={!product.inStock}
        className={`w-full text-center text-sm font-semibold py-2 rounded-full border transition ${
          product.inStock
            ? onSale
              ? "bg-green-800 text-white border-brand-green hover:bg-green-500"
              : "bg-white text-brand-navyDark border-brand-navyDark hover:bg-brand-navyDark hover:text-white"
            : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
        }`}
      >
        {product.inStock ? t("addToCart") : t("outOfStock")}
      </button>
    </div>
  );
}
