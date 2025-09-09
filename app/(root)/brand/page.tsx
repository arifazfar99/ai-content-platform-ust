"use client";

import BrandDetail from "@/components/brand-detail";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DUMMY_SKINCARE_BRAND } from "@/lib/brands";
import Link from "next/link";
import React from "react";

const BrandPage = () => {
  const brands = [];

  return (
    <div className="space-y-9">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Brands</h1>
      </div>

      {brands.length > 0 ? (
        <>
          {brands.map((brand) => (
            <BrandDetail key={brand.id} brand={brand} />
          ))}
        </>
      ) : (
        <Card className="flex flex-col items-center justify-center py-12 border rounded-md text-center text-muted-foreground">
          <p className="mb-4">
            No brand found. Please set up your first brand.
          </p>
          <Link href={"/brand/brand-setup"}>
            <Button className="bg-blue-700 hover:bg-blue-800">
              Setup a Brand
            </Button>
          </Link>
        </Card>
      )}
    </div>
  );
};

export default BrandPage;
