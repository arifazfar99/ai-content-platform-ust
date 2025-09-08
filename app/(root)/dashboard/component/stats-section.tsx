import StatCard from "@/components/stat-card";
import { BarChart3, FileText, GalleryVertical, Package } from "lucide-react";
import React from "react";

const STATS = [
  {
    title: "Total Posts This Month",
    value: 10,
    icon: <FileText size={20} className="text-red-600" />,
    trendValue: "18%",
    trendDirection: "up",
    iconBg: "bg-red-100",
  },
  {
    title: "Content Generated This Month",
    value: 24,
    icon: <GalleryVertical size={20} className="text-purple-600" />,
    trendValue: "18%",
    trendDirection: "up",
    iconBg: "bg-purple-100",
  },
  {
    title: "Total Product",
    value: 3,
    icon: <Package size={20} className="text-blue-600" />,
    trendValue: "12%",
    trendDirection: "up",
    iconBg: "bg-blue-100",
  },
  {
    title: "Engagement Summary",
    value: 219,
    icon: <BarChart3 size={20} className="text-amber-600" />,
    trendValue: "7%",
    trendDirection: "down",
    iconBg: "bg-amber-100",
  },
];

const StatsSection = () => {
  return (
    <section>
      <h1 className="text-xl font-semibold mb-4">Quick Stats</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((stat) => (
          <StatCard
            key={stat.title}
            iconBg={stat.iconBg}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trendValue={stat.trendValue}
            trendDirection={stat.trendDirection as "up" | "down"}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
