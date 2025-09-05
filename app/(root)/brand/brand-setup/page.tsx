"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function BrandSetupPage() {
  const [logo, setLogo] = useState<File | null>(null);
  const [primaryColor, setPrimaryColor] = useState<string>("#000000");
  const [secondaryColor, setSecondaryColor] = useState<string>("#000000");

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setLogo(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save brand data to DB
    console.log("Submitting brand setup...");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Setup New Brand</CardTitle>
        <CardDescription>
          Fill up the details below to add new brand.
        </CardDescription>
      </CardHeader>
      <Separator />

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Basic Info */}
          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Basic Info</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="brandName">Brand Name</Label>
                <Input
                  id="brandName"
                  name="brandName"
                  placeholder="Enter brand name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="logo">Logo</Label>
                <Input
                  type="file"
                  id="logo"
                  name="logo"
                  accept="image/*"
                  onChange={handleLogoUpload}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  name="website"
                  placeholder="https://brand.com"
                />
              </div>
              <div className="space-y-2">
                <Label>Industry / Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fnb">Food & Beverage</SelectItem>
                    <SelectItem value="fashion">Fashion</SelectItem>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                    <SelectItem value="travel">Skincare & Beauty</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Brand Description</Label>
                <Textarea />
              </div>
            </div>
          </div>

          <Separator />

          {/* Section 2: Business Info */}
          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Business Info</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Business Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="brand@email.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" placeholder="+60 123-456789" />
              </div>
            </div>
          </div>

          <Separator />

          {/* Section 3: Brand Guidelines */}
          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Brand Guidelines</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="primary-font">Primary Font</Label>
                <Input
                  id="primary-font"
                  name="primary-font"
                  placeholder="Montserrat"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="secondary-font">Secondary Font</Label>
                <Input
                  id="secondary-font"
                  name="secondary-font"
                  placeholder="Montserrat"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="primary-color">Primary Color</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="primary-color"
                    name="primary-color"
                    type="color"
                    className="w-12 p-1"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                  />
                  <Input
                    type="text"
                    className="flex-1"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
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
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                  />
                  <Input
                    type="text"
                    className="flex-1"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Section 4: Social Media */}
          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Social Media Channels</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  name="instagram"
                  placeholder="Instagram handle without @"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  id="twitter"
                  name="twitter"
                  placeholder="Twitter handle without @"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="facebook">Facebbok</Label>
                <Input
                  id="facebook"
                  name="facebook"
                  placeholder="Facebook page name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tiktok">Tiktok</Label>
                <Input
                  id="tiktok"
                  name="tiktok"
                  placeholder="Tiktok handle without @"
                />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">
          Save Brand
        </Button>
      </CardFooter>
    </Card>
  );
}
