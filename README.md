# Life Tools - Storefront v4

Updates in this version:

1. Real SVG icons replace emoji everywhere: Facebook, WhatsApp, Email in
   the social bar, plus Cart, Search, Lock, Truck, Mail, Tool icons across
   the header and trust bar (see `components/Icons.tsx`).
2. Header simplified: shows only the logo image (no "Life Tools" text
   label next to it). Place your real logo at `public/logo.png`.
3. Fully working shopping cart:
   - "Add to cart" on product cards and the product page adds items to a
     cart stored in `lib/CartContext.tsx` (persisted in localStorage).
   - Clicking the cart icon in the header opens a slide-in drawer
     (`components/CartDrawer.tsx`) listing all items, with quantity
     controls and remove buttons.
   - "Finalizar Compra" builds a `mailto:` link with the full order
     summary (items, quantities, total) and opens the customer's email
     client addressed to `orders@lifetools.com`.
4. "Sign In" button removed from the header entirely.
5. Footer "Policies" links now navigate to real, detailed pages:
   - `/policies/shipping`
   - `/policies/returns`
   - `/policies/privacy`
   - `/policies/terms`

## 1. Add your real images

Open `public/` and replace:

- `logo.png` with your real logo (heart + trowel design)
- `banner-1.jpg`, `banner-2.jpg`, `banner-3.jpg` with your carousel images
  (800x350 recommended)

## 2. Install dependencies

```
npm install
```

## 3. Edit your products

Open `lib/products.ts` and edit the `products` array (name, price, images,
description, badge, rating) and the `banners` array.

## 4. Edit social links and checkout email

- `components/SocialBar.tsx`: update `FACEBOOK_URL`, `EMAIL_ADDRESS`,
  `WHATSAPP_NUMBER`.
- `components/CartDrawer.tsx`: update `ORDERS_EMAIL` if different from
  `orders@lifetools.com`.

## 5. Run locally

```
npm run dev
```

Open http://localhost:3000

## 6. Deploy

```
git add .
git commit -m "Update: real icons, working cart, policy pages"
git push
```

Vercel redeploys automatically on every push.
