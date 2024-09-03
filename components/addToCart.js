import { setLocalStorage } from "./setLocalStorage";
import { showPopup } from "./showPopup";
setLocalStorage()

export const addToCart =(id)=> {
    // show popup
    showPopup(id, 'add')

    let setStorage = setLocalStorage()
    const card = document.querySelector(`#card${id}`);
    let price = card.querySelector('.productPrice').innerHTML
    let quantity = card.querySelector('.productQuantity').innerHTML
        price = price.replace('$', '')
        quantity = Number(quantity)
   let totalPrice = Number(price * quantity) 

    // item repeatation check
        let previousId = setStorage.find((item)=> item.id === id);


    // update quantity and price in same id
        if (previousId && quantity>1) {
            quantity = previousId.quantity + quantity
            totalPrice = quantity * price
            
            let updated = {id, quantity, totalPrice}

            const updatedStore = setStorage.map((item)=> item.id === id? updated: item)

            localStorage.setItem('myData', JSON.stringify(updatedStore));
        }

        if (previousId) {
            return false
        }

        //    set data to local Storage
        setStorage.push({id, quantity, totalPrice})
        localStorage.setItem('myData', JSON.stringify(setStorage));
        setLocalStorage();
}