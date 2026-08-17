export default function FAQ() {
  return (
    <section id="faq" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center text-brand-navyDark mb-8">
        Frequently Asked Questions
      </h2>
      <div className="grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="font-semibold text-brand-navyDark mb-1">
            How do I get order updates?
          </p>
          <p className="text-gray-600">
            All updates are sent by email: order confirmation, processing,
            and shipping with tracking number.
          </p>
        </div>
        <div>
          <p className="font-semibold text-brand-navyDark mb-1">
            What payment methods do you accept?
          </p>
          <p className="text-gray-600">
            Purchases are finalized securely via email. We will send you a
            secure payment link to complete your order.
          </p>
        </div>
        <div>
          <p className="font-semibold text-brand-navyDark mb-1">
            Can I contact the seller directly?
          </p>
          <p className="text-gray-600">
            Yes, email support@lifetools.com or message us on WhatsApp with
            your order number. We reply within 24 hours, Monday to Saturday.
          </p>
        </div>
      </div>
    </section>
  );
}
