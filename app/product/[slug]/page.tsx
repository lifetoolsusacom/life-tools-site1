"use client";

import Image from "next/image";
import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import { getProductBySlug, formatPrice } from "@/lib/products";

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span className="star text-lg" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
    </span>
  );
}

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const product = getProductBySlug(params.slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return notFound();

  const gallery = product.images.length ? product.images : [product.imageUrl];
  const onSale = !!product.compareAtCents && product.compareAtCents > product.priceCents;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      <div>
        <div className="relative w-full h-80 md:h-96 bg-brand-gray rounded-lg overflow-hidden">
          <Image
            src={gallery[activeImage]}
            alt={product.name}
            fill
            className="object-contain p-4"
          />
        </div>

        {gallery.length > 1 && (
          <div className="flex gap-2 mt-3">
            {gallery.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className={`relative w-16 h-16 rounded-md overflow-hidden border-2 ${
                  i === activeImage ? "border-brand-orange" : "border-gray-200"
                }`}
              >
                <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        {product.brand && (
          <p className="text-xs text-gray-500 uppercase tracking-wide">{product.brand}</p>
        )}
        <h1 className="text-2xl font-bold text-brand-navyDark mt-1">{product.name}</h1>

        {typeof product.rating === "number" && (
          <div className="flex items-center gap-2 mt-2">
            <Stars rating={product.rating} />
            {product.reviewCount ? (
              <span className="text-sm text-gray-500">{product.reviewCount} Review(s)</span>
            ) : null}
          </div>
        )}

        <div className="mt-4">
          {onSale ? (
            <p className="text-2xl font-bold text-brand-navyDark">
              Now: {formatPrice(product.priceCents)}{" "}
              <span className="text-gray-400 line-through text-base font-normal ml-2">
                {formatPrice(product.compareAtCents!)}
              </span>
            </p>
          ) : (
            <p className="text-2xl font-bold text-brand-navyDark">
              {formatPrice(product.priceCents)}
            </p>
          )}
        </div>

        <p
          className={`mt-2 text-sm font-medium ${
            product.inStock ? "text-brand-green" : "text-red-500"
          }`}
        >
          {product.inStock ? "In stock, ready to ship" : "Out of stock"}
        </p>

        <a
          href={product.paymentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block w-full text-center bg-brand-orange text-white font-semibold py-3 rounded-full hover:bg-orange-600 transition"
        >
          Buy now
        </a>

        <a
          href={product.paymentLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block w-full text-center bg-white text-brand-navyDark font-semibold py-3 rounded-full border border-brand-navyDark hover:bg-brand-navyDark hover:text-white transition"
        >
          Add to cart
        </a>

        <div className="mt-8">
          <h2 className="font-semibold text-brand-navyDark mb-2">Description</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
        </div>

        <div className="mt-6 text-xs text-gray-500 space-y-1">
          <p>🚚 Free shipping on orders over $199.90 (contiguous US only).</p>
          <p>📧 Order and shipping updates sent by email.</p>
          <p>🔒 Secure checkout.</p>
        </div>
      </div>
    </div>
  );
}
