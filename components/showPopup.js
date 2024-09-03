export const showPopup = (id, message) => {
  const popupContainer = document.querySelector(".popup-container");
  const section = document.createElement("section");

  if (message === "add") {
    section.classList.add("blue");
    section.innerHTML = `<p>Product id-${id} added to the cart!</p>`;
  }
  if (message === "remove") {
    section.innerHTML = `<p>Product id-${id} removed from the cart!</p>`;
    section.classList.add("red");
  }

  setTimeout(() => {
    section.innerHTML = "";
    section.remove();
  }, 1200);

  popupContainer.appendChild(section);
};
