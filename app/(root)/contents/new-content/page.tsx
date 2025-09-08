/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar1,
  ChevronDownIcon,
  FileText,
  Target,
  Users,
} from "lucide-react";
import React, { useState } from "react";

const PLATFORMS = [
  "Instagram",
  "LinkedIn",
  "YouTube",
  "TikTok",
  "Twitter",
  "Facebook",
];

type FormState = {
  name: string;
  objective: string;
  targetAudience: number;
  platform: string[];
  startDate: Date | undefined;
  endDate: Date | undefined;
};

const NewContentPage = () => {
  const [openStartDate, setOpenStartDate] = useState(false);
  const [openEndDate, setOpenEndDate] = useState(false);

  const [form, setForm] = useState<FormState>({
    name: "",
    objective: "",
    targetAudience: 0,
    platform: [""],
    startDate: undefined,
    endDate: undefined,
  });

  const handleChange = (key: string, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save brand data to DB
    console.log("Adding new campaign...");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Campaign</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="campaign-name">Campaign Name</Label>
            <Input
              id="campaign-name"
              type="text"
              placeholder="Enter campaign name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="campaign-objective">Campaign Objective</Label>
            <RadioGroup
              value={form.objective}
              onValueChange={(val) => handleChange("objective", val)}
              className="grid grid-cols-2 gap-4"
            >
              <Label
                htmlFor="awareness"
                className="border border-input rounded-md p-3 cursor-pointer hover:border-primary flex items-center"
              >
                <RadioGroupItem
                  value="Awareness"
                  id="awareness"
                  className="mr-2"
                />
                <Target size={20} className="mr-2" />
                Awareness
              </Label>

              <Label
                htmlFor="engagement"
                className="border border-input rounded-md p-3 cursor-pointer hover:border-primary flex items-center"
              >
                <RadioGroupItem
                  value="Engagement"
                  id="engagement"
                  className="mr-2"
                />
                <Users size={20} className="mr-2" />
                Engagement
              </Label>

              <Label
                htmlFor="conversions"
                className="border border-input rounded-md p-3 cursor-pointer hover:border-primary flex items-center"
              >
                <RadioGroupItem
                  value="Conversions"
                  id="conversions"
                  className="mr-2"
                />
                <FileText size={20} className="mr-2" />
                Conversions
              </Label>

              <Label
                htmlFor="sales"
                className="border border-input rounded-md p-3 cursor-pointer hover:border-primary flex items-center"
              >
                <RadioGroupItem value="Sales" id="sales" className="mr-2" />
                <Calendar1 size={20} className="mr-2" />
                Sales
              </Label>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="target-audience">Target Audience</Label>
            <Textarea
              id="target-audience"
              placeholder="Describe your target audience"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="paltform">Platforms</Label>
            <div className="grid grid-cols-3 gap-2">
              {PLATFORMS.map((platform) => (
                <div key={platform} className="flex items-center">
                  <Checkbox id={`platform-${platform}`} className="mr-2" />
                  <Label htmlFor={`platform-${platform}`}>{platform}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="start-date">Start Date</Label>
              <div className="flex gap-3">
                <Popover open={openStartDate} onOpenChange={setOpenStartDate}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="date-picker"
                      className="w-32 justify-between font-normal"
                    >
                      {form.startDate
                        ? form.startDate.toLocaleDateString()
                        : "Select date"}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={form.startDate}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        handleChange("startDate", date);
                        setOpenStartDate(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>

                <Input
                  type="time"
                  step="1"
                  defaultValue="10:30:00"
                  className="w-fit bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="end-date">End Date</Label>
              <div className="flex gap-3">
                <Popover open={openEndDate} onOpenChange={setOpenEndDate}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="date-picker"
                      className="w-32 justify-between font-normal"
                    >
                      {form.endDate
                        ? form.endDate.toLocaleDateString()
                        : "Select date"}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={form.endDate}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        handleChange("endDate", date);
                        setOpenEndDate(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>

                <Input
                  type="time"
                  step="1"
                  defaultValue="10:30:00"
                  className="w-fit bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Create Campaign
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewContentPage;
