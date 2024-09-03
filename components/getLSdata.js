import { setLocalStorage } from "./setLocalStorage";

export const getLSdata = (id, price) => {
  const localStorage = setLocalStorage();
  const existingData = localStorage.find((item) => item.id === id);

  let quantity = 1;

  if (existingData) {
    price = existingData.totalPrice;

    quantity = existingData.quantity;
  }
  return { price, quantity };
};
