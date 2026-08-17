import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl shrink-0">
          <span className="relative w-10 h-10 shrink-0">
            <Image
              src="/logo.png"
              alt="Life Tools logo"
              fill
              className="object-contain"
            />
          </span>
          <span className="hidden sm:inline">Life Tools</span>
        </Link>

        <form action="/#products" className="flex-1 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full rounded-md pl-4 pr-10 py-2 text-brand-navyDark text-sm focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-0 top-0 h-full px-3 flex items-center justify-center text-brand-navyDark"
            >
              🔍
            </button>
          </div>
        </form>

        <div className="hidden md:flex items-center gap-6 text-sm shrink-0">
          <Link href="/#contact" className="flex flex-col items-center hover:text-brand-yellow transition">
            <span className="text-lg leading-none">👤</span>
            <span>Sign In</span>
          </Link>
          <Link href="/#products" className="flex flex-col items-center hover:text-brand-yellow transition">
            <span className="text-lg leading-none">🛒</span>
            <span>0 Items · $0.00</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
