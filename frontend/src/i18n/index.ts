import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { LOCALS } from './constants.ts';
import EN_LOCALE from './locals/en.local.json';
import UK_LOCALE from './locals/uk.local.json';

const resources = {
  [LOCALS.EN]: {
    translation: EN_LOCALE,
  },
  [LOCALS.UK]: {
    translation: UK_LOCALE,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;