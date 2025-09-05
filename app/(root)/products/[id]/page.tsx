"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DUMMY_SKINCARE_PRODUCTS } from "@/lib/products";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const ProductDetailPage = () => {
  const params = useParams();
  const product = DUMMY_SKINCARE_PRODUCTS.find((p) => p.id === params.id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="space-y-9">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={0}
            className="rounded-lg object-cover"
            unoptimized
          />
          <p>{product.description}</p>
          <p className="text-lg font-semibold">RM {product.price.toFixed(2)}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetailPage;
