# Life Tools - Storefront v3

Updated to match the new reference layout:

- Full-width auto-advancing carousel (no max-width container), images
  should be 800x350 or the same aspect ratio. It fills the banner area
  edge-to-edge like the brown reference block.
- Header now uses your logo image (heart + trowel) instead of the "LT"
  badge. Place your logo file at `public/logo.png`.
- Social bar centered with Facebook, Whatsapp, and Email, followed by a
  navy strip: "All purchases are finalized via email".
- FAQ section moved above the Shipping / Returns block on the homepage
  (previously it lived only in the footer).
- Footer keeps Life Tools info, Support, and Policies.

## 1. Add your real images

Open `public/` and replace:

- `logo.png` with your real logo (heart + trowel design)
- `banner-1.jpg`, `banner-2.jpg`, `banner-3.jpg` with your carousel images
  (800x350 recommended)

See `public/README-IMAGES.txt` for details.

## 2. Install dependencies

```
npm install
```

## 3. Edit your products

Open `lib/products.ts` and edit the `products` array (name, price, images,
description, payment link, badge, rating) and the `banners` array (paths
to your carousel images).

## 4. Edit social links

Open `components/SocialBar.tsx` and update:

- `FACEBOOK_URL`
- `EMAIL_ADDRESS`
- `WHATSAPP_NUMBER` (digits only, with country code, e.g. 15551234567)

## 5. Run locally

```
npm run dev
```

Open http://localhost:3000

## 6. Deploy

1. Push this project to a GitHub repository.
2. Go to vercel.com, sign in with GitHub, import the repo.
3. Deploy with default settings (Next.js is auto-detected).
4. Add your custom domain in Vercel > Settings > Domains.
