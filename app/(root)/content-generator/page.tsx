"use client";

import GenerateImageForm from "@/components/generate-image-form";
import GenerateTextForm from "@/components/generate-text-form";
import GenerateVideoForm from "@/components/generate-video-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FileText, Film, ImageIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ContentGeneratorPage = () => {
  const [contentType, setContentType] = useState<"text" | "image" | "video">(
    "text"
  );
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [generatedContent, setGeneratedContent] = useState<any | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleGenerate = async (input: any) => {
    setLoading(true);

    try {
      console.log("POST /api/generate-text");
      if (contentType === "text") {
        const res = await fetch("api/generate-text", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            image: input.image,
            tone: input.tone,
            objective: input.objective,
            targetAudience: input.targetAudience,
            prompt: input.prompt,
          }),
        });

        const data = await res.json();
        if (data.result) {
          setGeneratedContent(data);
          console.log("data", data);
        }
      } else if (contentType === "image") {
        console.log("POST /api/generate-image");

        const res = await fetch("api/generate-image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            image: input.image,
            prompt: input.prompt,
          }),
        });

        const data = await res.json();
        if (data) {
          setGeneratedContent(data);
          console.log("data", data);
        }
      } else if (contentType === "video") {
        console.log("POST /api/generate-video");

        const res = await fetch("api/generate-video", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            image: input.image,
            prompt: input.prompt,
          }),
        });

        const data = await res.json();
        if (data.success && data.video) {
          console.log("data", data);
          setGeneratedContent(data);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">Generate New Content</h1>
          <p className="mt-2">Generate AI-powered content for your products</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg">
        <div className="flex items-center justify-between p-6 border-b border-border">
          {/* <h2 className="font-semibold">Generate New Content</h2> */}
          <div className="flex items-center">
            <Label className="mr-3">Content Type: </Label>
            <div className="flex flex-wrap gap-3">
              <Button
                type="button"
                onClick={() => setContentType("text")}
                variant={contentType === "text" ? "default" : "outline"}
              >
                <FileText size={18} className="mr-1" />
                Text
              </Button>
              <Button
                type="button"
                onClick={() => setContentType("image")}
                variant={contentType === "image" ? "default" : "outline"}
              >
                <ImageIcon size={18} className="mr-1" />
                Image
              </Button>
              <Button
                type="button"
                onClick={() => setContentType("video")}
                variant={contentType === "video" ? "default" : "outline"}
              >
                <Film size={18} className="mr-1" />
                Video
              </Button>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-6">
          {contentType === "text" && (
            <GenerateTextForm
              isGenerating={loading}
              onSubmit={(data) => handleGenerate(data)}
            />
          )}

          {contentType === "image" && (
            <GenerateImageForm
              isGenerating={loading}
              onSubmit={(data) => handleGenerate(data)}
            />
          )}

          {contentType === "video" && (
            <GenerateVideoForm
              isGenerating={loading}
              onSubmit={(data) => handleGenerate(data)}
            />
          )}
        </div>
      </div>

      {/* GENERATED CONTENT PREVIEW */}
      {generatedContent && (
        <div className="mt-8 p-6 border rounded-md bg-muted">
          <h2 className="text-lg font-semibold mb-4">
            Generated Content Preview
          </h2>
          {generatedContent.result && (
            <pre className="whitespace-pre-wrap text-sm">
              {generatedContent.result}
            </pre>
          )}

          {generatedContent.images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {generatedContent.images.map((src: string, idx: number) => (
                <Image
                  key={idx}
                  src={src}
                  alt={`Generated ${idx + 1}`}
                  className="rounded-md border w-full max-w-md"
                  width={200}
                  height={0}
                  unoptimized
                />
              ))}
            </div>
          )}

          {generatedContent.video && (
            <video
              src={generatedContent.video}
              controls
              className="rounded-md border w-full max-w-md"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ContentGeneratorPage;
