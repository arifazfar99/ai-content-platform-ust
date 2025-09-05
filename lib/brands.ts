interface SocialMedia {
    facebook: string;
    instagram: string;
    tiktok: string;
    twitter: string
}

interface BrandColors {
    primary: string;
    secondary: string
}

interface BrandFonts {
    primary: string;
    secondary: string
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  website: string;
  category: string;
  email: string;
  phone: string;
  colors: BrandColors;
  fonts: BrandFonts;
  socialMediaChannels: SocialMedia;
}

export const DUMMY_SKINCARE_BRAND: Brand[] = [
  {
    id: "b1",
    name: "Glow Haven",
    logo: "/images/brand/OIP.webp",
    website: "https://www.glowhaven.com",
    category: "skincare",
    email: "support@glowhaven.com",
    phone: "+60 112-3456789",
    colors: {
      primary: "#FFB6C1",
      secondary: "#6A5ACD",
    },
    fonts: {
      primary: "Poppins",
      secondary: "Lora",
    },
    socialMediaChannels: {
      facebook: "https://facebook.com/glowhaven",
      instagram: "https://instagram.com/glowhaven",
      tiktok: "https://tiktok.com/@glowhaven",
      twitter: "https://twitter.com/glowhaven",
    },
  }
]

