"use client";

import ContentPreviewCard from "@/components/content-preview-card";
import FacebookPostForm from "@/components/facebook-post-form";
import InstagramPostForm from "@/components/instagram-post-form";
import TiktokPostForm from "@/components/tiktok-post-form";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DUMMY_GENERATED_CONTENT } from "@/lib/contents";
import { DUMMY_SKINCARE_PRODUCTS } from "@/lib/products";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const ContentDetailPage = () => {
  const params = useParams();
  const content = DUMMY_GENERATED_CONTENT.find((c) => c.id === params.id);

  const [selectedPlatform, setSelectedPlatform] = useState("instagram");

  if (!content) return <p>Content not found</p>;

  const product = DUMMY_SKINCARE_PRODUCTS.find(
    (p) => p.id === content.productId
  );

  if (!product) return <p>Product not found for this content</p>;

  return (
    <div className="space-y-9">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Create Post</h1>
          <p className="mt-2">Craft and schedule you next post effortlessly</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* PUBLISHING OPTIONS */}
        <div className="space-y-6">
          <Tabs
            defaultValue="instagram"
            onValueChange={(val) => setSelectedPlatform(val)}
          >
            <TabsList>
              <TabsTrigger value="instagram">Instagram</TabsTrigger>
              <TabsTrigger value="facebook">Facebook</TabsTrigger>
              <TabsTrigger value="tiktok">Tiktok</TabsTrigger>
            </TabsList>

            <div className="bg-card border border-border rounded-lg p-6">
              <TabsContent value="instagram">
                <InstagramPostForm />
              </TabsContent>

              <TabsContent value="facebook">
                <FacebookPostForm />
              </TabsContent>

              <TabsContent value="tiktok">
                <TiktokPostForm />
              </TabsContent>
            </div>
          </Tabs>
        </div>
        {/* PREVIEW */}
        <div className="space-y-6">
          <h1 className="font-semibold capitalize">
            {selectedPlatform} Content Preview
          </h1>

          {selectedPlatform === "instagram" && (
            <ContentPreviewCard
              username="IsabellaNilsson"
              location="Seebensee, Austria"
              profileImage="/images/brand/OIP.webp"
              postImage="/images/brand/OIP.webp"
              caption="A canvas painted by nature, framed by the Alps. ⛰️✨ #TravelGoals #WanderlustViews"
            />
          )}

          {selectedPlatform === "facebook" && (
            <div className="p-4 border rounded-lg bg-white shadow">
              <p>
                🌟 Discover our new product line – perfect for your skincare
                routine! 💆‍♀️✨
              </p>
              <div className="relative w-full h-64">
                <Image
                  src="/images/brand/OIP.webp"
                  alt="Facebook Preview"
                  className="rounded-lg mt-3 object-contain"
                  fill
                />
              </div>
            </div>
          )}

          {selectedPlatform === "tiktok" && (
            <div className="p-4 border rounded-lg bg-black text-white shadow">
              <video
                controls
                className="w-full rounded-lg"
                src="/videos/sample.mp4"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentDetailPage;
