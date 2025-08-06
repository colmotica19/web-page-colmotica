"use strict";
import { setLanguage } from "./lang.js";
import { querySelector } from "./utils.js";
const selectCategory = querySelector('.selectCategory');
const categoryItems = document.querySelectorAll('.selectCategory > .category');
const selectProduct = querySelector('.dropdown-content > .selectProduct');
const softwareLinks = selectProduct.querySelectorAll('a');
// Constantes para URLs e info de productos hardware
const hardwareProducts = [
    {
        url: "https://es.aliexpress.com/item/4000232174472.html?...",
        img: "/jpg/Lector QR.png",
        name: "Lectora QR",
        description: "Lee codigo QR",
    },
    {
        url: "https://es.aliexpress.com/item/4000999069820.html?...",
        img: "/jpg/Modulo DT-R004.png",
        name: "Modulo DT-R004",
        description: "Descripción",
    }
];
// Limpia los productos actuales del dropdown
function clearProducts() {
    while (selectProduct.firstChild) {
        selectProduct.removeChild(selectProduct.firstChild);
    }
}
// Agrega productos al dropdown
function appendProducts(products) {
    products.forEach((product) => {
        const element = createProduct(product.url, product.img, product.name, product.description);
        selectProduct.appendChild(element);
    });
}
// Crea un nodo <a> de producto
function createProduct(anchorSrc, imgSrc, name, description = "Descripción") {
    if ([anchorSrc, imgSrc, name, description].some(arg => typeof arg !== "string")) {
        throw new TypeError("Todos los argumentos deben ser strings");
    }
    const anchor = document.createElement('a');
    anchor.href = anchorSrc;
    const header = document.createElement('div');
    header.className = 'headerProductItem';
    const img = new Image();
    img.src = imgSrc;
    img.style.filter = "none";
    header.appendChild(img);
    const content = document.createElement('div');
    content.className = 'containerBodyAndFooterProduct';
    const body = document.createElement('span');
    body.className = 'bodyProductItem';
    body.textContent = name;
    const footer = document.createElement('span');
    footer.className = 'footerProductItem';
    footer.textContent = description;
    content.append(body, footer);
    anchor.append(header, content);
    return anchor;
}
// Cambia la categoría seleccionada
function handleCategorySelection(category) {
    const current = selectCategory.dataset.currentCategory;
    const selected = category.textContent;
    if (selected === current)
        return;
    clearProducts();
    selectCategory.dataset.currentCategory = selected;
    if (selected === "Software") {
        softwareLinks.forEach(link => selectProduct.appendChild(link));
    }
    else if (selected === "Hardware") {
        appendProducts(hardwareProducts);
    }
}
// Asignar eventos de categoría
categoryItems.forEach(item => item.addEventListener("click", () => handleCategorySelection(item)));
// Hover y toggle del dropdown
const dropdown = querySelector(".dropdown");
const dropdownContent = querySelector(".dropdown-content");
// const headerButtons = document.querySelectorAll(".btn-header__btn:not(.dropdown)");
// headerButtons.forEach(btn =>
//   btn.addEventListener("pointerover", () => {
//     dropdownContent.style.display = "";
//   })
// );
dropdown.addEventListener("pointerover", () => {
    dropdownContent.classList.add('show');
});
dropdown.addEventListener("click", () => {
    dropdownContent.classList.toggle('show');
});
dropdownContent.addEventListener("pointerleave", () => {
    dropdownContent.classList.remove('show');
});
// Acordeón menú lateral
document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.parentElement) {
            btn.parentElement.classList.toggle('open');
        }
        else {
            throw new Error("No se pudo encontrar el elemento padre");
        }
    });
});
// Botón de idioma
const btnLang = querySelector('.btnIdioma');
btnLang.addEventListener('click', () => {
    const lang = document.documentElement.lang === "es" ? "en" : "es";
    document.documentElement.lang = lang;
    const langTag = querySelector('.langTag', btnLang);
    langTag.textContent = lang;
    setLanguage(lang);
});
// // modal en telefonos
// const modalOfNavInTelephone = querySelector('.modalOfNavInTelephone');
// const openModalInTelephone = querySelector('.openModalInTelephone');
// const closeModal = querySelector('.closeModal', modalOfNavInTelephone);
// closeModal.addEventListener("click", () => {
//     setTimeout(() => modalOfNavInTelephone.close(), 300); // Es una espera para la animación
// });
// openModalInTelephone.addEventListener('click', () => {
//     setTimeout(() => modalOfNavInTelephone.showModal(), 300); // Es una espera para la animación
// });
// // Si hace click afuera el modal se cierra
// modalOfNavInTelephone.addEventListener('click', (event) => {
//     const rect = querySelector('.modalContent', modalOfNavInTelephone).getBoundingClientRect();
//     if (!rect)
//         return;
//     const clickX = event.clientX;
//     const clickY = event.clientY;
//     const clickedOutside = clickX < rect.left ||
//         clickX > rect.right ||
//         clickY < rect.top ||
//         clickY > rect.bottom;
//     if (clickedOutside) {
//         modalOfNavInTelephone.close();
//     }
// });