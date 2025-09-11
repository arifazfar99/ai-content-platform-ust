"use client";

import ContentDialog from "@/components/content-dialog";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DUMMY_GENERATED_CONTENT } from "@/lib/contents";
import { DUMMY_SKINCARE_PRODUCTS } from "@/lib/products";
import { Filter, SquarePen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ContentsPage = () => {
  const [filter, setFilter] = useState<"all" | "text" | "image" | "video">(
    "all"
  );

  const getProductName = (productId: string) => {
    const product = DUMMY_SKINCARE_PRODUCTS.find((p) => p.id === productId);
    return product ? product.name : "Unknown Product";
  };

  const renderContentPreview = (
    content: string,
    type: "text" | "image" | "video"
  ) => {
    if (type === "text") {
      return <p className="truncate max-w-xs">{content}</p>;
    }
    if (type === "image") {
      return (
        <Image
          src={content}
          alt="Generated"
          width={120}
          height={120}
          className="rounded-md object-cover"
        />
      );
    }
    if (type === "video") {
      return (
        <video width={180} height={120} controls className="rounded-md">
          <source src={content} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      );
    }
    return null;
  };

  const filteredContents =
    filter === "all"
      ? DUMMY_GENERATED_CONTENT
      : DUMMY_GENERATED_CONTENT.filter((item) => item.contentType === filter);

  return (
    <div className="space-y-9">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Generated Contents</h1>
          <p className="mt-2">Browse and manage your AI-generated content</p>
        </div>

        <div className="flex items-center gap-2">
          <Filter />
          <p>Filter by: </p>
          <Select
            defaultValue="all"
            onValueChange={(value: "all" | "text" | "image" | "video") =>
              setFilter(value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="text">Text</SelectItem>
              <SelectItem value="image">Image</SelectItem>
              <SelectItem value="video">Video</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="px-6">
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Content Type</TableHead>
                <TableHead>Preview</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContents.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{getProductName(item.productId)}</TableCell>
                  <TableCell className="capitalize">
                    {item.contentType}
                  </TableCell>
                  <TableCell>
                    {renderContentPreview(item.content, item.contentType)}
                  </TableCell>
                  <TableCell>
                    {new Date(item.createdAt).toLocaleString("en-MY", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </TableCell>
                  <TableCell>
                    <Link href={`/contents/${item.id}`}>
                      <SquarePen className="text-blue-700"/>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}

              {filteredContents.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center text-muted-foreground py-6"
                  >
                    No generated content found for this filter.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default ContentsPage;
