export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-navyDark text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-white font-semibold mb-2">Life Tools</h3>
          <p>
            Professional tools for ceramic tile installation, construction,
            and everyday repairs.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Support</h3>
          <p>Email: support@lifetools.com</p>
          <p>Order updates are sent by email after purchase.</p>
          <p>Replies within 24 hours, Mon-Sat.</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Policies</h3>
          <p>Shipping Policy</p>
          <p>Returns &amp; Refunds</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} Life Tools. All rights reserved.
      </div>
    </footer>
  );
}
