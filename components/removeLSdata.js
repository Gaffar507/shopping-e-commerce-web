import { setLocalStorage } from "./setLocalStorage"
import { subTotalAdd } from "./subTotalAdd";
import { showPopup } from "./showPopup";

export const removeLSdata =(id)=> {
    let exitingCart = setLocalStorage()

   let restValue = exitingCart.filter((item)=> item.id !== id)
   localStorage.setItem('myData', JSON.stringify(restValue));
    setLocalStorage()

    const removeDiv = document.querySelector(`#card${id}`)
    if (removeDiv) {
        removeDiv.remove()
    }
    subTotalAdd(id)

    showPopup(id, 'remove')
}