export const updateCartQuantity = (storage) => {
  document.querySelector(
    ".add-to-cart-button"
  ).innerHTML = `<i class="fa-solid fa-cart-shopping"> ${storage.length} </i>`;
};
