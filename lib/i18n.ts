export type Language = "en" | "es" | "pt";

export const LANGUAGES: { code: Language; label: string; countryCode: string }[] = [
  { code: "en", label: "English", countryCode: "us" },
  { code: "es", label: "Español", countryCode: "es" },
  { code: "pt", label: "Português", countryCode: "br" },
];

type Dictionary = Record<string, { en: string; es: string; pt: string }>;

export const dict: Dictionary = {
  searchPlaceholder: {
    en: "What are you looking for?",
    es: "¿Qué estás buscando?",
    pt: "O que você está procurando?",
  },
  buyViaWhatsApp: {
    en: "Buy via WhatsApp",
    es: "Comprar por WhatsApp",
    pt: "Comprar pelo WhatsApp",
  },
  items: { en: "Items", es: "Artículos", pt: "Itens" },
  item: { en: "Item", es: "Artículo", pt: "Item" },
  facebook: { en: "Facebook", es: "Facebook", pt: "Facebook" },
  whatsapp: { en: "Whatsapp", es: "Whatsapp", pt: "Whatsapp" },
  email: { en: "Email", es: "Correo", pt: "E-mail" },
  allPurchasesEmail: {
    en: "**All purchases are finalized via email**",
    es: "**Todas las compras se finalizan por correo electrónico**",
    pt: "**Todas as compras são finalizadas por e-mail**",
  },
  yourCart: { en: "Your Cart", es: "Tu carrito", pt: "Seu carrinho" },
  cartEmpty: {
    en: "Your cart is empty",
    es: "Tu carrito está vacío",
    pt: "Seu carrinho está vazio",
  },
  shopOurProducts: {
    en: "Shop our products",
    es: "Ver nuestros productos",
    pt: "Ver nossos produtos",
  },
  spendMoreFreeShipping: {
    en: "Spend {amount} more and get free shipping!",
    es: "¡Gasta {amount} más y obtén envío gratis!",
    pt: "Gaste {amount} a mais e ganhe frete grátis!",
  },
  freeShippingUnlocked: {
    en: "You've unlocked free shipping!",
    es: "¡Has desbloqueado el envío gratis!",
    pt: "Você desbloqueou o frete grátis!",
  },
  total: { en: "Total", es: "Total", pt: "Total" },
  checkout: { en: "Checkout", es: "Finalizar compra", pt: "Finalizar compra" },
  checkoutNote: {
    en: "This opens an email with your order details. We will reply with a secure payment link to complete your purchase.",
    es: "Esto abrirá un correo con los detalles de tu pedido. Te responderemos con un enlace de pago seguro para completar tu compra.",
    pt: "Isso abrirá um e-mail com os detalhes do seu pedido. Responderemos com um link de pagamento seguro para concluir sua compra.",
  },
  remove: { en: "Remove", es: "Eliminar", pt: "Remover" },
  addToCart: { en: "Add to cart", es: "Agregar al carrito", pt: "Adicionar ao carrinho" },
  outOfStock: { en: "Out of stock", es: "Agotado", pt: "Fora de estoque" },
  inStockQuickShip: {
    en: "In stock - Quick Ship",
    es: "En stock - Envío rápido",
    pt: "Em estoque - Envio rápido",
  },
  reviews: { en: "reviews", es: "reseñas", pt: "avaliações" },
  review: { en: "review", es: "reseña", pt: "avaliação" },
  save: { en: "Save", es: "Ahorra", pt: "Economize" },
  now: { en: "Now", es: "Ahora", pt: "Agora" },
  startingAt: { en: "Starting @", es: "Desde", pt: "A partir de" },
  quantity: { en: "Quantity", es: "Cantidad", pt: "Quantidade" },
  secureCheckoutNote: {
    en: "Secure checkout, finalized via email.",
    es: "Compra segura, finalizada por correo electrónico.",
    pt: "Compra segura, finalizada por e-mail.",
  },
  description: { en: "Description", es: "Descripción", pt: "Descrição" },
  shippingInformation: {
    en: "Shipping information",
    es: "Información de envío",
    pt: "Informações de envio",
  },
  warrantySupport: {
    en: "Warranty & support",
    es: "Garantía y soporte",
    pt: "Garantia e suporte",
  },
  returnsRefund: {
    en: "Returns & refund",
    es: "Devoluciones y reembolsos",
    pt: "Devoluções e reembolsos",
  },
  freeShippingNote: {
    en: "Free shipping: on orders over $199.90 (contiguous US only).",
    es: "Envío gratis: en pedidos superiores a $199.90 (solo EE. UU. contiguos).",
    pt: "Frete grátis: em pedidos acima de $199.90 (apenas EUA contiguos).",
  },
  orderUpdatesNote: {
    en: "Order updates: sent by email after checkout.",
    es: "Actualizaciones del pedido: enviadas por correo después de la compra.",
    pt: "Atualizações do pedido: enviadas por e-mail após a compra.",
  },
  featuredTools: { en: "Featured tools", es: "Herramientas destacadas", pt: "Ferramentas em destaque" },
  faqTitle: {
    en: "Frequently Asked Questions",
    es: "Preguntas frecuentes",
    pt: "Perguntas frequentes",
  },
  shipping: { en: "Shipping", es: "Envío", pt: "Envio" },
  returnsAndRefunds: {
    en: "Returns & refunds",
    es: "Devoluciones y reembolsos",
    pt: "Devoluções e reembolsos",
  },
  secureCheckout: { en: "Secure checkout", es: "Pago seguro", pt: "Compra segura" },
  trackedShipping: { en: "Tracked shipping", es: "Envío rastreado", pt: "Envio rastreado" },
  emailOrderUpdates: {
    en: "Email order updates",
    es: "Actualizaciones por correo",
    pt: "Atualizações por e-mail",
  },
  proGradeTools: { en: "Pro-grade tools", es: "Herramientas profesionales", pt: "Ferramentas profissionais" },
  howToBuyTitle: { en: "How to Buy", es: "Cómo comprar", pt: "Como comprar" },
  howToBuySubtitle: {
    en: "Shopping with Life Tools is simple and secure. Here is exactly how it works, from adding items to your cart to receiving your order.",
    es: "Comprar con Life Tools es simple y seguro. Así es exactamente cómo funciona, desde agregar artículos a tu carrito hasta recibir tu pedido.",
    pt: "Comprar na Life Tools é simples e seguro. Veja exatamente como funciona, desde adicionar itens ao carrinho até receber seu pedido.",
  },
  howToBuyStep1Title: {
    en: "Add items to your cart",
    es: "Agrega artículos a tu carrito",
    pt: "Adicione itens ao carrinho",
  },
  howToBuyStep1Desc: {
    en: 'Browse our tools and click "Add to cart" on each product you want. You can add as many items as you like, and adjust quantities anytime from the cart.',
    es: 'Explora nuestras herramientas y haz clic en "Agregar al carrito" en cada producto que quieras. Puedes agregar tantos artículos como desees y ajustar las cantidades en cualquier momento desde el carrito.',
    pt: 'Navegue pelas nossas ferramentas e clique em "Adicionar ao carrinho" em cada produto que desejar. Você pode adicionar quantos itens quiser e ajustar as quantidades em qualquer momento no carrinho.',
  },
  howToBuyStep2Title: {
    en: 'Click "Checkout"',
    es: 'Haz clic en "Finalizar compra"',
    pt: 'Clique em "Finalizar compra"',
  },
  howToBuyStep2Desc: {
    en: 'Open your cart and review your items. When you\'re ready, click the "Checkout" button. This will open your email app with a pre-filled message listing your order.',
    es: 'Abre tu carrito y revisa tus artículos. Cuando estés listo, haz clic en el botón "Finalizar compra". Esto abrirá tu aplicación de correo con un mensaje prellenado con tu pedido.',
    pt: 'Abra seu carrinho e revise seus itens. Quando estiver pronto, clique no botão "Finalizar compra". Isso abrirá seu aplicativo de e-mail com uma mensagem pré-preenchida listando seu pedido.',
  },
  howToBuyStep3Title: {
    en: "Add your details and send",
    es: "Agrega tus datos y envíalo",
    pt: "Adicione seus dados e envie",
  },
  howToBuyStep3Desc: {
    en: "Enter all the requested details into the pre-filled email, then send it to us. We will reply with a secure payment link to complete your purchase.",
    es: "Ingresa todos los datos solicitados en el correo prellenado y envíalo. Te responderemos con un enlace de pago seguro para completar tu compra.",
    pt: "Preencha todos os dados solicitados no e-mail pré-preenchido e envie para nós. Responderemos com um link de pagamento seguro para concluir sua compra.",
  },
  howToBuyStep4Title: {
    en: "Track your order by email",
    es: "Rastrea tu pedido por correo",
    pt: "Acompanhe seu pedido por e-mail",
  },
  howToBuyStep4Desc: {
    en: "Once your payment is confirmed, we prepare your order for shipping. You will receive email updates at every step, including your tracking number once your package ships.",
    es: "Una vez confirmado tu pago, preparamos tu pedido para el envío. Recibirás actualizaciones por correo en cada paso, incluyendo tu número de rastreo cuando se envíe tu paquete.",
    pt: "Depois que o pagamento for confirmado, preparamos seu pedido para envio. Você receberá atualizações por e-mail em cada etapa, incluindo o código de rastreio quando o pacote for enviado.",
  },
  howToBuyDeliveryNote: {
    en: "Delivery time of 7 to 15 business days, depending on the region – it may arrive sooner.",
    es: "Tiempo de entrega de 7 a 15 días hábiles, según la región; puede llegar antes.",
    pt: "Prazo de entrega de 7 a 15 dias úteis, dependendo da região – pode chegar antes.",
  },
  footerTagline: {
    en: "Professional tools for ceramic tile installation, construction, and everyday repairs.",
    es: "Herramientas profesionales para instalación de azulejos, construcción y reparaciones cotidianas.",
    pt: "Ferramentas profissionais para instalação de azulejos, construção e reparos do dia a dia.",
  },
  support: { en: "Support", es: "Soporte", pt: "Suporte" },
  supportEmailLabel: { en: "Email", es: "Correo", pt: "E-mail" },
  supportOrderUpdatesLine: {
    en: "Order updates are sent by email after purchase.",
    es: "Las actualizaciones del pedido se envían por correo después de la compra.",
    pt: "As atualizações do pedido são enviadas por e-mail após a compra.",
  },
  supportReplyTime: {
    en: "Replies within 24 hours, Mon-Sat.",
    es: "Respondemos en 24 horas, de lunes a sábado.",
    pt: "Respondemos em 24 horas, de segunda a sábado.",
  },
  policiesTitle: { en: "Policies", es: "Políticas", pt: "Políticas" },
  shippingPolicy: { en: "Shipping Policy", es: "Política de envío", pt: "Política de envio" },
  returnsRefundsPolicy: {
    en: "Returns & Refunds",
    es: "Devoluciones y reembolsos",
    pt: "Devoluções e reembolsos",
  },
  privacyPolicy: { en: "Privacy Policy", es: "Política de privacidad", pt: "Política de privacidade" },
  termsOfService: { en: "Terms of Service", es: "Términos de servicio", pt: "Termos de serviço" },
  footerRights: {
    en: "All rights reserved.",
    es: "Todos los derechos reservados.",
    pt: "Todos os direitos reservados.",
  },
  faqQ1: {
    en: "How do I get order updates?",
    es: "¿Cómo recibo actualizaciones de mi pedido?",
    pt: "Como recebo atualizações do meu pedido?",
  },
  faqA1: {
    en: "All updates are sent by email: order confirmation, processing, and shipping with tracking number.",
    es: "Todas las actualizaciones se envían por correo: confirmación del pedido, procesamiento y envío con número de rastreo.",
    pt: "Todas as atualizações são enviadas por e-mail: confirmação do pedido, processamento e envio com código de rastreio.",
  },
  faqQ2: {
    en: "What payment methods do you accept?",
    es: "¿Qué métodos de pago aceptan?",
    pt: "Quais formas de pagamento vocês aceitam?",
  },
  faqA2: {
    en: "Purchases are finalized securely via email. We will send you a secure payment link to complete your order.",
    es: "Las compras se finalizan de forma segura por correo electrónico. Te enviaremos un enlace de pago seguro para completar tu pedido.",
    pt: "As compras são finalizadas com segurança por e-mail. Enviaremos um link de pagamento seguro para concluir seu pedido.",
  },
  faqQ3: {
    en: "Can I contact the seller directly?",
    es: "¿Puedo contactar al vendedor directamente?",
    pt: "Posso contatar o vendedor diretamente?",
  },
  faqA3: {
    en: "Yes, email support@lifetools.com or message us on WhatsApp with your order number. We reply within 24 hours, Monday to Saturday.",
    es: "Sí, escribe a support@lifetools.com o enviános un mensaje por WhatsApp con tu número de pedido. Respondemos en 24 horas, de lunes a sábado.",
    pt: "Sim, envie um e-mail para support@lifetools.com ou mande uma mensagem no WhatsApp com o número do seu pedido. Respondemos em 24 horas, de segunda a sábado.",
  },
  saveAmount: { en: "Save", es: "Ahorra", pt: "Economize" },
  freeShippingLabel: { en: "Free shipping:", es: "Envío gratis:", pt: "Frete grátis:" },
  freeShippingDetail: {
    en: "on orders over $199.90 (contiguous US only).",
    es: "en pedidos superiores a $199.90 (solo EE. UU. contiguos).",
    pt: "em pedidos acima de $199.90 (apenas EUA contiguos).",
  },
  orderUpdatesLabel: { en: "Order updates:", es: "Actualizaciones del pedido:", pt: "Atualizações do pedido:" },
  orderUpdatesDetail: {
    en: "sent by email after checkout.",
    es: "enviadas por correo después de la compra.",
    pt: "enviadas por e-mail após a compra.",
  },
  shippingInfoBody: {
    en: "Orders are processed within 1-2 business days. Free shipping on orders over $199.90 (contiguous US only, some exclusions apply). You will receive an email confirmation after checkout and a second email with tracking information once your order ships.",
    es: "Los pedidos se procesan dentro de 1 a 2 días hábiles. Envío gratis en pedidos superiores a $199.90 (solo EE. UU. contiguos, aplican algunas exclusiones). Recibirás una confirmación por correo después de la compra y un segundo correo con la información de rastreo cuando se envíe tu pedido.",
    pt: "Os pedidos são processados em 1 a 2 dias úteis. Frete grátis em pedidos acima de $199.90 (apenas EUA contíguos, algumas exceções se aplicam). Você receberá uma confirmação por e-mail após a compra e um segundo e-mail com as informações de rastreio quando seu pedido for enviado.",
  },
  warrantySupportBody: {
    en: "Contact support@lifetools.com or message us on WhatsApp with your order number for any warranty questions. We reply within 24 hours, Monday to Saturday.",
    es: "Contacta a support@lifetools.com o enviános un mensaje por WhatsApp con tu número de pedido para cualquier pregunta sobre la garantía. Respondemos en 24 horas, de lunes a sábado.",
    pt: "Entre em contato pelo support@lifetools.com ou mande uma mensagem no WhatsApp com o número do seu pedido para questões de garantia. Respondemos em 24 horas, de segunda a sábado.",
  },
  returnsRefundBody: {
    en: "Unused items in original packaging can be returned within 30 days of delivery. Contact support@lifetools.com with your order number to start a return.",
    es: "Los artículos sin usar en su empaque original pueden devolverse dentro de los 30 días posteriores a la entrega. Contacta a support@lifetools.com con tu número de pedido para iniciar una devolución.",
    pt: "Itens não utilizados na embalagem original podem ser devolvidos em até 30 dias após a entrega. Contate support@lifetools.com com o número do seu pedido para iniciar uma devolução.",
  },
  freeShippingBannerText: {
    en: "Free Shipping on orders over $199.90",
    es: "Envío gratis en pedidos superiores a $199.90",
    pt: "Frete grátis em pedidos acima de $199.90",
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
