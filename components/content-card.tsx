import React, { ReactNode } from "react";
import { Card, CardContent } from "./ui/card";

interface Props {
  icon: ReactNode;
  iconBg: string;
  title: string;
  description: string;
  value: string | number;
}

const ContentCard = ({ icon, iconBg, title, description, value }: Props) => {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div
              className={`w-10 h-10 ${iconBg} rounded-full flex items-center justify-center`}
            >
              {icon}
            </div>
            <div className="ml-3">
              <h4 className="font-medium">{title}</h4>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          <p className="font-semibold">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentCard;
