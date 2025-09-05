export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  brandId: string;
}

export const DUMMY_SKINCARE_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "HydraGlow Moisturizer",
    description: "Lightweight moisturizer infused with hyaluronic acid for all-day hydration and a radiant glow.",
    price: 89.9,
    image: "/images/skincare/hydraglow-moisturizer.webp",
    brandId: "b1",
  },
  {
    id: "p2",
    name: "Purifying Foam Cleanser",
    description: "Gentle foaming cleanser that removes impurities and makeup without stripping the skin.",
    price: 59.5,
    image: "/images/skincare/purifying-foam-cleanser.webp",
    brandId: "b1",
  },
  {
    id: "p3",
    name: "Revitalizing Night Serum",
    description: "Nourishing night serum with retinol and peptides to support skin renewal while you sleep.",
    price: 129.0,
    image: "/images/skincare/revitalizing-night-serum.webp",
    brandId: "b1",
  },
];