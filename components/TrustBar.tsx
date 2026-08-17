import { LockIcon, TruckIcon, MailCheckIcon, ToolIcon } from "@/components/Icons";

export default function TrustBar() {
  return (
    <section className="bg-brand-gray border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-gray-600">
        <div className="flex items-center justify-center gap-2">
          <LockIcon className="w-5 h-5 text-brand-navy" />
          <span>Secure checkout</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <TruckIcon className="w-5 h-5 text-brand-navy" />
          <span>Tracked shipping</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <MailCheckIcon className="w-5 h-5 text-brand-navy" />
          <span>Email order updates</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <ToolIcon className="w-5 h-5 text-brand-navy" />
          <span>Pro-grade tools</span>
        </div>
      </div>
    </section>
  );
}
