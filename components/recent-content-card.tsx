import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  id: string;
  title: string;
  image: string;
  type: string;
}

const RecentContentCard = ({ content }: { content: Props }) => {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative">
        <Image
          src={content.image}
          alt={content.title}
          width={600}
          height={400}
          className="object-contain w-full h-50"
          unoptimized
        />
        <Badge className="absolute top-2 right-2 bg-muted-foreground/60 text-white capitalize">
          {content.type}
        </Badge>
      </div>

      <CardContent className="p-4 space-y-2">
        <h3 className="font-semibold text-sm">{content.title}</h3>
        {/* <p className="text-sm text-muted-foreground">Created {createdAt}</p>
        <div className="flex items-center text-green-600 text-sm font-medium">
          <ArrowUpRight className="w-4 h-4 mr-1" />
          {engagement}%
          </div> */}

        <div className="flex justify-between border-t pt-1">
          <Button variant="ghost" size="sm">
            Preview
          </Button>
          <Button variant="link" size="sm">
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentContentCard;
