/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { X } from "lucide-react";
import { Brand } from "@/lib/brands";

const STEPS = [
  { value: "step1", label: "Basic Info" },
  { value: "step2", label: "Brand Guidelines" },
  { value: "step3", label: "Social Media Channels" },
  { value: "step4", label: "Review" },
];

export default function BrandSetupPage() {
  const [formData, setFormData] = useState<Brand>({
    name: "",
    logo: null,
    website: "",
    category: "",
    businessEmail: "",
    phoneNumber: "",
    primaryFont: "",
    secondaryFont: "",
    primaryColor: "#000000",
    secondaryColor: "#000000",
    instagram: "",
    twitter: "",
    facebook: "",
    tiktok: "",
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState("step1");

  const nextStep = () => {
    const idx = STEPS.findIndex((s) => s.value === step);
    if (idx < STEPS.length - 1) setStep(STEPS[idx + 1].value);
  };

  const prevStep = () => {
    const idx = STEPS.findIndex((s) => s.value === step);
    if (idx > 0) setStep(STEPS[idx - 1].value);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      const previewUrl = URL.createObjectURL(file);

      setFormData((prev) => ({
        ...prev,
        logo: file,
      }));
      setPreviewImage(previewUrl);
    }
  };

  const handleRemoveLogo = () => {
    setFormData((prev) => ({
      ...prev,
      logo: null,
    }));
    setPreviewImage(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    //  TODO: store in db
  };

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">Setup New Brand</h1>
          <p className="mt-2">Fill up the details below to add new brand.</p>
        </div>
      </div>

      <Tabs value={step} onValueChange={setStep} className="w-full">
        {/* Progress Tracker Header */}
        <TabsList className="flex w-full justify-between relative border-none shadow-none">
          {STEPS.map((s, idx) => {
            const currentIdx = STEPS.findIndex((st) => st.value === step);
            const isCompleted = idx < currentIdx;
            const isActive = step === s.value;

            return (
              <div key={s.value} className="flex items-center flex-1">
                {/* Step circle + label */}
                <div className="flex items-center gap-2">
                  <TabsTrigger
                    value={s.value}
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center border-2 z-10",
                      isCompleted
                        ? "bg-primary text-primary-foreground border-primary"
                        : isActive
                        ? "border-primary text-primary"
                        : "border-muted text-muted-foreground"
                    )}
                  >
                    {idx + 1}
                  </TabsTrigger>
                  <span
                    className={cn(
                      "text-sm",
                      isActive
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                    )}
                  >
                    {s.label}
                  </span>
                </div>

                {/* Connector line (skip after last step) */}
                {idx < STEPS.length - 1 && (
                  <Separator
                    orientation="horizontal"
                    className={cn(
                      "flex-1 mx-4 h-0.5",
                      isCompleted ? "bg-primary" : "bg-muted"
                    )}
                  />
                )}
              </div>
            );
          })}
        </TabsList>

        {/* Step 1 */}
        <TabsContent value="step1" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Info</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent>
              <div className="grid gap-4 grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Brand Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter brand name"
                      onChange={handleChange}
                      required
                      value={formData.name}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Brand Logo</Label>
                    <Input
                      type="file"
                      id="logo"
                      name="logo"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                    <div className="relative w-32 h-32">
                      {/* Upload / Preview */}
                      <Label
                        htmlFor="logo"
                        className="cursor-pointer flex items-center justify-center w-32 h-32 border-2 border-dashed rounded-md bg-muted hover:bg-accent overflow-hidden"
                      >
                        {previewImage ? (
                          <Image
                            src={previewImage}
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
                      </Label>

                      {/* Remove button if preview exists */}
                      {previewImage && (
                        <Button
                          type="button"
                          onClick={handleRemoveLogo}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600"
                        >
                          <X size={14} />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      name="website"
                      placeholder="https://brand.com"
                      onChange={handleChange}
                      value={formData.website}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Industry / Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, category: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fnb">Food & Beverage</SelectItem>
                        <SelectItem value="fashion">Fashion</SelectItem>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="travel">Travel</SelectItem>
                        <SelectItem value="skincare">
                          Skincare & Beauty
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessEmail">Business Email</Label>
                    <Input
                      type="email"
                      id="businessEmail"
                      name="businessEmail"
                      placeholder="brand@email.com"
                      value={formData.businessEmail}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="+60 123-456789"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6 flex justify-end gap-2">
            <Button onClick={nextStep}>Next</Button>
          </div>
        </TabsContent>

        {/* Step 2 */}
        <TabsContent value="step2" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Brand Guidelines</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="primaryFont">Primary Font</Label>
                    <Input
                      id="primaryFont"
                      name="primaryFont"
                      placeholder="Montserrat"
                      value={formData.primaryFont}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="secondaryFont">Secondary Font</Label>
                    <Input
                      id="secondaryFont"
                      name="secondaryFont"
                      placeholder="Montserrat"
                      value={formData.secondaryFont}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="primaryColor">Primary Color</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="primaryColor"
                        name="primaryColor"
                        type="color"
                        className="w-12 p-1"
                        value={formData.primaryColor}
                        onChange={handleChange}
                      />
                      <Input
                        type="text"
                        className="flex-1"
                        value={formData.primaryColor}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="secondaryColor">Secondary Color</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="secondaryColor"
                        name="secondaryColor"
                        type="color"
                        className="w-12 p-1"
                        value={formData.secondaryColor}
                        onChange={handleChange}
                      />
                      <Input
                        type="text"
                        className="flex-1"
                        value={formData.secondaryColor}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6 flex justify-between gap-2">
            <Button variant="outline" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>Next</Button>
          </div>
        </TabsContent>

        {/* Step 3 */}
        <TabsContent value="step3" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Channels</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input
                      id="instagram"
                      name="instagram"
                      placeholder="Instagram handle without @"
                      value={formData.instagram}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input
                      id="twitter"
                      name="twitter"
                      placeholder="Twitter handle without @"
                      value={formData.twitter}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="facebook">Facebook</Label>
                    <Input
                      id="facebook"
                      name="facebook"
                      placeholder="Facebook page name"
                      value={formData.facebook}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tiktok">Tiktok</Label>
                    <Input
                      id="tiktok"
                      name="tiktok"
                      placeholder="Tiktok handle without @"
                      value={formData.tiktok}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6 flex justify-between gap-2">
            <Button variant="outline" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>Next</Button>
          </div>
        </TabsContent>

        {/* Step 4 */}
        <TabsContent value="step4" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Review</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="space-y-6">
              {/* Section 1: Basic Info */}
              <div className="space-y-4">
                <h2 className="font-semibold text-lg">Basic Info</h2>
                {previewImage ? (
                  <Image
                    src={previewImage}
                    alt="Product Preview"
                    width={200}
                    height={200}
                    className="rounded-md border object-cover"
                  />
                ) : (
                  <div className="w-[200px] h-[200px] flex items-center justify-center border rounded-md bg-muted text-muted-foreground">
                    <span>No image selected</span>
                  </div>
                )}
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Brand Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter brand name"
                      value={formData.name}
                      readOnly
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Industry / Category</Label>
                    <Select defaultValue={formData.category} disabled>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fnb">Food & Beverage</SelectItem>
                        <SelectItem value="fashion">Fashion</SelectItem>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="travel">Travel</SelectItem>
                        <SelectItem value="skincare">
                          Skincare & Beauty
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      name="website"
                      placeholder="https://brand.com"
                      value={formData.website}
                      readOnly
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="brand@email.com"
                      value={formData.businessEmail}
                      readOnly
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+60 123-456789"
                      value={formData.phoneNumber}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Brand Identity */}
              <div className="space-y-4">
                <h2 className="font-semibold text-lg">Brand Identity</h2>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="primary-font">Primary Font</Label>
                      <Input
                        id="primary-font"
                        name="primary-font"
                        placeholder="Montserrat"
                        value={formData.primaryFont}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="secondary-font">Secondary Font</Label>
                      <Input
                        id="secondary-font"
                        name="secondary-font"
                        placeholder="Montserrat"
                        value={formData.secondaryFont}
                        readOnly
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
                          value={formData.primaryColor}
                          readOnly
                        />
                        <Input
                          type="text"
                          className="flex-1"
                          value={formData.primaryColor}
                          readOnly
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
                          value={formData.secondaryColor}
                          readOnly
                        />
                        <Input
                          type="text"
                          className="flex-1"
                          value={formData.secondaryColor}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />
              {/* Social Media Channels */}
              <div className="space-y-4">
                <h2 className="font-semibold text-lg">Social Media Profiles</h2>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input
                      id="instagram"
                      name="instagram"
                      placeholder="Instagram handle without @"
                      value={formData.instagram}
                      readOnly
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input
                      id="twitter"
                      name="twitter"
                      placeholder="Twitter handle without @"
                      value={formData.twitter}
                      readOnly
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="facebook">Facebbok</Label>
                    <Input
                      id="facebook"
                      name="facebook"
                      placeholder="Facebook page name"
                      value={formData.facebook}
                      readOnly
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tiktok">Tiktok</Label>
                    <Input
                      id="tiktok"
                      name="tiktok"
                      placeholder="Tiktok handle without @"
                      value={formData.tiktok}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6 flex justify-between gap-2">
            <Button variant="outline" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={handleSubmit}>
              {loading ? "Submitting" : "Submit"}
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
