import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, ImageIcon, Video } from "lucide-react";
import React from "react";
import NextImage from "next/image";

const RecentContentSection = () => {
  return (
    <section>
      <h1 className="text-xl font-semibold mb-4">Recent Content</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Image Content */}
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-1">
              <ImageIcon className="h-4 w-4 text-muted-foreground" /> Image
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-40 w-full rounded-lg overflow-hidden bg-muted">
              <NextImage
                src="/content/image1.jpg"
                alt="Generated Image"
                fill
                className="object-cover"
              />
            </div>
          </CardContent>
          <CardFooter>
            <p className="mt-2 text-xs text-muted-foreground">
              Generated 2h ago
            </p>
          </CardFooter>
        </Card>

        {/* Video Content */}
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-1">
              <Video className="h-4 w-4 text-muted-foreground" /> Video
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-40 w-full rounded-lg overflow-hidden bg-muted flex items-center justify-center">
              <NextImage
                src="/content/video-thumb.png"
                alt="Generated Video"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-black/60 flex items-center justify-center">
                  <Video className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className="mt-2 text-xs text-muted-foreground">
              Generated yesterday
            </p>
          </CardFooter>
        </Card>

        {/* Text Snippet */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-1">
              <FileText className="h-4 w-4 text-muted-foreground" /> Text
              Snippet
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 w-full overflow-hidden">
              <div className="rounded-lg border bg-muted p-3 text-sm max-h-32 overflow-hidden">
                &quot;Boost your brand visibility with our AI-powered content
                generator. Create posts that resonate with your audience in
                seconds.&quot;
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className="mt-2 text-xs text-muted-foreground">
              Generated 3d ago
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default RecentContentSection;
