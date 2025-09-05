"use client";

import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

interface Feature {
  label: string;
  value: string | number;
}

interface Props {
  name: string;
  icon: {
    hex: string;
    path: string;
    title: string;
  };
  color: string;
  connected: boolean;
  description: string;
  features: Feature[];
  accountId?: string;
}

const SocialChannelCard = ({ channel }: { channel: Props }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-3">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill={`#${channel.icon.hex}`}
          >
            <title>{channel.icon.title}</title>
            <path d={channel.icon.path} />
          </svg>

          <div>
            <CardTitle>{channel.name}</CardTitle>
            <CardDescription>
              {channel.connected ? (
                <p>
                  Connected as{" "}
                  <strong>{channel.accountId ?? "@yourhandle"}</strong>
                </p>
              ) : (
                <p className="text-muted-foreground">Not connected</p>
              )}
            </CardDescription>
          </div>
        </div>

        <CardAction>
          <Button variant={channel.connected ? "outline" : "default"}>
            {channel.connected ? "Connected" : "Connect"}
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <p className="mb-3">{channel.description}</p>

        {channel.connected && channel.features.length > 0 && (
          <div className="flex gap-6">
            {channel.features.map((feature) => (
              <div key={feature.label}>
                <p className="text-sm text-muted-foreground">{feature.label}</p>
                <p className="font-medium">{feature.value}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SocialChannelCard;
