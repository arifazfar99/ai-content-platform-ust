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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  logo: File | null;
  website: string;
  category: string;
  description: string;
  business_email: string;
  phone_number: string;
  primary_fonts: string;
  secondary_font: string;
  primary_color: string;
  secondary_color: string;
  instagram: string;
  twitter: string;
  facebook: string;
  tiktok: string;
};

const STEPS = [
  { value: "step1", label: "Basic Info" },
  { value: "step2", label: "Brand Guidelines" },
  { value: "step3", label: "Social Media Channels" },
  { value: "step4", label: "Review" },
];

export default function BrandSetupPage() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    logo: null,
    website: "",
    category: "",
    description: "",
    business_email: "",
    phone_number: "",
    primary_fonts: "",
    secondary_font: "",
    primary_color: "#000000",
    secondary_color: "#000000",
    instagram: "",
    twitter: "",
    facebook: "",
    tiktok: "",
  });
  const [previewImage, setPreviewImage] = useState("");

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save brand data to DB
    console.log("Submitting brand setup...");
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
        <TabsList className="flex w-full justify-between relative mb-8 bg-transparent border-none shadow-none">
          {STEPS.map((s, idx) => {
            const currentIdx = STEPS.findIndex((st) => st.value === step);
            const isCompleted = idx < currentIdx;
            const isActive = step === s.value;

            return (
              <div key={s.value} className="flex items-center">
                {/* Connector line (except first step) */}
                {idx > 0 && (
                  <div
                    className={cn(
                      "absolute top-5 h-0.5 transition-all",
                      isCompleted ? "bg-primary" : "bg-muted"
                    )}
                    style={{
                      left: `${((idx - 1) / (STEPS.length - 1)) * 100}%`,
                      width: `${100 / (STEPS.length - 1)}%`,
                    }}
                  />
                )}

                {/* Step circle */}
                <TabsTrigger
                  value={s.value}
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border-2 z-10",
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
                    "mt-2 text-sm",
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
        </TabsList>

        {/* Step 1 */}
        <TabsContent value="step1" className="mt-6">
          <Card>
            <CardContent>
              <div className="space-y-4">
                <h2 className="font-semibold text-lg">Basic Info</h2>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="brandName">Brand Name</Label>
                    <Input
                      id="brandName"
                      name="brandName"
                      placeholder="Enter brand name"
                      onChange={handleChange}
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
                        <SelectItem value="travel">
                          Skincare & Beauty
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Brand Description</Label>
                    <Textarea />
                  </div>
                </div>
              </div>

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
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+60 123-456789"
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
          <h2 className="text-lg font-semibold mb-4">Step 2: Details</h2>
          <p>Form fields for step 2 go here...</p>
          <div className="mt-6 flex justify-between gap-2">
            <Button variant="outline" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>Next</Button>
          </div>
        </TabsContent>

        {/* Step 3 */}
        <TabsContent value="step3" className="mt-6">
          <h2 className="text-lg font-semibold mb-4">
            Step 3: Review & Submit
          </h2>
          <p>Show summary of info before submission...</p>
          <div className="mt-6 flex justify-between gap-2">
            <Button variant="outline" onClick={prevStep}>
              Back
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            <Separator />

            {/* Section 2: Business Info */}

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
                      value={formData.primary_color}
                      onChange={handleChange}
                    />
                    <Input
                      type="text"
                      className="flex-1"
                      value={formData.primary_color}
                      onChange={handleChange}
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
                      value={formData.secondary_color}
                      onChange={handleChange}
                    />
                    <Input
                      type="text"
                      className="flex-1"
                      value={formData.secondary_color}
                      onChange={handleChange}
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
                  <Label htmlFor="facebook">Facebook</Label>
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
    </div>
  );
}
