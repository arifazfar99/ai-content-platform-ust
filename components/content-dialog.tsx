"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

interface Props {
  trigger: React.ReactNode;
  content: string;
  type: "text" | "image" | "video";
}

const ContentDialog = ({ trigger, content, type }: Props) => {
  const [instaOpts, setInstaOpts] = useState<string[]>([]);

  const toggleInstaOpts = (opt: string) => {
    setInstaOpts((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );
  };

  const renderContent = () => {
    if (type === "text") {
      return <p className="whitespace-pre-line">{content}</p>;
    }
    if (type === "image") {
      return (
        <Image
          src={content}
          alt="Generated"
          width={400}
          height={300}
          className="rounded-md object-cover"
        />
      );
    }
    if (type === "video") {
      return (
        <video width={480} height={320} controls className="rounded-md">
          <source src={content} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      );
    }
    return null;
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl w-full">
        <DialogHeader>
          <DialogTitle>Generated Content</DialogTitle>
          <DialogDescription>
            Preview of the selected AI-generated content
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>{renderContent()}</div>
          <div>
            <div className="bg-card border border-border rounded-lg">
              <div className="p-6 border-b border-border">
                <h2 className="font-semibold">Publishing Options</h2>
              </div>
              <div className="p-6">
                <div>
                  <Label className="mb-3">Instagram: </Label>
                  <div className="flex flex-wrap gap-2">
                    {["Feed", "Story", "Reels"].map((opt) => (
                      <Button
                        key={opt}
                        type="button"
                        onClick={() => toggleInstaOpts(opt)}
                        variant={
                          instaOpts.includes(opt) ? "default" : "outline"
                        }
                        className="justify-start"
                      >
                        {opt}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContentDialog;
