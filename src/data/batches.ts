export type BatchStatus = "catalogue" | "upcoming" | "available" | "sold-out";
export type BatchCategory = "fresh" | "floral" | "woody" | "oud";
export type BatchAudience = "unisex" | "male" | "female";

export type Batch = {
  slug: string;
  name: string;
  status: BatchStatus;
  category?: BatchCategory;
  audience?: BatchAudience;
  shortDescription: string;
  description: string;
  inspiredBy?: string;
  notes: string[];
  size?: string;
  price?: number;
  originalPrice?: number;
  currency?: "PKR";
  sku?: string;
  image?: string;
  imageAlt?: string;
  published: boolean;
};

// Prices and SKUs come from data/HN_Scents_Price_List (1).xlsx, rows 6–11.
// Stock and release status are unconfirmed, so standalone product pages remain
// unpublished. Audience and scent styles use only clear supplied evidence.
export const batches: Batch[] = [
  {
    slug: "gilded", name: "Gilded", status: "catalogue", category: "oud",
    shortDescription: "Gilded by H&N Scents.",
    description: "Gilded by H&N Scents, inspired by Golden Oud.",
    inspiredBy: "Golden Oud", notes: ["Saffron", "Black pepper", "Oud"],
    size: "50ml", price: 4299, originalPrice: 4699, currency: "PKR", sku: "HN-001",
    image: "/batches/gilded.png",
    imageAlt: "Gilded perfume bottle with wooden cap beside its H&N Scents box.",
    published: false
  },
  {
    slug: "desire", name: "Desire", status: "catalogue", category: "fresh",
    shortDescription: "Desire by H&N Scents.",
    description: "Desire by H&N Scents, inspired by Dunhill Desire Red.",
    inspiredBy: "Dunhill Desire Red", notes: ["Apple", "Neroli", "Teak wood"],
    size: "50ml", price: 3750, originalPrice: 4499, currency: "PKR", sku: "HN-002",
    image: "/batches/desire.png",
    imageAlt: "Desire perfume bottle with wooden cap beside its H&N Scents box.",
    published: false
  },
  {
    slug: "billion", name: "Billion", status: "catalogue", category: "woody",
    shortDescription: "Billion by H&N Scents.",
    description: "Billion by H&N Scents, inspired by One Million.",
    inspiredBy: "One Million", notes: ["Blood mandarin", "Cinnamon", "Leather"],
    size: "50ml", price: 3850, originalPrice: 4499, currency: "PKR", sku: "HN-003",
    image: "/batches/billion.png",
    imageAlt: "Billion perfume bottle with wooden cap beside its H&N Scents box.",
    published: false
  },
  {
    slug: "nocturne", name: "Nocturne", status: "catalogue",
    shortDescription: "Nocturne by H&N Scents.",
    description: "Nocturne by H&N Scents, inspired by Black Opium.",
    inspiredBy: "Black Opium", notes: [],
    size: "50ml", price: 3850, originalPrice: 4499, currency: "PKR", sku: "HN-004",
    image: "/batches/nocturne.png",
    imageAlt: "Nocturne perfume bottle with wooden cap in an open H&N Scents gift box.",
    published: false
  },
  {
    slug: "victor", name: "Victor", status: "catalogue", category: "fresh",
    shortDescription: "Victor by H&N Scents.",
    description: "Victor by H&N Scents, inspired by Invictus.",
    inspiredBy: "Invictus", notes: ["Sea notes", "Grapefruit", "Ambergris"],
    size: "50ml", price: 3850, originalPrice: 4499, currency: "PKR", sku: "HN-005",
    image: "/batches/victor.png",
    imageAlt: "Victor perfume bottle with wooden cap beside its H&N Scents box.",
    published: false
  },
  {
    slug: "office-men-t", name: "Office Men T", status: "catalogue", audience: "male",
    shortDescription: "Office Men T by H&N Scents.",
    description: "Office Men T, 50% Oil Edition by H&N Scents.",
    notes: [], price: 4299, originalPrice: 4499, currency: "PKR", sku: "HN-006",
    image: "/batches/office-men-t.jpg",
    imageAlt: "Office Men T perfume bottle with wooden cap in an open H&N Scents presentation box.",
    published: false
  }
];
