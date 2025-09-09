"use client";

import { SocialMediaProfiles } from "@/components/social-media-profiles";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DUMMY_SKINCARE_BRANDS } from "@/lib/brands";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrandPage = () => {
  const brand = DUMMY_SKINCARE_BRANDS[0];

  return (
    <div className="space-y-9">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Brand</h1>

        <Link href={"/brand/brand-setup"}>
          <Button>Brand Setup</Button>
        </Link>
      </div>

      <Card>
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
          {/* <div className="flex gap-2">
            <Link href={"/brand/edit"}>
              <Button variant={"outline"}>Edit</Button>
            </Link>
            <Button variant={"destructive"}>Delete</Button>
          </div> */}
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
              <p>{brand.businessEmail}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p>{brand.phoneNumber}</p>
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
                <p>{brand.primaryFont}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Secondary Font</p>
                <p>{brand.secondaryFont}</p>
              </div>
            </div>
            <div className="bg-muted border p-4 rounded-md space-y-3">
              <h1 className="text-sm font-semibold">Color Palette</h1>
              <div>
                <p className="text-sm text-muted-foreground">Primary Color</p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-md border"
                    style={{ backgroundColor: brand.primaryColor }}
                  />
                  <p>{brand.primaryColor}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Secondary Color</p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-md border"
                    style={{ backgroundColor: brand.secondaryColor }}
                  />
                  <p>{brand.secondaryColor}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SOCIAL MEDIA PROFILES */}
        <SocialMediaProfiles
          instagram={brand.instagram}
          twitter={brand.twitter}
          facebook={brand.facebook}
          tiktok={brand.tiktok}
        />
      </Card>
    </div>
  );
};

export default BrandPage;
