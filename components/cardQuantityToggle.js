import { setLocalStorage } from "./setLocalStorage";
import { subTotalAdd } from "./subTotalAdd";

export const cardQuantityToggle = (id, price, stock, event, updatedValue) => {

  const setStorage = setLocalStorage();
  const card = document.querySelector(`#card${id}`);
  const productQuantity = card.querySelector(".productQuantity");

  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

  if (updatedValue) {
    quantity =
      parseInt(productQuantity.getAttribute("data-quantity")) || updatedValue.quantity;
  }

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    }
    if (quantity === stock) {
      quantity = stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  productQuantity.textContent = quantity;
  productQuantity.setAttribute("data-quantity", quantity);


  // cart price update
    quantity = Number(quantity);
  let  totalPrice = Number(price * quantity);

  totalPrice = parseFloat (totalPrice.toFixed(2))
  card.querySelector(".cartProductPrice")?  card.querySelector(".cartProductPrice").innerHTML = totalPrice: '';

  // update quantity and price in same id
  if (quantity) {
    let updated = { id, quantity, totalPrice };

    const updatedStore = setStorage.map((item) =>
      item.id === id ? updated : item
    );
    localStorage.setItem("myData", JSON.stringify(updatedStore));
  }

  // sub total added
  subTotalAdd(id);
};
