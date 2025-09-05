import SocialChannelCard from "@/components/social-channel-card";
import { SOCIAL_CHANNELS } from "@/lib/social-channels";
import React from "react";

const SocialChannelsPage = () => {
  return (
    <div className="space-y-9">
      <div>
        <h1 className="text-2xl font-bold">Social Channels Integrations</h1>
        <p className="mt-2">
          Connect your social media accounts to create and publish content
          directly from our platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SOCIAL_CHANNELS.map((channel) => (
          <SocialChannelCard key={channel.name} channel={channel} />
        ))}
      </div>
    </div>
  );
};

export default SocialChannelsPage;
