import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

type LanguageContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>(
    Cookies.get("language") || "en"
  );

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
