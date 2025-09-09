/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Brand {
  id?: string;
  name: string,
  logo: any,
  website: string,
  category: string,
  businessEmail: string,
  phoneNumber: string,
  primaryFont: string,
  secondaryFont: string,
  primaryColor: string,
  secondaryColor: string,
  instagram: string,
  twitter: string,
  facebook: string,
  tiktok: string,
}

export const DUMMY_SKINCARE_BRANDS: Brand[] = [
  {
    id: "1",
    name: "Glow Essence",
    logo: "https://dummyimage.com/200x200/ffb6c1/ffffff&text=Glow+Essence",
    website: "https://www.glowessence.com",
    category: "Skincare",
    businessEmail: "hello@glowessence.com",
    phoneNumber: "+60 12-345 6789",
    primaryFont: "Montserrat",
    secondaryFont: "Open Sans",
    primaryColor: "#FF6F91", // pink
    secondaryColor: "#FFD6E0", // light pink
    instagram: "https://instagram.com/glowessence",
    twitter: "https://twitter.com/glowessence",
    facebook: "https://facebook.com/glowessence",
    tiktok: "https://tiktok.com/@glowessence",
  },
  {
    id: "2",
    name: "Pure Botanica",
    logo: "https://dummyimage.com/200x200/98fb98/ffffff&text=Pure+Botanica",
    website: "https://www.purebotanica.com",
    category: "Skincare",
    businessEmail: "contact@purebotanica.com",
    phoneNumber: "+60 13-456 7890",
    primaryFont: "Playfair Display",
    secondaryFont: "Roboto",
    primaryColor: "#2E8B57", // forest green
    secondaryColor: "#C8E6C9", // mint green
    instagram: "https://instagram.com/purebotanica",
    twitter: "https://twitter.com/purebotanica",
    facebook: "https://facebook.com/purebotanica",
    tiktok: "https://tiktok.com/@purebotanica",
  },
  {
    id: "3",
    name: "Lumière Skin",
    logo: "https://dummyimage.com/200x200/87ceeb/ffffff&text=Lumiere+Skin",
    website: "https://www.lumiereskin.com",
    category: "Skincare",
    businessEmail: "support@lumiereskin.com",
    phoneNumber: "+60 14-567 8901",
    primaryFont: "Poppins",
    secondaryFont: "Lato",
    primaryColor: "#4682B4", // steel blue
    secondaryColor: "#E0F7FA", // light aqua
    instagram: "https://instagram.com/lumiereskin",
    twitter: "https://twitter.com/lumiereskin",
    facebook: "https://facebook.com/lumiereskin",
    tiktok: "https://tiktok.com/@lumiereskin",
  },
  {
    id: "4",
    name: "Serenity Organics",
    logo: "https://dummyimage.com/200x200/f5deb3/000000&text=Serenity+Organics",
    website: "https://www.serenityorganics.com",
    category: "Skincare",
    businessEmail: "info@serenityorganics.com",
    phoneNumber: "+60 15-678 9012",
    primaryFont: "Raleway",
    secondaryFont: "Nunito",
    primaryColor: "#8B4513", // saddle brown
    secondaryColor: "#FFE0B2", // peach
    instagram: "https://instagram.com/serenityorganics",
    twitter: "https://twitter.com/serenityorganics",
    facebook: "https://facebook.com/serenityorganics",
    tiktok: "https://tiktok.com/@serenityorganics",
  },
  {
    id: "5",
    name: "Velour Beauty",
    logo: "https://dummyimage.com/200x200/d8bfd8/ffffff&text=Velour+Beauty",
    website: "https://www.velourbeauty.com",
    category: "Skincare",
    businessEmail: "care@velourbeauty.com",
    phoneNumber: "+60 16-789 0123",
    primaryFont: "Helvetica Neue",
    secondaryFont: "Arial",
    primaryColor: "#9932CC", // dark orchid
    secondaryColor: "#E6E6FA", // lavender
    instagram: "https://instagram.com/velourbeauty",
    twitter: "https://twitter.com/velourbeauty",
    facebook: "https://facebook.com/velourbeauty",
    tiktok: "https://tiktok.com/@velourbeauty",
  },
];


