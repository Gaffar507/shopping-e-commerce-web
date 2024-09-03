const productTemplate = document.querySelector('#productTemplate')
const productContainer = document.querySelector('#productContainer')
// import { addToCart } from './addToCart'
import { addToCart } from './addToCart'
import {cardQuantityToggle} from './cardQuantityToggle'

export const AddProducts = (products)=> {

    if (!products) {
        return false
    }

    products.forEach(element => {
        const { id, name, image, price, description, category, stock } = element

        const cloneTemplate = document.importNode(productTemplate.content, true)

            // added id into the card
            cloneTemplate.querySelector('#cardValue').setAttribute('id', `card${id}`)
            // added attribute into the elements
            cloneTemplate.querySelector('.productImage').src = image;
            cloneTemplate.querySelector('.category').textContent = category;
            cloneTemplate.querySelector('.productName').textContent = name;
            cloneTemplate.querySelector('.productDescription').textContent = description;
            cloneTemplate.querySelector('.productPrice').textContent = `$${price}`;
            cloneTemplate.querySelector('.productActualPrice').textContent = `$${price + 100}`;
            cloneTemplate.querySelector('.productStock').textContent = stock;

            cloneTemplate.querySelector('.stockElement').addEventListener("click", (event)=> cardQuantityToggle(id, price, stock, event))

            cloneTemplate.querySelector('.add-to-cart-button').addEventListener("click", ()=> addToCart(id))

        productContainer.append(cloneTemplate)
});
}


