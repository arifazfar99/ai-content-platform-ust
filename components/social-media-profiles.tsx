import { Instagram, Twitter, Facebook, Music2 } from "lucide-react";

interface SocialProps {
  instagram?: string;
  twitter?: string;
  facebook?: string;
  tiktok?: string;
}

export function SocialMediaProfiles({
  instagram,
  twitter,
  facebook,
  tiktok,
}: SocialProps) {
  const socials = [
    {
      name: "Instagram",
      url: instagram,
      icon: <Instagram className="w-5 h-5" />,
    },
    { name: "Twitter", url: twitter, icon: <Twitter className="w-5 h-5" /> },
    { name: "Facebook", url: facebook, icon: <Facebook className="w-5 h-5" /> },
    { name: "TikTok", url: tiktok, icon: <Music2 className="w-5 h-5" /> },
  ];

  return (
    <div className="space-y-2 px-6 py-6">
      <h1 className="text-md font-semibold">Social Media Profiles</h1>
      <div className="bg-muted border p-4 rounded-md space-y-3">
        <div className="grid grid-cols-4 gap-4">
          {socials.map(
            (social) =>
              social.url && (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center space-y-1 hover:text-primary transition"
                >
                  {social.icon}
                  <span className="text-xs">{social.name}</span>
                </a>
              )
          )}
        </div>
      </div>
    </div>
  );
}
