

const gridBtn = document.getElementById("gridView");
const listBtn = document.getElementById("listView");
const products = document.querySelectorAll(".product-item");


//animacion de aparicion y desaparicion de las imagenes

function animateItems() {
products.forEach((item, index) => {
item.classList.remove("show"); // reinicia animación
setTimeout(() => {
  item.classList.add("show");
}, index * 300);
});
}

//cambio de vista de los procutos
//---------------------------
gridBtn.addEventListener("click", () => {
  products.forEach(p => {
    p.classList.remove("col-2");
    p.classList.add("col-md-3");
  });
  animateItems();
});

listBtn.addEventListener("click", () => {
  products.forEach(p => {
    p.classList.remove("col-md-3");
    p.classList.add("col-2");
  });
  animateItems();
});
//---------------------------

document.addEventListener("DOMContentLoaded", () => {
const items = document.querySelectorAll(".fade-in");
items.forEach((item, index) => {
setTimeout(() => {
item.classList.add("show");
}, index * 300); // 300ms de diferencia entre cada imagen
});
});