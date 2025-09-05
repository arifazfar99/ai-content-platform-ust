import { Brand } from "@/lib/brands";
import React from "react";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Music2,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "facebook":
      return <Facebook size={18} className="text-blue-600" />;
    case "instagram":
      return <Instagram size={18} className="text-pink-500" />;
    case "twitter":
      return <Twitter size={18} className="text-sky-500" />;
    case "youtube":
      return <Youtube size={18} className="text-red-500" />;
    case "linkedin":
      return <Linkedin size={18} className="text-blue-700" />;
    case "tiktok":
      return <Music2 size={18} className="text-black" />;
    default:
      return null;
  }
};

interface Props {
  brand: Brand;
}

const BrandDetail = ({ brand }: Props) => {
  return (
    <div className="border rounded-md">
      <div className="flex justify-between p-6">
        <div className="flex items-center gap-4">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
            unoptimized
          />
          <div>
            <h1 className="text-xl font-semibold">{brand.name}</h1>
            <p className="text-muted-foreground">{brand.category}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Link href={"/brand/edit"}>
            <Button variant={"outline"}>Edit</Button>
          </Link>
          <Button variant={"destructive"}>Delete</Button>
        </div>
      </div>

      <Separator />

      {/* BASIC INFORMATION */}
      <div className="space-y-2 px-6 pt-6">
        <h1 className="text-md font-semibold">Basic Information</h1>
        <div className="bg-muted border p-4 rounded-md space-y-3">
          <div>
            <p className="text-sm text-muted-foreground">Website</p>
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {brand.website}
            </a>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p>{brand.email}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <p>{brand.phone}</p>
          </div>
        </div>
      </div>

      {/* BRAND IDENTITY*/}
      <div className="space-y-2 px-6 pt-6">
        <h1 className="text-md font-semibold">Brand Identity</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted border p-4 rounded-md space-y-3">
            <h1 className="text-sm font-semibold">Typography</h1>
            <div>
              <p className="text-sm text-muted-foreground">Primary Font</p>
              <p>{brand.fonts.primary}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Secondary Font</p>
              <p>{brand.fonts.secondary}</p>
            </div>
          </div>
          <div className="bg-muted border p-4 rounded-md space-y-3">
            <h1 className="text-sm font-semibold">Color Palette</h1>
            <div>
              <p className="text-sm text-muted-foreground">Primary Color</p>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-md border"
                  style={{ backgroundColor: brand.colors.primary }}
                />
                <p>{brand.colors.primary}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Secondary Color</p>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-md border"
                  style={{ backgroundColor: brand.colors.secondary }}
                />
                <p>{brand.colors.secondary}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SOCIAL MEDIA PROFILES */}
      <div className="space-y-2 px-6 py-6">
        <h1 className="text-md font-semibold">Social Media Profiles</h1>
        <div className="bg-muted border p-4 rounded-md space-y-3">
          <div className="grid grid-cols-4">
            {Object.entries(brand.socialMediaChannels).map(
              ([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  {getSocialIcon(platform)}
                  <span className="capitalize">{platform}</span>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetail;
