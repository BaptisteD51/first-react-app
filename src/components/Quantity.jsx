import {Minus, Plus } from "react-feather"

function Quantity({amount,name,cart,updateCart,sortCart}){
    function changeAmount(amount,name,direction){
        let product = cart.find((product)=>product.name == name)
        let newCart = cart.filter((product)=>product.name != name)
        
        product.amount = product.amount + direction
        product.amount < 1 ? product.amount = 1 : product.amount = product.amount
        updateCart(sortCart([...newCart, product])) 
    }

    return (
        <p>
            Quantité =&nbsp;
            <button onClick={()=>changeAmount(amount,name,-1)}><Minus size={10} /></button>
            <strong> {amount} </strong>
            <button onClick={()=>changeAmount(amount,name,1)}><Plus size={10}  /></button>
        </p>
    )
}

export default Quantity