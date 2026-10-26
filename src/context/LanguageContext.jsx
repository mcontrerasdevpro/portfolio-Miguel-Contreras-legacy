import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../i18n';

const STORAGE_KEY = 'portfolio-lang';

/**
 * @typedef {"es" | "en"} Lang
 */

const getInitialLang = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;
  } catch (e) {
    /* localStorage no disponible */
  }
  const nav = navigator.language || navigator.userLanguage || 'en';
  return nav.toLowerCase().startsWith('es') ? 'es' : 'en';
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* noop */
    }
    const t = translations[lang];
    // Actualiza <html lang> dinámicamente para SEO bilingüe
    document.documentElement.setAttribute('lang', lang);
    // <title> y <meta description> según idioma
    document.title = t.meta.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', t.meta.description);
  }, [lang]);

  const value = {
    lang,
    setLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLang debe usarse dentro de <LanguageProvider>');
  }
  return ctx;
};
