import Image from "next/image";
import Link from "next/link";
import { Product, formatPrice } from "@/lib/products";

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <div className="star text-sm leading-none" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const onSale = !!product.compareAtCents && product.compareAtCents > product.priceCents;

  return (
    <div className="flex flex-col text-center px-2">
      <Link href={`/product/${product.slug}`} className="block relative">
        <div className="relative w-full h-40 md:h-48 mb-3 overflow-hidden rounded-md bg-white flex items-center justify-center">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain p-3"
          />
          {product.badge && (
            <span className="absolute top-2 left-2 bg-brand-orange text-white text-[11px] font-semibold px-2 py-1 rounded">
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

      {typeof product.rating === "number" && (
        <div className="flex items-center justify-center gap-1 mt-1">
          <Stars rating={product.rating} />
          {product.reviewCount ? (
            <span className="text-xs text-gray-500">{product.reviewCount} Review(s)</span>
          ) : null}
        </div>
      )}

      <div className="mt-2 mb-3">
        {onSale ? (
          <p className="text-sm">
            <span className="font-bold text-brand-navyDark">Now: {formatPrice(product.priceCents)}</span>{" "}
            <span className="text-gray-400 line-through text-xs">
              {formatPrice(product.compareAtCents!)}
            </span>
          </p>
        ) : (
          <p className="font-bold text-brand-navyDark text-sm">
            Starting @ {formatPrice(product.priceCents)}
          </p>
        )}
      </div>

      <Link
        href={`/product/${product.slug}`}
        className={`w-full text-center text-sm font-semibold py-2 rounded-full border transition ${
          onSale
            ? "bg-brand-green text-white border-brand-green hover:bg-green-700"
            : "bg-white text-brand-navyDark border-brand-navyDark hover:bg-brand-navyDark hover:text-white"
        }`}
      >
        {onSale ? "Add to cart" : "Select options"}
      </Link>
    </div>
  );
}
