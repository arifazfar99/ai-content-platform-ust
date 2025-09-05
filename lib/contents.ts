export interface GeneratedContent {
  id: string;
  productId: string;
  content: string;
  contentType: "text" | "image" | "video";
  createdAt: string;
}

export const DUMMY_GENERATED_CONTENT: GeneratedContent[] = [
  {
    id: "gc1",
    productId: "p1", // Rose Glow Serum
    content:
      "✨ Unlock radiant skin with our Rose Glow Serum! Perfect for daily hydration and glowing confidence. 🌹✨",
    contentType: "text",
    createdAt: "2025-09-01T10:30:00Z",
  },
  {
    id: "gc2",
    productId: "p2", // Aloe Hydration Cream
    content: "/images/skincare/generated-sample.webp",
    contentType: "image",
    createdAt: "2025-09-02T14:45:00Z",
  },
  {
    id: "gc3",
    productId: "p3", // Vitamin C Brightening Cleanser
    content: "/videos/generated-sample1.mp4",
    contentType: "video",
    createdAt: "2025-09-03T09:00:00Z",
  },
  {
    id: "gc4",
    productId: "p1", // Rose Glow Serum
    content:
      "🌟 Did you know? 92% of users saw improved hydration in just 2 weeks with Rose Glow Serum!",
    contentType: "text",
    createdAt: "2025-09-03T15:20:00Z",
  },
  {
    id: "gc5",
    productId: "p2", // Aloe Hydration Cream
    content: "/images/skincare/generated-sample.webp",
    contentType: "image",
    createdAt: "2025-09-03T18:10:00Z",
  },
];