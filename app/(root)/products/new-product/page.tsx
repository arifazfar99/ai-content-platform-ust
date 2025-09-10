"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NewProductPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
    brandId: "",
  });

  const handleChange = (key: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save brand data to DB
    console.log("Adding new product...");
  };

  const handleSave = () => {
    router.push("/products");
  };

  const handleCancel = () => {
    router.push("/products");
  };

  return (
    <div className="space-y-9">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>
      </div>

      <Card>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Add New Product</h1>
            <div className="flex gap-2">
              <Button variant={"default"} onClick={handleSave}>
                Add
              </Button>
              <Button variant={"outline"} onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={form.description}
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    value={form.price}
                    onChange={(e) =>
                      handleChange("price", parseFloat(e.target.value))
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Product Image URL</Label>
                  <Input
                    id="image"
                    type="url"
                    value={form.image}
                    onChange={(e) => handleChange("image", e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewProductPage;
