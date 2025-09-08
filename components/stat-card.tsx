import React, { ReactNode } from "react";
import { Card, CardContent } from "./ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";

interface Props {
  title: string;
  value: string | number;
  icon: ReactNode;
  iconBg: string;
  trendValue: string | number;
  trendDirection: "up" | "down";
}

const StatCard = ({
  title,
  value,
  icon,
  iconBg,
  trendValue,
  trendDirection,
}: Props) => {
  const isUp = trendDirection === "up";
  const trendColor = isUp ? "text-green-500" : "text-red-500";

  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
          </div>
          <div
            className={`w-10 h-10 ${iconBg} rounded-full flex items-center justify-center`}
          >
            {icon}
          </div>
        </div>
        <div className={`mt-4 flex items-center text-sm ${trendColor}`}>
          {isUp ? (
            <TrendingUp size={16} className="mr-1" />
          ) : (
            <TrendingDown size={16} className="mr-1" />
          )}
          <span>
            {trendValue} {isUp ? "increase" : "decrease"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
