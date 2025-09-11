"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface BrandStyle {
  fonts: { primary: string; secondary: string };
  colors: { primary: string; secondary: string };
  logo: File | null;
  logoPreview: string | null;
  logoPlacement: string;
}

type BrandKitContextType = {
  formData: BrandStyle;
  setFormData: React.Dispatch<React.SetStateAction<BrandStyle>>;
  saveFormData: () => void;
};

const BrandKitContext = createContext<BrandKitContextType | undefined>(
  undefined
);

export function BrandKitProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<BrandStyle>({
    fonts: { primary: "", secondary: "" },
    colors: { primary: "#000000", secondary: "#000000" },
    logo: null,
    logoPreview: null,
    logoPlacement: "",
  });

  const saveFormData = () => {
    try {
      // Example: Save to localStorage
      console.log("✅ Form saved:", formData);
    } catch (error) {
      console.error("❌ Failed to save:", error);
    }
  };

  const value = {
    formData,
    setFormData,
    saveFormData,
  };

  return (
    <BrandKitContext.Provider value={value}>
      {children}
    </BrandKitContext.Provider>
  );
}

export const useBrandKit = () => {
  const context = useContext(BrandKitContext);
  if (!context) {
    throw new Error("useBrandKit must be used within a BrandStyleProvider");
  }
  return context;
};
