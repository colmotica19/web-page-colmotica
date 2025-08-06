document.addEventListener('DOMContentLoaded', () => {
  const userLang = navigator.language || navigator.userLanguage; // ej: "es-CO", "en-US"
  const lang = userLang.startsWith('es') ? 'es' : 'en'
  setLanguage(lang)
  document.documentElement.lang = lang
  console.log(userLang)
})

const mapLang = new Map();

export async function setLanguage(lang = "en") {
  let jsonLang;
  if (!mapLang.has(lang)) {
    const res = await fetch(`/lang/${lang}.json`);
    const translations = await res.json();
    jsonLang = translations
    mapLang.set(lang, jsonLang);
  } else {
    jsonLang = mapLang.get(lang)
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && jsonLang[key]) {
      el.innerHTML = jsonLang[key];
    }
  });
}