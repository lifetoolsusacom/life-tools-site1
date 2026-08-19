export type Language = "en" | "es" | "pt";

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "\ud83c\uddfa\ud83c\uddf8" },
  { code: "es", label: "Espa\u00f1ol", flag: "\ud83c\uddea\ud83c\uddf8" },
  { code: "pt", label: "Portugu\u00eas", flag: "\ud83c\udde7\ud83c\uddf7" },
];

type Dictionary = Record<string, { en: string; es: string; pt: string }>;

export const dict: Dictionary = {
  searchPlaceholder: {
    en: "What are you looking for?",
    es: "\u00bfQu\u00e9 est\u00e1s buscando?",
    pt: "O que voc\u00ea est\u00e1 procurando?",
  },
  buyViaWhatsApp: {
    en: "Buy via WhatsApp",
    es: "Comprar por WhatsApp",
    pt: "Comprar pelo WhatsApp",
  },
  items: {
    en: "Items",
    es: "Art\u00edculos",
    pt: "Itens",
  },
  item: {
    en: "Item",
    es: "Art\u00edculo",
    pt: "Item",
  },
  facebook: { en: "Facebook", es: "Facebook", pt: "Facebook" },
  whatsapp: { en: "Whatsapp", es: "Whatsapp", pt: "Whatsapp" },
  email: { en: "Email", es: "Correo", pt: "E-mail" },
  allPurchasesEmail: {
    en: "**All purchases are finalized via email**",
    es: "**Todas las compras se finalizan por correo electr\u00f3nico**",
    pt: "**Todas as compras s\u00e3o finalizadas por e-mail**",
  },
  yourCart: { en: "Your Cart", es: "Tu carrito", pt: "Seu carrinho" },
  cartEmpty: {
    en: "Your cart is empty",
    es: "Tu carrito est\u00e1 vac\u00edo",
    pt: "Seu carrinho est\u00e1 vazio",
  },
  shopOurProducts: {
    en: "Shop our products",
    es: "Ver nuestros productos",
    pt: "Ver nossos produtos",
  },
  spendMoreFreeShipping: {
    en: "Spend {amount} more and get free shipping!",
    es: "\u00a1Gasta {amount} m\u00e1s y obt\u00e9n env\u00edo gratis!",
    pt: "Gaste {amount} a mais e ganhe frete gr\u00e1tis!",
  },
  freeShippingUnlocked: {
    en: "You've unlocked free shipping!",
    es: "\u00a1Has desbloqueado el env\u00edo gratis!",
    pt: "Voc\u00ea desbloqueou o frete gr\u00e1tis!",
  },
  total: { en: "Total", es: "Total", pt: "Total" },
  checkout: { en: "Checkout", es: "Finalizar compra", pt: "Finalizar compra" },
  checkoutNote: {
    en: "This opens an email with your order details. We will reply with a secure payment link to complete your purchase.",
    es: "Esto abrir\u00e1 un correo con los detalles de tu pedido. Te responderemos con un enlace de pago seguro para completar tu compra.",
    pt: "Isso abrir\u00e1 um e-mail com os detalhes do seu pedido. Responderemos com um link de pagamento seguro para concluir sua compra.",
  },
  remove: { en: "Remove", es: "Eliminar", pt: "Remover" },
  addToCart: { en: "Add to cart", es: "Agregar al carrito", pt: "Adicionar ao carrinho" },
  outOfStock: { en: "Out of stock", es: "Agotado", pt: "Fora de estoque" },
  inStockQuickShip: {
    en: "In stock - Quick Ship",
    es: "En stock - Env\u00edo r\u00e1pido",
    pt: "Em estoque - Envio r\u00e1pido",
  },
  reviews: { en: "reviews", es: "rese\u00f1as", pt: "avalia\u00e7\u00f5es" },
  review: { en: "review", es: "rese\u00f1a", pt: "avalia\u00e7\u00e3o" },
  save: { en: "Save", es: "Ahorra", pt: "Economize" },
  quantity: { en: "Quantity", es: "Cantidad", pt: "Quantidade" },
  secureCheckoutNote: {
    en: "Secure checkout, finalized via email.",
    es: "Compra segura, finalizada por correo electr\u00f3nico.",
    pt: "Compra segura, finalizada por e-mail.",
  },
  description: { en: "Description", es: "Descripci\u00f3n", pt: "Descri\u00e7\u00e3o" },
  shippingInformation: {
    en: "Shipping information",
    es: "Informaci\u00f3n de env\u00edo",
    pt: "Informa\u00e7\u00f5es de envio",
  },
  warrantySupport: {
    en: "Warranty & support",
    es: "Garant\u00eda y soporte",
    pt: "Garantia e suporte",
  },
  returnsRefund: {
    en: "Returns & refund",
    es: "Devoluciones y reembolsos",
    pt: "Devolu\u00e7\u00f5es e reembolsos",
  },
  freeShippingNote: {
    en: "Free shipping: on orders over $199.90 (contiguous US only).",
    es: "Env\u00edo gratis: en pedidos superiores a $199.90 (solo EE. UU. contiguos).",
    pt: "Frete gr\u00e1tis: em pedidos acima de $199.90 (apenas EUA contiguos).",
  },
  orderUpdatesNote: {
    en: "Order updates: sent by email after checkout.",
    es: "Actualizaciones del pedido: enviadas por correo despu\u00e9s de la compra.",
    pt: "Atualiza\u00e7\u00f5es do pedido: enviadas por e-mail ap\u00f3s a compra.",
  },
  featuredTools: { en: "Featured tools", es: "Herramientas destacadas", pt: "Ferramentas em destaque" },
  faqTitle: {
    en: "Frequently Asked Questions",
    es: "Preguntas frecuentes",
    pt: "Perguntas frequentes",
  },
  shipping: { en: "Shipping", es: "Env\u00edo", pt: "Envio" },
  returnsAndRefunds: {
    en: "Returns & refunds",
    es: "Devoluciones y reembolsos",
    pt: "Devolu\u00e7\u00f5es e reembolsos",
  },
};

export function t(key: keyof typeof dict, lang: Language, vars?: Record<string, string>) {
  let text = dict[key]?.[lang] ?? dict[key]?.en ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.replace(`{${k}}`, v);
    }
  }
  return text;
}
