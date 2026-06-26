import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const useLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("lang");

    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const handleChangeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ka" : "en";

    i18n.changeLanguage(newLanguage);
    localStorage.setItem("lang", newLanguage);
  };

  return {
    handleChangeLanguage,
    language: i18n.language,
  };
};

export default useLanguage;