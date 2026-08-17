export type Product = {
  id: string;
  slug: string;
  name: string;
  brand?: string;
  shortDescription: string;
  description: string;
  priceCents: number;
  compareAtCents?: number;
  imageUrl: string;
  images: string[];
  paymentLink: string;
  badge?: string;
  inStock: boolean;
  rating?: number;
  reviewCount?: number;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "tile-leveling-system-100pc",
    name: "Tile Leveling System - 100 pcs",
    brand: "Life Tools",
    shortDescription: "Anti lippage clips and wedges for flat, even tile installs.",
    description:
      "Professional-grade tile leveling kit with 100 clips and 100 wedges. Prevents lippage and uneven edges on floor and wall tile installations. Reusable wedges, compatible with tile from 1/8 in to 1/2 in thick. Works on floors, walls, and backsplashes for a smooth, professional finish.",
    priceCents: 1999,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7e6b0f0f0f0?w=1000&q=80",
    ],
    paymentLink: "mailto:orders@lifetools.com?subject=Life%20Tools%20Order%3A%20Tile%20Leveling%20System",
    badge: "Best seller",
    inStock: true,
    rating: 5,
    reviewCount: 34,
  },
  {
    id: "2",
    slug: "notched-trowel-1-2-inch",
    name: "1/2 in Notched Trowel",
    brand: "Life Tools",
    shortDescription: "Stainless steel trowel for even mortar spread.",
    description:
      "Square notch stainless steel trowel with ergonomic soft grip handle. Ideal for spreading thin-set mortar evenly for ceramic and porcelain tile installation. Comfortable grip reduces hand fatigue during long jobs.",
    priceCents: 1499,
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000&q=80",
    ],
    paymentLink: "mailto:orders@lifetools.com?subject=Life%20Tools%20Order%3A%20Notched%20Trowel",
    inStock: true,
    rating: 4.5,
    reviewCount: 12,
  },
  {
    id: "3",
    slug: "tile-spacers-2mm-200pc",
    name: "Tile Spacers 2mm (200 pcs)",
    brand: "Life Tools",
    shortDescription: "Consistent, even grout lines every time.",
    description:
      "Pack of 200 reusable 2mm cross-shaped tile spacers. Keeps grout lines consistent across floors, walls, and backsplashes. Works with ceramic, porcelain, and stone tile.",
    priceCents: 799,
    imageUrl: "https://images.unsplash.com/photo-1600607687644-c7e6b0f0f0f0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7e6b0f0f0f0?w=1000&q=80",
    ],
    paymentLink: "mailto:orders@lifetools.com?subject=Life%20Tools%20Order%3A%20Tile%20Spacers",
    inStock: true,
    rating: 5,
    reviewCount: 8,
  },
  {
    id: "4",
    slug: "manual-tile-cutter-24in",
    name: "24 in Manual Tile Cutter",
    brand: "Life Tools",
    shortDescription: "Precision scoring and snapping for ceramic tile.",
    description:
      "Heavy-duty 24 in manual tile cutter with tungsten carbide scoring wheel. Cuts ceramic and porcelain tile up to 24 in with a clean, straight edge. Includes adjustable angle guide for miter cuts.",
    priceCents: 8999,
    compareAtCents: 10999,
    imageUrl: "https://images.unsplash.com/photo-1620641622450-d2e3a3aa88d0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1620641622450-d2e3a3aa88d0?w=1000&q=80",
    ],
    paymentLink: "mailto:orders@lifetools.com?subject=Life%20Tools%20Order%3A%20Tile%20Cutter",
    badge: "Sale",
    inStock: true,
    rating: 4.8,
    reviewCount: 21,
  },
  {
    id: "5",
    slug: "rubber-grout-float",
    name: "Rubber Grout Float",
    brand: "Life Tools",
    shortDescription: "Smooth, even grout application for any tile job.",
    description:
      "Durable rubber float with comfortable handle. Designed for smooth, even grout application on floor and wall tile joints without scratching the surface.",
    priceCents: 1299,
    imageUrl: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1000&q=80",
    ],
    paymentLink: "mailto:orders@lifetools.com?subject=Life%20Tools%20Order%3A%20Grout%20Float",
    inStock: true,
    rating: 4.6,
    reviewCount: 9,
  },
  {
    id: "6",
    slug: "diamond-hole-saw-set",
    name: "Diamond Hole Saw Set (6 pcs)",
    brand: "Life Tools",
    shortDescription: "Clean holes for plumbing and fixtures in tile.",
    description:
      "Set of 6 diamond-coated hole saws in common sizes for cutting clean holes in ceramic and porcelain tile for pipes, fixtures, and outlets.",
    priceCents: 3499,
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1000&q=80",
    ],
    paymentLink: "mailto:orders@lifetools.com?subject=Life%20Tools%20Order%3A%20Hole%20Saw%20Set",
    inStock: true,
    rating: 4.7,
    reviewCount: 15,
  },
  {
    id: "7",
    slug: "tile-suction-cup-lifter",
    name: "Tile Suction Cup Lifter",
    brand: "Life Tools",
    shortDescription: "Safer handling for large format tile.",
    description:
      "Heavy-duty suction cup lifter rated for large format tile and slabs. Makes carrying and placing big tiles safer and easier for one or two installers.",
    priceCents: 2199,
    imageUrl: "https://images.unsplash.com/photo-1581091870621-3e5d3b5b6b5b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1581091870621-3e5d3b5b6b5b?w=1000&q=80",
    ],
    paymentLink: "mailto:orders@lifetools.com?subject=Life%20Tools%20Order%3A%20Suction%20Lifter",
    inStock: true,
    rating: 4.4,
    reviewCount: 6,
  },
];

export function formatPrice(cents: number) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

// Carousel banners - each image should be 800x350 (or the same aspect ratio).
// The carousel container fills the brown/dark area edge-to-edge, matching
// the reference layout. Max 3 slides are shown, auto-advancing.
export type Banner = {
  id: string;
  imageUrl: string;
  alt: string;
  link?: string;
};

export const banners: Banner[] = [
  {
    id: "b1",
    imageUrl: "/banner-1.jpg",
    alt: "Life Tools promotional banner 1",
    link: "/#products",
  },
  {
    id: "b2",
    imageUrl: "/banner-2.jpg",
    alt: "Life Tools promotional banner 2",
    link: "/#products",
  },
  {
    id: "b3",
    imageUrl: "/banner-3.jpg",
    alt: "Life Tools promotional banner 3",
    link: "/#products",
  },
];
