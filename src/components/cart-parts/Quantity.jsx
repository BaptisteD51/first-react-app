import {Minus, Plus } from "react-feather"
import { useContext } from "react"
import { CartContent } from "../../contexts/CartContent"

function Quantity({amount,name,cart,updateCart}){
    const { sortCart } = useContext(CartContent)

    function changeAmount(amount,name,direction){
        let product = cart.find((product)=>product.name == name)
        let newCart = cart.filter((product)=>product.name != name)
        
        product.amount = product.amount + direction
        product.amount < 1 ? product.amount = 1 : product.amount
        updateCart(sortCart([...newCart, product])) 
    }

    return (
        <p>
            Quantité =&nbsp;
            <button onClick={()=>changeAmount(amount,name,-1)} className="bg-slate-200 p-2 border-[2px] border-slate-500 rounded-md"><Minus size={10}/></button>
            <strong> {amount} </strong>
            <button onClick={()=>changeAmount(amount,name,1)} className="bg-slate-200 p-2 border-[2px] border-slate-500 rounded-md"><Plus size={10}  /></button>
        </p>
    )
}

export default Quantity