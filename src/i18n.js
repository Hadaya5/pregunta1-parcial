import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import login_en from "./locales/en/IniciarSesion.json"
import login_es from "./locales/es/IniciarSesion.json"
import opcionesNav_es from './locales/es/nav.json';
//import opcionesNav_en from './locales/en/nav.json';;



const en = Object.assign(
    {},
    login_en
);

const es = Object.assign(
    {},
    login_es,
    opcionesNav_es
);


i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es
      }
    }
  });

export default i18n;