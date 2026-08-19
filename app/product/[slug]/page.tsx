"use client";

import Image from "next/image";
import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import { getProductBySlug, formatPrice, Product } from "@/lib/products";
import { useCart } from "@/lib/CartContext";
import { TruckIcon, MailCheckIcon, LockIcon } from "@/components/Icons";
import { useLanguage } from "@/lib/LanguageContext";
import { useTranslatedText } from "@/lib/useTranslatedText";

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span className="star text-lg" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
    </span>
  );
}

function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-gray-200">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-4 text-left text-sm font-semibold text-brand-navyDark"
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className={`w-4 h-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && <div className="pb-4 text-sm text-gray-600 leading-relaxed">{children}</div>}
    </div>
  );
}

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const product = getProductBySlug(params.slug);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCart();

  if (!product) return notFound();

  return (
    <ProductPageContent
      product={product}
      activeImage={activeImage}
      setActiveImage={setActiveImage}
      quantity={quantity}
      setQuantity={setQuantity}
      addItem={addItem}
      openCart={openCart}
    />
  );
}

function ProductPageContent({
  product,
  activeImage,
  setActiveImage,
  quantity,
  setQuantity,
  addItem,
  openCart,
}: {
  product: Product;
  activeImage: number;
  setActiveImage: (i: number) => void;
  quantity: number;
  setQuantity: (n: number) => void;
  addItem: (product: Product, quantity?: number) => void;
  openCart: () => void;
}) {
  const { lang, t } = useLanguage();
  const name = useTranslatedText(product.name, lang);
  const description = useTranslatedText(product.description, lang);

  const gallery = product.images.length ? product.images : [product.imageUrl];
  const onSale = !!product.compareAtCents && product.compareAtCents > product.priceCents;
  const savingsCents = onSale ? product.compareAtCents! - product.priceCents : 0;

  function handleAddToCart() {
    addItem(product, quantity);
    openCart();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-[1.3fr_1fr] gap-12">
      {/* Image column: large, dominant product photo */}
      <div>
        <div className="relative w-full h-[520px] md:h-[680px] bg-white border border-gray-100 rounded-lg overflow-hidden">
          <Image
            src={gallery[activeImage]}
            alt={name}
            fill
            priority
            className="object-contain p-6"
          />
        </div>

        {gallery.length > 1 && (
          <div className="flex gap-3 mt-4">
            {gallery.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className={`relative w-24 h-24 rounded-md overflow-hidden border-2 bg-white transition ${
                  i === activeImage ? "border-brand-orange" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Image src={img} alt={`${name} ${i + 1}`} fill className="object-contain p-1" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Info column: compact, scannable */}
      <div>
        {product.brand && (
          <p className="text-xs text-gray-500 uppercase tracking-wide">{product.brand}</p>
        )}
        <h1 className="text-2xl font-bold text-brand-navyDark mt-1">{name}</h1>

        <div className="flex items-baseline gap-3 mt-3">
          {onSale ? (
            <>
              <span className="text-2xl font-bold text-red-600">{formatPrice(product.priceCents)}</span>
              <span className="text-base text-gray-400 line-through">
                {formatPrice(product.compareAtCents!)}
              </span>
              <span className="text-xs font-semibold bg-orange-100 text-brand-orange px-2 py-1 rounded">
                {t("saveAmount")} {formatPrice(savingsCents)}
              </span>
            </>
          ) : (
            <span className="text-2xl font-bold text-brand-navyDark">
              {formatPrice(product.priceCents)}
            </span>
          )}
        </div>

        {typeof product.rating === "number" && (
          <div className="flex items-center gap-2 mt-2">
            <Stars rating={product.rating} />
            {product.reviewCount ? (
              <span className="text-sm text-gray-500">
                {product.reviewCount} {product.reviewCount === 1 ? t("review") : t("reviews")}
              </span>
            ) : null}
          </div>
        )}

        <div className="mt-4 bg-brand-gray rounded-lg p-4 space-y-2 text-sm text-brand-navyDark">
          <p className="flex items-center gap-2">
            <TruckIcon className="w-4 h-4 shrink-0" />
            <span>
              <span className="font-semibold">{t("freeShippingLabel")}</span> {t("freeShippingDetail")}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <MailCheckIcon className="w-4 h-4 shrink-0" />
            <span>
              <span className="font-semibold">{t("orderUpdatesLabel")}</span> {t("orderUpdatesDetail")}
            </span>
          </p>
        </div>

        <p
          className={`mt-4 text-sm font-semibold flex items-center gap-1.5 ${
            product.inStock ? "text-[#39e75f]" : "text-red-500"
          }`}
        >
          <span
            className={`inline-block w-2 h-2 rounded-full ${
              product.inStock ? "bg-[#39e75f]" : "bg-red-500"
            }`}
          />
          {product.inStock ? t("inStockQuickShip") : t("outOfStock")}
        </p>

        <div className="flex items-center gap-3 mt-5">
          <span className="text-sm font-medium text-brand-navyDark">{t("quantity")}</span>
          <div className="flex items-center border border-gray-300 rounded-full">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 flex items-center justify-center text-brand-navyDark hover:bg-brand-gray rounded-full"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="w-8 text-center text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-brand-navyDark hover:bg-brand-gray rounded-full"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`mt-4 w-full text-center font-semibold py-3.5 rounded-full transition text-base ${
            product.inStock
              ? "bg-brand-orange text-white hover:bg-orange-600"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {product.inStock ? t("addToCart") : t("outOfStock")}
        </button>

        <p className="mt-3 text-xs text-gray-500 flex items-center gap-1.5">
          <LockIcon className="w-3.5 h-3.5" /> {t("secureCheckoutNote")}
        </p>

        <div className="mt-8">
          <AccordionItem title={t("description")} defaultOpen>
            {description}
          </AccordionItem>
          <AccordionItem title={t("shippingInformation")}>
            {t("shippingInfoBody")}
          </AccordionItem>
          <AccordionItem title={t("warrantySupport")}>
            {t("warrantySupportBody").split("support@lifetools.com")[0]}
            <a href="mailto:support@lifetools.com" className="text-brand-orange hover:underline">
              support@lifetools.com
            </a>
            {t("warrantySupportBody").split("support@lifetools.com")[1]}
          </AccordionItem>
          <AccordionItem title={t("returnsRefund")}>
            {t("returnsRefundBody").split("support@lifetools.com")[0]}
            <a href="mailto:support@lifetools.com" className="text-brand-orange hover:underline">
              support@lifetools.com
            </a>
            {t("returnsRefundBody").split("support@lifetools.com")[1]}
          </AccordionItem>
        </div>
      </div>
    </div>
  );
}
