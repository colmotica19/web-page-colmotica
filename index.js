const selectCategory = document.querySelector('.selectCategory ')
const categorys = document.querySelectorAll(".selectCategory > .category");
const selectProduct = document.querySelector(".dropdown-content >.selectProduct");
const softwareSelectProduct = selectProduct.querySelectorAll('a')
categorys.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent === "Software" && selectCategory.dataset.currentCategory !== "Software") {
      Array.from(selectProduct.children).forEach((anchor) => anchor.remove())
      selectCategory.dataset.currentCategory = "Software"
      softwareSelectProduct.forEach((anchor) => {
        selectProduct.appendChild(anchor)
      })
    } else if (item.textContent === "Hardware" && selectCategory.dataset.currentCategory !== "Hardware") {
      Array.from(selectProduct.children).forEach((anchor) => anchor.remove())
      selectCategory.dataset.currentCategory = "Hardware"
      const readQRMachine = createProduct(
        "https://es.aliexpress.com/item/4000232174472.html?spm=a2g0o.productlist.main.4.7913912cBNosMD&algo_pvid=8c9417c1-73b6-4e78-a166-b835f9f73fef&aem_p4p_detail=20250724150123510917609698790000618498&pdp_ext_f=%7B%22order%22%3A%2227%22%2C%22eval%22%3A%221%22%7D&pdp_npi=4%40dis%21COP%21207282.63%21207282.63%21%21%2150.20%2150.20%21%402101c5a417533944831393610e460e%2110000000941993155%21sea%21CO%212615912669%21ACX&curPageLogUid=IdtQg3EQcwbB&search_p4p_id=20250724150123510917609698790000618498_1",
        "/jpg/Lector QR.png",
        "Lectora QR",
        "Lee codigo QR");
      const moduleDTR004 = createProduct(
        "https://es.aliexpress.com/item/4000999069820.html?spm=a2g0o.detail.pcDetailTopMoreOtherSeller.5.51945REP5REPmo&gps-id=pcDetailTopMoreOtherSeller&scm=1007.40050.354490.0&scm_id=1007.40050.354490.0&scm-url=1007.40050.354490.0&pvid=313a2064-4bc7-46d7-b385-70accccbe189&_t=gps-id:pcDetailTopMoreOtherSeller,scm-url:1007.40050.354490.0,pvid:313a2064-4bc7-46d7-b385-70accccbe189,tpp_buckets:668%232846%238115%232000&pdp_ext_f=%7B%22order%22%3A%22958%22%2C%22eval%22%3A%221%22%2C%22sceneId%22%3A%2230050%22%7D&pdp_npi=4%40dis%21COP%2174048.83%2165903.46%21%21%2118.00%2116.02%21%402103209b17526822777108739e5fdf%2110000013555389040%21rec%21CO%212615912669%21ACX#nav-description",
        "/jpg/Modulo DT-R004.png",
        "Modulo DT-R004");
      selectProduct.appendChild(readQRMachine)
      selectProduct.appendChild(moduleDTR004)
    }
  })
})

// hover productos
const dropdown = document.querySelector(".dropdown")
const dropdownContent = document.querySelector(".dropdown-content")
const btnHeaders = document.querySelectorAll(".btn-header__btn:not(.dropdown)")
btnHeaders.forEach((item) => {
  item.addEventListener("pointerover", () => {
  dropdownContent.style.display = ""
  })
});
dropdown.addEventListener("pointerover", () => {
  dropdownContent.style.display = "grid"
});
dropdown.addEventListener("click", () => {
  dropdownContent.style.display = dropdownContent.style.display === "grid" ? "" : "grid"
})
dropdownContent.addEventListener("pointerleave", () => {
  dropdownContent.style.display = ""
})

function createProduct(anchorSrc, imgSrc, name, description = "Descripción") {
  if (Array.from(arguments).some((item) => typeof item !== "string")) throw new TypeError("Los argumentos deberían ser string");
  const anchor = document.createElement('a')
  anchor.href = anchorSrc
  const headerProductItem = document.createElement('div')
  headerProductItem.classList.add("headerProductItem")
  const containerBodyAndFooterProduct = document.createElement('div')
  containerBodyAndFooterProduct.classList.add("containerBodyAndFooterProduct")
  const img = new Image()
  img.src = imgSrc
  img.style.filter = "none"
  headerProductItem.appendChild(img)
  const bodyProductItem = document.createElement('span')
  bodyProductItem.classList.add('bodyProductItem')
  bodyProductItem.textContent = name;
  const footerProductItem = document.createElement('span')
  footerProductItem.classList.add("footerProductItem");
  footerProductItem.textContent = description
  containerBodyAndFooterProduct.appendChild(bodyProductItem)
  containerBodyAndFooterProduct.appendChild(footerProductItem)
  anchor.appendChild(headerProductItem)
  anchor.appendChild(containerBodyAndFooterProduct)
  return anchor
}

// Acordeón para productos en menú lateral
document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.addEventListener('click', function () {
        const accordion = this.parentElement;
        accordion.classList.toggle('open');
    });
});