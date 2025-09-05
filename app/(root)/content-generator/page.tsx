"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { DUMMY_SKINCARE_PRODUCTS } from "@/lib/products";
import {
  FileText,
  Film,
  ImageIcon,
  Info,
  Lightbulb,
  Loader2,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ContentGeneratorPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [contentType, setContentType] = useState<"text" | "image" | "video">(
    "text"
  );
  const [objective, setObjective] = useState<string>("");
  const [targetAudience, setTargetAudience] = useState<string>("");
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedContent(null);
    // Call your AI generation API here with {selectedProduct, contentType, objective, targetAudience, prompt}
    setTimeout(() => {
      if (contentType === "text") {
        setGeneratedContent(
          `✨ Generated ${objective} content for ${targetAudience}: \n\n${prompt}`
        );
      } else if (contentType === "image") {
        setGeneratedContent("/images/skincare/generated-sample.webp"); // fake image path
      } else if (contentType === "video") {
        setGeneratedContent("/videos/generated-sample.mp4"); // fake video path
      }
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">Content Generator</h1>
          <p className="mt-2">Generate AI-powered content for your products</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg">
        <div className="p-6 border-b border-border">
          <h2 className="font-semibold">Generate New Content</h2>
        </div>
        <div className="p-6 space-y-6">
          {/* PRODUCT SELECT */}
          <div>
            <Label className="mb-3">Select Product</Label>
            <Select value={selectedProduct} onValueChange={setSelectedProduct}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a product" />
              </SelectTrigger>
              <SelectContent>
                {DUMMY_SKINCARE_PRODUCTS.map((product) => (
                  <SelectItem key={product.id} value={product.id}>
                    {product.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* CONTENT TYPE */}
          <div>
            <Label className="mb-3">Content Type</Label>
            <div className="flex flex-wrap gap-3">
              <Button
                type="button"
                onClick={() => setContentType("text")}
                variant={contentType === "text" ? "default" : "outline"}
              >
                <FileText size={18} className="mr-2" />
                Text
              </Button>
              <Button
                type="button"
                onClick={() => setContentType("image")}
                variant={contentType === "image" ? "default" : "outline"}
              >
                <ImageIcon size={18} className="mr-2" />
                Image
              </Button>
              <Button
                type="button"
                onClick={() => setContentType("video")}
                variant={contentType === "video" ? "default" : "outline"}
              >
                <Film size={18} className="mr-2" />
                Video
              </Button>
            </div>
          </div>

          {/* CONTENT TONE */}
          <div>
            <Label className="mb-3">Content Tone</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Professional", "Casual", "Ethusiastic", "Informative"].map(
                (obj) => (
                  <Button
                    key={obj}
                    type="button"
                    onClick={() => setObjective(obj)}
                    variant={objective === obj ? "default" : "outline"}
                    className="justify-start"
                  >
                    {obj === "Professional" && (
                      <Target size={18} className="mr-2" />
                    )}
                    {obj === "Casual" && <Users size={18} className="mr-2" />}
                    {obj === "Ethusiastic" && (
                      <FileText size={18} className="mr-2" />
                    )}
                    {obj === "Informative" && (
                      <Info size={18} className="mr-2" />
                    )}
                    {obj}
                  </Button>
                )
              )}
            </div>
          </div>

          {/* CONTENT OBJECTIVE */}
          <div>
            <Label className="mb-3">Content Objective</Label>
            <div className="grid grid-cols-3 gap-3">
              {["Awareness", "Engagement", "Conversions"].map((obj) => (
                <Button
                  key={obj}
                  type="button"
                  onClick={() => setObjective(obj)}
                  variant={objective === obj ? "default" : "outline"}
                  className="justify-start"
                >
                  {obj === "Awareness" && <Target size={18} className="mr-2" />}
                  {obj === "Engagement" && <Users size={18} className="mr-2" />}
                  {obj === "Conversions" && (
                    <FileText size={18} className="mr-2" />
                  )}
                  {obj}
                </Button>
              ))}
            </div>
          </div>

          {/* TARGET AUDIENCE */}
          <div>
            <Label className="block text-sm font-medium mb-1">
              Target Audience
            </Label>
            <Input
              type="text"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              className="w-full p-3 border border-input rounded-md bg-background"
              placeholder="e.g. Young adults interested in skincare"
            />
          </div>

          <div>
            <Label className="block text-sm font-medium mb-1" htmlFor="prompt">
              Prompt / Brief
            </Label>
            <div className="relative">
              <Textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={`Describe what ${contentType} content you want to generate...`}
                rows={4}
              />
              <div className="absolute right-3 bottom-3">
                <Button
                  type="button"
                  onClick={handleGenerate}
                  disabled={
                    isGenerating ||
                    !prompt.trim() ||
                    !selectedProduct ||
                    !objective
                  }
                >
                  {isGenerating ? (
                    <>
                      <Loader2 size={18} className="mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles size={18} className="mr-2" />
                      Generate
                    </>
                  )}
                </Button>
              </div>
            </div>
            <div className="flex items-center mt-2 space-x-2">
              <Lightbulb size={15}/>
              <p className="text-xs">
                The more specific your instructions, the better the results.
                Include key selling points, target audience details, specific
                features to highlight, or any campaign-specific messaging.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* GENERATED CONTENT PREVIEW */}
      {generatedContent && (
        <div className="mt-8 p-6 border rounded-md bg-muted">
          <h2 className="text-lg font-semibold mb-4">
            Generated Content Preview
          </h2>
          {contentType === "text" && (
            <pre className="whitespace-pre-wrap text-sm">
              {generatedContent}
            </pre>
          )}
          {contentType === "image" && (
            <Image
              src={generatedContent}
              alt="Generated"
              className="rounded-md border w-full max-w-md"
              width={200}
              height={0}
              unoptimized
            />
          )}
          {contentType === "video" && (
            <video
              src={generatedContent}
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
