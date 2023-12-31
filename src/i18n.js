import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import login_en from "./locales/en/IniciarSesion.json"
import contacto_en from "./locales/en/Contacto.json"
import forgotPassword_en from "./locales/en/ForgotPassword.json"
import inicio_en from "./locales/en/Inicio.json"

import login_es from "./locales/es/IniciarSesion.json"
import contacto_es from "./locales/es/Contacto.json"
import forgotPassword_es from "./locales/es/ForgotPassword.json"
import opcionesNav_es from './locales/es/nav.json';
//import opcionesNav_en from './locales/en/nav.json';
import inicio_es from "./locales/es/Inicio.json"
import cotizaciones_es from "./locales/es/Cotizaciones.json"
import notificarPago_es from './locales/es/NotificarPago.json';

import opcionesNav_en from './locales/en/nav.json';
import notificarPago_en from './locales/en/NotificarPago.json';
import cotizaciones_en from "./locales/en/Cotizaciones.json"

import FormaPago_en from './locales/en/FormaPago.json'
import FormaPago_es from './locales/es/FormaPago.json'

const en = Object.assign(
    {},
    login_en,
    contacto_en,
    forgotPassword_en,
    inicio_en,
    opcionesNav_en,
    notificarPago_en,
    cotizaciones_en,
    FormaPago_en
);

const es = Object.assign(
    {},
    login_es,
    contacto_es,
    forgotPassword_es,
    opcionesNav_es,
    inicio_es,
    opcionesNav_es,
    notificarPago_es,
    cotizaciones_es,
    FormaPago_es
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