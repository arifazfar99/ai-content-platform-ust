import Image from "next/image";
import React from "react";

interface Props {
  username: string;
  location?: string;
  profileImage: string;
  postImage: string;
  caption: string;
}

const ContentPreviewCard = ({
  username,
  location,
  profileImage,
  postImage,
  caption,
}: Props) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-border rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <Image
          src={profileImage}
          alt={username}
          width={32}
          height={32}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-sm">{username}</span>
          {location && (
            <span className="text-xs text-muted-foreground">{location}</span>
          )}
        </div>
      </div>

      {/* Post Image */}
      <div className="relative w-full h-64">
        <Image src={postImage} alt="Post" fill className="object-cover" />
      </div>

      {/* Action icons */}
      <div className="flex items-center gap-4 px-4 py-3 text-gray-600">
        <button className="hover:text-black">❤️</button>
        <button className="hover:text-black">💬</button>
        <button className="hover:text-black">📤</button>
      </div>

      {/* Caption */}
      <div className="px-4 pb-4 text-sm">
        <span className="font-semibold mr-2">{username}</span>
        <span>{caption}</span>
      </div>
    </div>
  );
};

export default ContentPreviewCard;
