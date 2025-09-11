"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBrandKit } from "@/context/brand-kit-context";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

const BrandKitPage = () => {
  const { formData, setFormData, saveFormData } = useBrandKit();

  const handleFontChange = (key: "primary" | "secondary", value: string) => {
    setFormData((prev) => ({
      ...prev,
      fonts: { ...prev.fonts, [key]: value },
    }));
  };

  const handleColorChange = (key: "primary" | "secondary", value: string) => {
    setFormData((prev) => ({
      ...prev,
      colors: { ...prev.colors, [key]: value },
    }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setFormData((prev) => ({
        ...prev,
        logo: file,
        logoPreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleRemoveLogo = () => {
    setFormData((prev) => ({
      ...prev,
      logo: null,
      logoPreview: null,
    }));
  };

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">Brand Kit</h1>
          <p className="mt-2">
            Generate personalized content with your brand kit
          </p>
        </div>
      </div>

      <Card>
        <CardContent>
          <form className="space-y-6">
            {/* Fonts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="primary-font">Primary Font</Label>
                <Input
                  id="primary-font"
                  placeholder="Montserrat"
                  value={formData.fonts.primary}
                  onChange={(e) => handleFontChange("primary", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="secondary-font">Secondary Font</Label>
                <Input
                  id="secondary-font"
                  placeholder="Roboto"
                  value={formData.fonts.secondary}
                  onChange={(e) =>
                    handleFontChange("secondary", e.target.value)
                  }
                />
              </div>
            </div>

            {/* Colors */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="primary-color">Primary Color</Label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    id="primary-color"
                    value={formData.colors.primary}
                    className="w-12 p-1"
                    onChange={(e) =>
                      handleColorChange("primary", e.target.value)
                    }
                  />
                  <Input
                    type="text"
                    className="flex-1"
                    value={formData.colors.primary}
                    onChange={(e) =>
                      handleColorChange("primary", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="secondary-color">Secondary Color</Label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    id="secondary-color"
                    value={formData.colors.secondary}
                    className="w-12 p-1"
                    onChange={(e) =>
                      handleColorChange("secondary", e.target.value)
                    }
                  />
                  <Input
                    type="text"
                    className="flex-1"
                    value={formData.colors.secondary}
                    onChange={(e) =>
                      handleColorChange("secondary", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            {/* Logo Upload */}
            <div className="space-y-2">
              <Label className="space-y-2">Brand Logo</Label>
              <Input
                type="file"
                id="logo"
                name="logo"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden"
              />
              <div className="relative w-32 h-32">
                <label
                  htmlFor="logo"
                  className="cursor-pointer flex items-center justify-center w-32 h-32 border-2 border-dashed rounded-md bg-muted hover:bg-accent overflow-hidden"
                >
                  {formData.logoPreview ? (
                    <Image
                      src={formData.logoPreview}
                      alt="Logo Preview"
                      width={128}
                      height={128}
                      className="object-contain rounded-md"
                    />
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      Upload Logo
                    </span>
                  )}
                </label>
                {formData.logoPreview && (
                  <button
                    type="button"
                    onClick={handleRemoveLogo}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Logo Placement */}
            <div className="space-y-2">
              <Label>Logo Placement</Label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  "Top Left",
                  "Top Right",
                  "Bottom Left",
                  "Bottom Right",
                  "Center",
                ].map((placement) => (
                  <Button
                    key={placement}
                    type="button"
                    variant={
                      formData.logoPlacement === placement
                        ? "default"
                        : "outline"
                    }
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        logoPlacement: placement,
                      }))
                    }
                  >
                    {placement}
                  </Button>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button type="button" onClick={saveFormData}>
                Save Brand Kit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BrandKitPage;
