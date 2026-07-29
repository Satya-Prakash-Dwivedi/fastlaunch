import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import hiTranslation from './locales/hi.json';
import guTranslation from './locales/gu.json';
import jaTranslation from './locales/ja.json';
import plTranslation from './locales/pl.json';
import fiTranslation from './locales/fi.json';
import svTranslation from './locales/sv.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      hi: { translation: hiTranslation },
      gu: { translation: guTranslation },
      ja: { translation: jaTranslation },
      pl: { translation: plTranslation },
      fi: { translation: fiTranslation },
      sv: { translation: svTranslation },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
