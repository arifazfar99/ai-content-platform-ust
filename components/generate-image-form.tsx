import { blobToBase64 } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Lightbulb, Loader2, Sparkles } from "lucide-react";

interface Props {
  isGenerating?: boolean;
  onSubmit: (params: { image: string; prompt: string }) => void;
}

const GenerateImageForm = ({ isGenerating, onSubmit }: Props) => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || !image) return;

    const res = await blobToBase64(image);
    const imageBase64 = res.split(",")[1];

    onSubmit({
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
              disabled={isGenerating || !prompt.trim()}
              variant={"default"}
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

export default GenerateImageForm;
