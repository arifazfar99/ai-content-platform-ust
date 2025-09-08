import { blobToBase64 } from "@/lib/utils";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Image from "next/image";
import { Button } from "./ui/button";
import { Loader2, Sparkles } from "lucide-react";

interface Props {
  isGenerating?: boolean;
  onSubmit: (params: { image: string; prompt: string }) => void;
}

const ACTION = [
  "Rotating slowly with water droplets",
  "Placed on a stone surface with mist effect",
  "Falling water splash around the product",
  "Soft glow appearing behind the product",
];

const STYLE = [
  "Minimalist commercial, soft lighting",
  "Luxury skincare ad, cinematic lighting",
  "Natural look, outdoor with greenery",
  "High-fashion editorial with dramatic shadows",
];

const CAMERA = [
  "Close-up dolly shot",
  "Slow pan across product surface",
  "360-degree rotation shot",
  "Eye-level still shot",
];

const COMPOSITION = [
  "Single-shot with product centered",
  "Product with soft-focus background",
  "Wide shot on vanity with props",
  "Two-shot with product and model",
];

const FOCUS = [
  "Shallow focus highlighting product details",
  "Macro lens showing product texture",
  "Wide-angle lens capturing environment",
  "Soft focus dreamy effect",
];

const AMBIANCE = [
  "Bright white tones with natural daylight",
  "Warm golden hour tones",
  "Cool blue spa-like tones",
  "Luxury feel with dark background and spotlight",
];

const GenerateVideoForm = ({ isGenerating, onSubmit }: Props) => {
  const [formData, setFormData] = useState({
    subject: "",
    action: "",
    style: "",
    camera: "",
    composition: "",
    focus: "",
    ambiance: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (!image) return;

    e.preventDefault();

    const { subject, action, style, camera, composition, focus, ambiance } =
      formData;

    const finalPrompt = `
      Subject: ${subject}.
      Action: ${action}.
      Style: ${style}.
      Camera positioning and motion: ${camera}.
      Composition: ${composition}.
      Focus and lens effects: ${focus}.
      Ambiance: ${ambiance}.
    `.trim();

    const res = await blobToBase64(image);
    const imageBase64 = res.split(",")[1];

    onSubmit({
      prompt: finalPrompt,
      image: imageBase64,
    });
  };

  const disabledBtn =
    isGenerating ||
    !image ||
    !formData.action ||
    !formData.ambiance ||
    !formData.camera ||
    !formData.composition ||
    !formData.focus ||
    !formData.style ||
    !formData.subject;

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
      {/* Subject */}
      <div className="space-y-2">
        <Label>Subject</Label>
        <Input
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          placeholder="Skincare product bottle on a clean surface"
        />
      </div>

      {/* Action */}
      <div className="space-y-2">
        <Label>Action</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ACTION.map((item) => (
            <Button
              key={item}
              type="button"
              onClick={() => handleChange("action", item)}
              variant={formData.action === item ? "default" : "outline"}
              className="justify-start"
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      {/* Style */}
      <div className="space-y-2">
        <Label>Style</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {STYLE.map((item) => (
            <Button
              key={item}
              type="button"
              onClick={() => handleChange("style", item)}
              variant={formData.style === item ? "default" : "outline"}
              className="justify-start"
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      {/* Camera */}
      <div className="space-y-2">
        <Label>Camera Position & Motion</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CAMERA.map((item) => (
            <Button
              key={item}
              type="button"
              onClick={() => handleChange("camera", item)}
              variant={formData.camera === item ? "default" : "outline"}
              className="justify-start"
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      {/* Composition */}
      <div className="space-y-2">
        <Label>Composition</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {COMPOSITION.map((item) => (
            <Button
              key={item}
              type="button"
              onClick={() => handleChange("composition", item)}
              variant={formData.composition === item ? "default" : "outline"}
              className="justify-start"
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      {/* Focus */}
      <div className="space-y-2">
        <Label>Focus & Lens Effects</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {FOCUS.map((item) => (
            <Button
              key={item}
              type="button"
              onClick={() => handleChange("focus", item)}
              variant={formData.focus === item ? "default" : "outline"}
              className="justify-start"
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      {/* Ambiance */}
      <div className="space-y-2">
        <Label>Ambiance</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {AMBIANCE.map((item) => (
            <Button
              key={item}
              type="button"
              onClick={() => handleChange("ambiance", item)}
              variant={formData.ambiance === item ? "default" : "outline"}
              className="justify-start"
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      <Button type="submit" disabled={disabledBtn}>
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
    </form>
  );
};

export default GenerateVideoForm;
