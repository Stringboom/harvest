import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Cookies from "js-cookie";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    Cookies.set("language", selectedLanguage, { expires: 365 });
  };

  return (
    <div>
      <label htmlFor="language">Select Language:</label>
      <select id="language" value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="af">Afrikaans</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
