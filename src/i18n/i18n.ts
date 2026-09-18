// src/i18n/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../locales/en/translation.json';
import translationID from '../locales/id/translation.json';

const resources = {
  en: { translation: translationEN },
  id: { translation: translationID },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'id'],
    detection: {
      // Hanya cek localStorage. Jika belum pernah ada pilihan tersimpan,
      // i18next langsung jatuh ke fallbackLng ('en') — sesuai poin 6.
      order: ['localStorage'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: {
      escapeValue: false, // React sudah aman dari XSS secara default
    },
  });

export default i18n;