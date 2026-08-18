"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Banner } from "@/lib/products";

export default function Carousel({ banners }: { banners: Banner[] }) {
  const slides = banners.slice(0, 3);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] overflow-hidden bg-brand-navyDark">
      <div
        className="carousel-track h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide) => (
          <Link
            key={slide.id}
            href={slide.link ?? "/#products"}
            className="relative shrink-0 w-full h-full"
          >
            <Image
              src={slide.imageUrl}
              alt={slide.alt}
              fill
              className="object-cover"
              priority
            />
          </Link>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-brand-orange" : "bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
