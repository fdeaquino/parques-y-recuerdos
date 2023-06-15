import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en/translation.json";
import esTranslation from "./locales/es/translation.json";
// Spanglish translation
import spTranslation from "./locales/sp/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation,
    },
    sp: {
        translation: spTranslation,
    },
  },
  lng: "sp", // sets the default language
  fallbackLng: ["en", "es"], // sets the fallback language in case the selected language's translation is missing
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;