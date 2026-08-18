import { CartIcon, MailCheckIcon, LockIcon, TruckIcon } from "@/components/Icons";

// "How to Buy" section - explains the full purchase flow to first-time
// visitors: add to cart -> checkout by email -> payment link -> shipping.
// Place this section above the FAQ section on the homepage.
export default function HowToBuy() {
  const steps = [
    {
      number: "1",
      icon: CartIcon,
      title: "Add items to your cart",
      description:
        "Browse our tools and click \"Add to cart\" on each product you want. You can add as many items as you like, and adjust quantities anytime from the cart.",
    },
    {
      number: "2",
      icon: MailCheckIcon,
      title: "Click \"Checkout\"",
      description:
        "Open your cart and review your items. When you're ready, click the \"Checkout\" button. This will open your email app with a pre-filled message listing your order.",
    },
    {
      number: "3",
      icon: LockIcon,
      title: "Add your details and send",
      description:
        "In the pre-filled email, add your name, shipping address, and phone number, then send it to us. We will reply with a secure payment link to complete your purchase.",
    },
    {
      number: "4",
      icon: TruckIcon,
      title: "Track your order by email",
      description:
        "Once your payment is confirmed, we prepare your order for shipping. You will receive email updates at every step, including your tracking number once your package ships.",
    },
  ];

  return (
    <section id="how-to-buy" className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-center text-brand-navyDark mb-2">
        How to Buy
      </h2>
      <p className="text-center text-sm text-gray-500 max-w-2xl mx-auto mb-10">
        Shopping with Life Tools is simple and secure. Here is exactly how
        it works, from adding items to your cart to receiving your order.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="relative w-16 h-16 rounded-full bg-brand-navy text-white flex items-center justify-center mb-4">
                <Icon className="w-7 h-7" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="font-semibold text-brand-navyDark mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      <p className="text-center text-xs text-gray-400 mt-10">
        Questions about an order? Email support@lifetools.com or message us
        on WhatsApp — we typically reply within 24 hours, Monday to Saturday.
      </p>
    </section>
  );
}
