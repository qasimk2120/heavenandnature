export type BatchStatus = "catalogue" | "upcoming" | "available" | "sold-out";

export type Batch = {
  slug: string;
  name: string;
  status: BatchStatus;
  collection?: string;
  shortDescription: string;
  description: string;
  size?: string;
  price?: number;
  currency?: "PKR";
  sku?: string;
  image?: string;
  imageAlt?: string;
  published: boolean;
};

// These visual entries are based on owner-supplied product photography. They
// deliberately stay unpublished until the owner confirms every release detail,
// availability and order path.
export const batches: Batch[] = [
  {
    slug: "ganymede-289",
    name: "Ganymede 289",
    status: "catalogue",
    shortDescription: "A stone-grey label, clear glass and a warm wooden cap.",
    description: "Ganymede 289 from the H&N Scents product photography collection.",
    size: "50ml",
    image: "/batches/ganymede-289.jpg",
    imageAlt: "Ganymede 289 perfume bottle in an open cream presentation box.",
    published: false
  },
  {
    slug: "les-sables-roses-237",
    name: "Les Sables Roses 237",
    status: "catalogue",
    shortDescription: "A rose-toned bottle presented against soft petals and linen.",
    description: "Les Sables Roses 237 from the H&N Scents product photography collection.",
    size: "50ml",
    image: "/batches/les-sables-roses-237.jpg",
    imageAlt: "Les Sables Roses 237 perfume bottle in an open cream presentation box with flowers.",
    published: false
  },
  {
    slug: "layton-263",
    name: "Layton 263",
    status: "catalogue",
    shortDescription: "Amber glass and a black label grounded by a deep walnut cap.",
    description: "Layton 263 from the H&N Scents product photography collection.",
    size: "50ml",
    image: "/batches/layton-263.jpg",
    imageAlt: "Layton 263 perfume bottle in an open cream presentation box.",
    published: false
  },
  {
    slug: "gris-dior-258",
    name: "Gris Dior 258",
    status: "catalogue",
    shortDescription: "A quiet silver-grey label set into transparent glass.",
    description: "Gris Dior 258 from the H&N Scents product photography collection.",
    size: "50ml",
    image: "/batches/gris-dior-258.jpg",
    imageAlt: "Gris Dior 258 perfume bottle in an open cream presentation box.",
    published: false
  },
  {
    slug: "oud-satin-mood-269",
    name: "Oud Satin Mood 269",
    status: "catalogue",
    shortDescription: "A plum label and sculpted wood cap give the bottle its night-time weight.",
    description: "Oud Satin Mood 269 from the H&N Scents product photography collection.",
    size: "50ml",
    image: "/batches/oud-satin-mood-269.jpg",
    imageAlt: "Oud Satin Mood 269 perfume bottle in an open cream presentation box.",
    published: false
  },
  {
    slug: "pacific-chill-258",
    name: "Pacific Chill 258",
    status: "catalogue",
    shortDescription: "An airy blue label set against a pale, botanical presentation.",
    description: "Pacific Chill 258 from the H&N Scents product photography collection.",
    size: "50ml",
    image: "/batches/pacific-chill-258.jpg",
    imageAlt: "Pacific Chill 258 perfume bottle in an open cream presentation box.",
    published: false
  }
];
