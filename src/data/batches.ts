export type BatchStatus = "upcoming" | "available" | "sold-out";

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

// Add each real release here. Keep published false until the owner confirms
// every product detail, image, availability and order path.
export const batches: Batch[] = [];
