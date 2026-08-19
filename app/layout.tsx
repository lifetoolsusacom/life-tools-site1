import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FreeShippingBanner from "@/components/FreeShippingBanner";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/lib/CartContext";
import { LanguageProvider } from "@/lib/LanguageContext";
import AnnouncementBar from "@/components/AnnouncementBar";

export const metadata: Metadata = {
  title: "Life Tools | Ceramic Tile & Construction Tools",
  description:
    "Life Tools sells professional tools for ceramic tile installation, construction, and everyday repairs. Fast checkout, order updates by email.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <CartProvider>
            <div className="sticky top-0 z-40">
              <FreeShippingBanner />
              <Header />
              <AnnouncementBar />
            </div>

            <main className="flex-1">{children}</main>
            <Footer />

            <CartDrawer />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
