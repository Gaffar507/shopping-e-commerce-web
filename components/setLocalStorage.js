import { updateCartQuantity } from "./updateCartQuantity";
export const setLocalStorage = () => {
  const result = localStorage.getItem("myData")
    ? JSON.parse(localStorage.getItem("myData"))
    : [];
  updateCartQuantity(result);
  return result;
};
