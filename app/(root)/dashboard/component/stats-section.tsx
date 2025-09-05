import StatCard from "@/components/stat-card";
import { BarChart3, GalleryVertical, Package } from "lucide-react";
import React from "react";

const STATS = [
  {
    title: "Total Product",
    value: 3,
    icon: <Package size={20} className="text-primary" />,
    trendValue: "12%",
    trendDirection: "up",
  },
  {
    title: "Content Generated",
    value: 24,
    icon: <GalleryVertical size={20} className="text-primary" />,
    trendValue: "18%",
    trendDirection: "up",
  },
  {
    title: "Total Engagement",
    value: 219,
    icon: <BarChart3 size={20} className="text-primary" />,
    trendValue: "7%",
    trendDirection: "down",
  },
];

const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {STATS.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          trendValue={stat.trendValue}
          trendDirection={stat.trendDirection as "up" | "down"}
        />
      ))}
    </div>
  );
};

export default StatsSection;
