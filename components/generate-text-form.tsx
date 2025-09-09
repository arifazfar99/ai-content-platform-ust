import React, { useState } from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  FileText,
  Info,
  Lightbulb,
  Loader2,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Image from "next/image";
import { blobToBase64 } from "@/lib/utils";

interface Props {
  isGenerating?: boolean;
  onSubmit: (params: {
    tone: string;
    objective: string;
    targetAudience: string;
    prompt: string;
    image: string;
  }) => void;
}

const GenerateTextForm = ({ onSubmit, isGenerating }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [tone, setTone] = useState("Professional");
  const [objective, setObjective] = useState("Engagement");
  const [targetAudience, setTargetAudience] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedProduct(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !prompt.trim() ||
      !objective ||
      !tone ||
      !targetAudience ||
      !selectedProduct
    )
      return;

    const res = await blobToBase64(selectedProduct);
    const imageBase64 = res.split(",")[1];

    onSubmit({
      tone,
      objective,
      targetAudience,
      prompt,
      image: imageBase64,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="product-upload" className="mb-3">
          Upload A Product
        </Label>
        <Input
          id="product-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>

      {preview && (
        <div className="mt-4">
          <Image
            src={preview}
            alt="Product Preview"
            width={200}
            height={200}
            className="rounded-md border"
          />
        </div>
      )}
      <div>
        <Label className="mb-3">Content Tone</Label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["Professional", "Casual", "Ethusiastic", "Informative"].map(
            (obj) => (
              <Button
                key={obj}
                type="button"
                onClick={() => setTone(obj)}
                variant={tone === obj ? "default" : "outline"}
              >
                {obj === "Professional" && (
                  <Target size={18} className="mr-2" />
                )}
                {obj === "Casual" && <Users size={18} className="mr-2" />}
                {obj === "Ethusiastic" && (
                  <FileText size={18} className="mr-2" />
                )}
                {obj === "Informative" && <Info size={18} className="mr-2" />}
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
            >
              {obj === "Awareness" && <Target size={18} className="mr-2" />}
              {obj === "Engagement" && <Users size={18} className="mr-2" />}
              {obj === "Conversions" && <FileText size={18} className="mr-2" />}
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
            placeholder={`Describe what text content you want to generate...`}
            rows={4}
          />
          <div className="absolute right-3 bottom-3">
            <Button
              type="submit"
              variant={"default"}
              disabled={
                isGenerating ||
                !prompt.trim() ||
                !objective ||
                !tone ||
                !targetAudience ||
                !selectedProduct
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
          <Lightbulb size={15} />
          <p className="text-xs">
            The more specific your instructions, the better the results. Include
            key selling points, target audience details, specific features to
            highlight, or any campaign-specific messaging.
          </p>
        </div>
      </div>
    </form>
  );
};

export default GenerateTextForm;
