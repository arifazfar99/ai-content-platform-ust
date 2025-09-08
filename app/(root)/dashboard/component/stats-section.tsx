import StatCard from "@/components/stat-card";
import { BarChart3, FileText, GalleryVertical, Package } from "lucide-react";
import React from "react";

const STATS = [
  {
    title: "Total Posts This Month",
    value: 10,
    icon: <FileText size={20} className="text-red-100" />,
    iconBg: "bg-red-600",
    bgColor: "bg-red-100",
    borderColor: "border-red-100",
    trendValue: "18%",
    trendDirection: "up",
  },
  {
    title: "Content Generated This Month",
    value: 24,
    icon: <GalleryVertical size={20} className="text-purple-100" />,
    iconBg: "bg-purple-600",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-100",
    trendValue: "18%",
    trendDirection: "up",
  },
  {
    title: "Total Product",
    value: 3,
    icon: <Package size={20} className="text-blue-100" />,
    iconBg: "bg-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-100",
    trendValue: "12%",
    trendDirection: "up",
  },
  {
    title: "Engagement Summary",
    value: 219,
    icon: <BarChart3 size={20} className="text-amber-100" />,
    iconBg: "bg-amber-600",
    bgColor: "bg-amber-100",
    borderColor: "border-amber-100",
    trendValue: "7%",
    trendDirection: "down",
  },
];

const StatsSection = () => {
  return (
    <section>
      <h1 className="text-xl font-semibold mb-4">Quick Stats</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {STATS.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            iconBg={stat.iconBg}
            borderColor={stat.borderColor}
            bgColor={stat.bgColor}
            trendValue={stat.trendValue}
            trendDirection={stat.trendDirection as "up" | "down"}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
