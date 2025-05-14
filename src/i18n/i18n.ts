import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ru from "./locales/ru/translation.json";
import uz from "./locales/uz/translation.json";
import en from "./locales/en/translation.json";
import sk from "./locales/sk/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      uz: { translation: uz },
      en: { translation: en },
      sk: { translation: sk },
    },
    lng: localStorage.getItem("lang") || "ru",
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
