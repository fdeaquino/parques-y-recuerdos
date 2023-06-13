import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en/translation.json";
import esTranslation from "./locales/es/translation.json";

// TODO: Set Spanglish as one of the language options
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
  lng: "en", // sets the default language
  fallbackLng: "en", // sets the fallback language in case the selected language's translation is missing
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;