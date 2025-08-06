document.addEventListener('DOMContentLoaded', () => {
  const userLang = navigator.language || navigator.userLanguage; // ej: "es-CO", "en-US"
  const lang = userLang.startsWith('es') ? 'es' : 'en'
  setLanguage()
  document.documentElement.lang = lang
  console.log(userLang)
})

export async function setLanguage(lang = "en") {
  const res = await fetch(`/lang/${lang}.json`);
  const translations = await res.json();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && translations[key]) {
      el.innerHTML = translations[key];
    }
  });
}