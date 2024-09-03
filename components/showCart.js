import products from '../api/products.json'
import  {setLocalStorage}  from './setLocalStorage'
import { cardQuantityToggle } from './cardQuantityToggle'
import { getLSdata } from './getLSdata'
import { removeLSdata } from './removeLSdata'
import { subTotalAdd } from './subTotalAdd'

const productContainer = document.querySelector('#productCartContainer');
const productTemplate = document.querySelector('#productCartTemplate')

const setStorage = setLocalStorage()
const newFound = products.filter((card)=>{
    return setStorage.find(({id})=> card.id === id )
})

export const showCart = (newFound)=> {

    if (!newFound) {
        return false
    }

    newFound.forEach(element => {
        const { id, name, image, price, category, stock } = element

        const cloneTemplate = document.importNode(productTemplate.content, true)
            // get total quantity and price from localStorage
            const updatedValue = getLSdata(id, price)
            let totalPrice = updatedValue.price
                    totalPrice = parseFloat(totalPrice.toFixed(2))

            // added id into the card
            cloneTemplate.querySelector('#cardValue').setAttribute('id', `card${id}`)

            // added attribute into the elements
            cloneTemplate.querySelector('.productImage').src = image;
            cloneTemplate.querySelector('.category').textContent = category;
            cloneTemplate.querySelector('.productName').textContent = name;
            cloneTemplate.querySelector('.cartProductPrice').textContent = totalPrice
            cloneTemplate.querySelector('.productQuantity').textContent = updatedValue.quantity


            cloneTemplate.querySelector('.stockElement').addEventListener("click", (event)=> cardQuantityToggle(id, price, stock, event, updatedValue))
        
            // remove cart from local storage
            cloneTemplate.querySelector('.remove-to-cart-button').addEventListener("click", ()=> removeLSdata(id))

            // sub total
           subTotalAdd(id)

        productContainer.append(cloneTemplate)
        
});
}

showCart(newFound)