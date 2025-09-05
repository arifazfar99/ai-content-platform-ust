import { siFacebook, siInstagram, siX, siTiktok } from "simple-icons/icons";

export const SOCIAL_CHANNELS = [
  {
    name: "Facebook",
    icon: siFacebook,
    color: "bg-[#0866FF]",
    connected: true,
    accountId: "@testpage",
    description: "Manage your Facebook Page and track performance.",
    features: [
      { label: "Followers", value: "12.5k" },
      { label: "Last Post", value: "2 days ago" },
    ],
  },
  {
    name: "Instagram",
    icon: siInstagram,
    color: "bg-[#FF0069]",
    connected: false,
    description: "Connect your Instagram account to schedule posts & monitor engagement.",
    features: [],
  },
  {
    name: "Twitter",
    icon: siX,
    color: "bg-[#000000]",
    connected: false,
    description: "Post tweets and track mentions once connected.",
    features: [],
  },
  {
    name: "Tiktok",
    icon: siTiktok,
    color: "bg-[#000000]",
    connected: true,
    accountId: "@tiktoktest",
    description: "Upload videos and analyze TikTok performance.",
    features: [
      { label: "Followers", value: "8.2k" },
      { label: "Last Video", value: "5 days ago" },
    ],
  },
];
