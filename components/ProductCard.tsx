"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, formatPrice } from "@/lib/products";
import { useCart } from "@/lib/CartContext";

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <div className="star text-sm leading-none" aria-label={`${rating} out of 5 stars`}>
      {"\u2605".repeat(full)}
      {"\u2606".repeat(5 - full)}
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const onSale = !!product.compareAtCents && product.compareAtCents > product.priceCents;

  // Second image for the hover effect: first entry in `images` that isn't
  // the same as the main imageUrl. Falls back to the main image if none.
  const hoverImage =
    product.images?.find((img) => img !== product.imageUrl) ?? product.imageUrl;

  const displayedImage = isHovered ? hoverImage : product.imageUrl;

  return (
    <div className="flex flex-col text-center px-2">
      <Link href={`/product/${product.slug}`} className="block relative">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full h-40 md:h-48 mb-3 overflow-hidden rounded-md bg-white flex items-center justify-center"
        >
          <Image
            src={displayedImage}
            alt={product.name}
            fill
            className="object-contain p-3 transition-opacity duration-200"
          />

          {product.badge && (
            <span className="absolute top-2 left-2 bg-brand-orange text-white text-[11px] font-semibold px-2 py-1 rounded flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path d="M13 2 3 14h6l-1 8 11-14h-7l1-6z" />
              </svg>
              {product.badge}
            </span>
          )}
        </div>
      </Link>

      {product.brand && (
        <p className="text-xs text-gray-500">{product.brand}</p>
      )}

      <Link href={`/product/${product.slug}`}>
        <h3 className="text-sm font-medium text-brand-navyDark leading-snug hover:underline min-h-[40px]">
          {product.name}
        </h3>
      </Link>

      <div className="mt-2 mb-1">
        {onSale ? (
          <p className="text-sm">
            <span className="font-bold text-brand-navyDark">
              {formatPrice(product.priceCents)}
            </span>{" "}
            <span className="text-gray-400 line-through text-xs">
              {formatPrice(product.compareAtCents!)}
            </span>
          </p>
        ) : (
          <p className="font-bold text-brand-navyDark text-sm">
            {formatPrice(product.priceCents)}
          </p>
        )}
      </div>

      {typeof product.rating === "number" && (
        <div className="flex items-center justify-center gap-1 mb-1">
          <Stars rating={product.rating} />
          {product.reviewCount ? (
            <span className="text-xs text-gray-500">
              {product.reviewCount} {product.reviewCount === 1 ? "review" : "reviews"}
            </span>
          ) : null}
        </div>
      )}

      <div className="flex items-center justify-center gap-1.5 mb-3 text-xs">
        <span
          className={`inline-block w-2 h-2 rounded-full ${
            product.inStock ? "bg-brand-green" : "bg-gray-400"
          }`}
        />
        <span className={product.inStock ? "text-brand-green" : "text-gray-400"}>
          {product.inStock ? "In stock - Quick Ship" : "Out of stock"}
        </span>
      </div>

      <button
        onClick={() => addItem(product, 1)}
        disabled={!product.inStock}
        className={`w-full text-center text-sm font-semibold py-2 rounded-full border transition ${
          product.inStock
            ? "bg-brand-orange text-white border-brand-orange hover:bg-orange-600"
            : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
        }`}
      >
        {product.inStock ? "Add to cart" : "Out of stock"}
      </button>
    </div>
  );
}
