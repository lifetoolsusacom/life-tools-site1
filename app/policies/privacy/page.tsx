export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-navyDark mb-6">Privacy Policy</h1>
      <div className="prose prose-sm text-gray-700 space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-brand-navyDark mb-2">Information We Collect</h2>
          <p>
            When you place an order or contact us, we may collect your
            name, email address, shipping address, phone number, and order
            details. We do not collect or store credit card numbers; all
            payments are processed through secure third-party payment
            providers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-navyDark mb-2">How We Use Your Information</h2>
          <p>
            We use your information to process orders, send order and
            shipping updates by email, respond to support requests, and
            improve our products and services. We do not sell your
            personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-navyDark mb-2">Email Communications</h2>
          <p>
            Because all purchases are finalized and updated via email, you
            will receive transactional emails related to your order,
            including payment links, confirmations, and shipping updates.
            You may opt out of any non-essential marketing emails at any
            time.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-navyDark mb-2">Data Storage &amp; Security</h2>
          <p>
            We take reasonable measures to protect your personal
            information from unauthorized access, alteration, or
            disclosure. Order and contact data is stored only as long as
            necessary to fulfill orders and comply with legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-navyDark mb-2">Third-Party Services</h2>
          <p>
            We may use third-party services for payment processing, email
            delivery, and website hosting. These providers only receive the
            information necessary to perform their specific function and
            are bound by their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-brand-navyDark mb-2">Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal information at any time by emailing
            support@lifetools.com.
          </p>
        </section>

      </div>
    </div>
  );
}
