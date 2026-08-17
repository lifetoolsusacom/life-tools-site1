export default function ShippingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-navyDark mb-6">Shipping Policy</h1>
      <div className="prose prose-sm text-gray-700 space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-brand-navyDark mb-2">Processing Time</h2>
          <p>
            Orders are processed within 1-2 business days after payment is
            confirmed. Orders placed on weekends or holidays are processed
            on the next business day.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-navyDark mb-2">Shipping Rates &amp; Free Shipping</h2>
          <p>
            We offer free shipping on orders over $199.90 to addresses in
            the contiguous United States. Some exclusions may apply for
            oversized or heavy items. Orders below this amount are charged
            a flat shipping rate calculated at checkout.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-navyDark mb-2">Delivery Times</h2>
          <p>
            Estimated delivery time is 3-7 business days after your order
            ships, depending on your location and the carrier used. Rural
            or remote areas may take longer.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-navyDark mb-2">Order Tracking</h2>
          <p>
            Once your order ships, you will receive an email with your
            carrier name and tracking number. You can use this information
            to follow your package until delivery.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-navyDark mb-2">Shipping Delays</h2>
          <p>
            While we do our best to meet estimated delivery times, delays
            can occasionally occur due to weather, carrier issues, or high
            demand. If your order is significantly delayed, contact us at
            support@lifetools.com and we will help track down your package.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-navyDark mb-2">International Shipping</h2>
          <p>
            At this time, Life Tools ships only within the United States.
            We are working on expanding international shipping options in
            the future.
          </p>
        </section>

      </div>
    </div>
  );
}
