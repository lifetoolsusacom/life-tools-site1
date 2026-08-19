import Carousel from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";
import HowToBuy from "@/components/HowToBuy";
import FAQ from "@/components/FAQ";
import TrustBar from "@/components/TrustBar";
import ShippingReturns from "@/components/ShippingReturns";
import FeaturedToolsHeading from "@/components/FeaturedToolsHeading";
import { products, banners } from "@/lib/products";

export default function HomePage() {
  return (
    <div>
      {/* Carousel - full width, up to 3 slides, 800x350 images, auto-advancing */}
      <Carousel banners={banners} />

      {/* Products grid */}
      <section id="products" className="max-w-7xl mx-auto px-4 py-12">
        <FeaturedToolsHeading />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trust bar with real icons */}
      <TrustBar />

      {/* How to Buy - explains the full purchase flow, placed above the FAQ */}
      <HowToBuy />

      {/* FAQ sits above Shipping / Returns */}
      <FAQ />

      {/* Shipping / Returns */}
      <ShippingReturns />
    </div>
  );
}
