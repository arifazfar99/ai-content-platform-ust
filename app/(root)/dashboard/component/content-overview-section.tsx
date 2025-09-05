import ContentCard from "@/components/content-card";
import { FileImage, FileText } from "lucide-react";
import React from "react";

const CONTENT = [
  {
    title: "Text Content",
    description: "Captions, descriptions",
    value: "12",
    icon: <FileText size={20} className="text-blue-600" />,
    iconBg: "bg-blue-100",
  },
  {
    title: "Image Content",
    description: "Posts, banners",
    value: "8",
    icon: <FileImage size={20} className="text-purple-600" />,
    iconBg: "bg-purple-100",
  },
  {
    title: "Video Content",
    description: "Reels, ads",
    value: "4",
    icon: <FileText size={20} className="text-amber-600" />,
    iconBg: "bg-amber-100",
  },
];

const ContentOverviewSection = () => {
  return (
    <section>
      <h1 className="text-xl font-semibold mb-4">Content Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CONTENT.map((ctn) => (
          <ContentCard
            key={ctn.title}
            title={ctn.title}
            description={ctn.description}
            value={ctn.value}
            icon={ctn.icon}
            iconBg={ctn.iconBg}
          />
        ))}
      </div>
    </section>
  );
};

export default ContentOverviewSection;
