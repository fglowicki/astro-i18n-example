import { defineAstroI18nConfig } from "astro-i18n";

export default defineAstroI18nConfig({
  primaryLocale: "pl", // default app locale
  secondaryLocales: ["en"], // other supported locales
  fallbackLocale: "pl", // fallback locale (on missing translation)
  trailingSlash: "never", // "never" or "always"
  run: "client+server", // "client+server" or "server"
  showPrimaryLocale: false, // "/en/about" vs "/about"
  translationLoadingRules: [], // per page group loading
  translationDirectory: {}, // translation directory names
  translations: {}, // { [translation_group1]: { [locale1]: {}, ... } }
  routes: {
    en: {
      // "primary_locale_segment": "translated_segment"
      produkty: "product",
      "produkty-ssr": "product-ssr",
    },
  },
});
