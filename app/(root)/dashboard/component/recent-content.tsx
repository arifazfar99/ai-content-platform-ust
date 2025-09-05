import RecentContentCard from "@/components/recent-content-card";
import React from "react";

const DUMMY_RECENT = [
  {
    id: "c1",
    title: "HydraGlow Moisturizer",
    image: "/images/skincare/hydraglow-moisturizer.webp",
    type: "image",
  },
  {
    id: "c2",
    title: "Purifying Foam Cleanser",
    image: "/images/skincare/purifying-foam-cleanser.webp",
    type: "image",
  },
  {
    id: "c3",
    title: "Revitalizing Night Serum",
    image: "/images/skincare/revitalizing-night-serum.webp",
    type: "image",
  },
];

const RecentContentSection = () => {
  return (
    <section>
      <h1 className="text-xl font-semibold mb-4">Recent Content</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DUMMY_RECENT.map((content) => (
          <RecentContentCard key={content.id} content={content} />
        ))}
      </div>
    </section>
  );
};

export default RecentContentSection;
