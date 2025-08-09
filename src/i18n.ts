import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa las traducciones
import es from "./locales/es.json";
import en from "./locales/en.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en }
    },
    lng: "es", // Idioma inicial
    fallbackLng: "en", // Idioma por defecto si falta traducción
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
