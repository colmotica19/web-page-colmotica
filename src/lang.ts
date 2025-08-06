export async function setLanguage(lang = "en") {
  const res = await fetch(`/src/lang/${lang}.json`);
  const translations = await res.json();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && translations[key]) {
      el.textContent = translations[key];
    }
  });
}
