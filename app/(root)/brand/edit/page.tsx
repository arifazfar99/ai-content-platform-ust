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
import { Separator } from "@/components/ui/separator";
import { DUMMY_SKINCARE_BRAND } from "@/lib/brands";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditBrandPage = () => {
  const router = useRouter();
  const brand = DUMMY_SKINCARE_BRAND[0];

  const [formData, setFormData] = useState({
    name: brand.name || "",
    logo: brand.logo || "",
    website: brand.website || "",
    category: brand.category || "",
    email: brand.email || "",
    phone: brand.phone || "",
    colors: brand.colors || { primary: "", secondary: "" },
    fonts: brand.fonts || { primary: "", secondary: "" },
    socialMediaChannels: brand.socialMediaChannels || {
      facebook: "",
      instagram: "",
      tiktok: "",
      twitter: "",
    },
  });

  if (!brand) {
    return <p>Brand not found</p>;
  }

  const handleChange = (key: string, value: string | File) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleFontChange = (key: "primary" | "secondary", value: string) => {
    setFormData((prev) => ({
      ...prev,
      colors: {
        ...prev.colors,
        [key]: value,
      },
    }));
  };

  const handleColorChange = (key: "primary" | "secondary", value: string) => {
    setFormData((prev) => ({
      ...prev,
      fonts: {
        ...prev.fonts,
        [key]: value,
      },
    }));
  };

  const handleSocialMediaChange = (
    key: "facebook" | "instagran" | "tiktok" | "twitter",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      socialMediaChannels: {
        ...prev.socialMediaChannels,
        [key]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated brand data:", formData);
    // Later: save to DB
  };

  const handleSave = () => {
    router.push("/brand");
  };

  const handleCancel = () => {
    router.push("/brand");
  };

  return (
    <div className="space-y-9">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Brands</h1>
      </div>

      <div className="border rounded-md">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between p-6">
            <h1 className="text-xl font-semibold">Edit Brand</h1>
            <div className="flex gap-2">
              <Button variant={"default"} onClick={handleSave}>
                Save
              </Button>
              <Button variant={"outline"} onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </div>

          <Separator />

          {/* Section 1: Basic Info */}
          <div className="space-y-4 px-6 pt-6">
            <h2 className="font-semibold text-lg">Basic Info</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Brand Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter brand name"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="logo">Logo</Label>
                <Input
                  type="file"
                  id="logo"
                  name="logo"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleChange("logo", file);
                    }
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  name="website"
                  placeholder="https://brand.com"
                  value={formData.website}
                  onChange={(e) => handleChange("website", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Industry / Category</Label>
                <Select
                  defaultValue={formData.category}
                  onValueChange={(value) => handleChange("category", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fnb">Food & Beverage</SelectItem>
                    <SelectItem value="fashion">Fashion</SelectItem>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                    <SelectItem value="skincare">Skincare & Beauty</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Business Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="brand@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+60 123-456789"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Brand Identity */}
          <div className="space-y-4 px-6 pt-6">
            <h2 className="font-semibold text-lg">Brand Identity</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="primary-font">Primary Font</Label>
                  <Input
                    id="primary-font"
                    name="primary-font"
                    placeholder="Montserrat"
                    value={formData.fonts.primary}
                    onChange={(e) =>
                      handleFontChange("primary", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="secondary-font">Secondary Font</Label>
                  <Input
                    id="secondary-font"
                    name="secondary-font"
                    placeholder="Montserrat"
                    value={formData.fonts.secondary}
                    onChange={(e) =>
                      handleFontChange("secondary", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="primary-color"
                      name="primary-color"
                      type="color"
                      className="w-12 p-1"
                      value={formData.colors.primary}
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
                  <div className="flex items-center gap-2">
                    <Input
                      id="secondary-color"
                      name="secondary-color"
                      type="color"
                      className="w-12 p-1"
                      value={formData.colors.secondary}
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
            </div>
          </div>

          {/* Social Media Channels */}
          <div className="space-y-4 px-6 py-6">
            <h2 className="font-semibold text-lg">Social Media Profiles</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  name="instagram"
                  placeholder="Instagram handle without @"
                  value={formData.socialMediaChannels.instagram}
                  onChange={(e) =>
                    handleSocialMediaChange("instagran", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  id="twitter"
                  name="twitter"
                  placeholder="Twitter handle without @"
                  value={formData.socialMediaChannels.twitter}
                  onChange={(e) =>
                    handleSocialMediaChange("twitter", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="facebook">Facebbok</Label>
                <Input
                  id="facebook"
                  name="facebook"
                  placeholder="Facebook page name"
                  value={formData.socialMediaChannels.facebook}
                  onChange={(e) =>
                    handleSocialMediaChange("facebook", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tiktok">Tiktok</Label>
                <Input
                  id="tiktok"
                  name="tiktok"
                  placeholder="Tiktok handle without @"
                  value={formData.socialMediaChannels.tiktok}
                  onChange={(e) =>
                    handleSocialMediaChange("tiktok", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBrandPage;
