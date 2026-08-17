export default function ReturnsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-navyDark mb-6">Returns &amp; Refunds</h1>
      <div className="prose prose-sm text-gray-700 space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-brand-navyDark mb-2">Return Window</h2>
          <p>
            You may return most unused items within 30 days of delivery for
            a full refund or exchange. Items must be in their original
            condition and packaging.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-navyDark mb-2">How to Start a Return</h2>
          <p>
            Email support@lifetools.com with your order number, the item(s)
            you want to return, and the reason for the return. We will
            reply with instructions on how and where to send the item back.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-navyDark mb-2">Damaged or Incorrect Items</h2>
          <p>
            If your order arrives damaged or you received the wrong item,
            contact us within 7 days of delivery with photos of the issue.
            We will send a replacement or issue a full refund at no
            additional cost to you.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-navyDark mb-2">Non-Returnable Items</h2>
          <p>
            Used or installed tools, items missing original packaging, and
            products marked as final sale are not eligible for return
            unless defective.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-navyDark mb-2">Refund Processing</h2>
          <p>
            Once we receive and inspect your returned item, we will notify
            you by email. Approved refunds are issued to your original
            payment method within 5-10 business days.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-navyDark mb-2">Return Shipping Costs</h2>
          <p>
            Customers are responsible for return shipping costs unless the
            item arrived damaged, defective, or incorrect, in which case
            Life Tools covers the cost.
          </p>
        </section>

      </div>
    </div>
  );
}
