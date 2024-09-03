import { setLocalStorage } from "./setLocalStorage"
export const subTotalAdd =(id)=>{

    const storage = setLocalStorage()
    const foundCard = storage.filter((item)=>item.id=id)
    
    let total = 0
    foundCard.map(({totalPrice})=>{
            return total +=  totalPrice
    })

    const finalTotal = total? total + 50: total

    document.querySelector('.productSubTotal')?document.querySelector('.productSubTotal').textContent =` $${total.toFixed(2)}`:'';
    document.querySelector('.productFinalTotal')?document.querySelector('.productFinalTotal').textContent = `$${finalTotal.toFixed(2)}`:'';
}
