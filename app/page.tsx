import Carousel from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";
import FAQ from "@/components/FAQ";
import TrustBar from "@/components/TrustBar";
import { products, banners } from "@/lib/products";

export default function HomePage() {
  return (
    <div>
      {/* Carousel - full width, up to 3 slides, 800x350 images, auto-advancing */}
      <Carousel banners={banners} />

      {/* Products grid */}
      <section id="products" className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center text-brand-navyDark mb-8">
          Featured tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
          {products.slice(0, 7).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trust bar with real icons */}
      <TrustBar />

      {/* FAQ sits above Shipping / Returns */}
      <FAQ />

      {/* Shipping / Returns */}
      <section id="shipping" className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 border-t border-gray-200">
        <div>
          <h2 className="text-xl font-bold text-brand-navyDark mb-2">Shipping</h2>
          <p className="text-gray-600 text-sm">
            Orders are processed within 1-2 business days. Free shipping on
            orders over $199.90 (contiguous US only, some exclusions apply).
            You will receive an email confirmation after checkout and a
            second email with tracking information once your order ships.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-brand-navyDark mb-2">
            Returns &amp; refunds
          </h2>
          <p className="text-gray-600 text-sm">
            Unused items in original packaging can be returned within 30
            days of delivery. Contact support@lifetools.com with your order
            number to start a return.
          </p>
        </div>
      </section>
    </div>
  );
}
