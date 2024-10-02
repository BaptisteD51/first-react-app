import { useState, useEffect } from "react"
import "../assets/css/Cart.css"
import {X} from "react-feather";


function Cart({ cart, updateCart, cartVisibility, updateCartVisibility }) {

    const monsteraPrice = 8

    function resetCart() {
        updateCart([])
    }

    function totalCart(){
        let total = cart.reduce(function(acc, plant){
            return acc + (plant.price * plant.amount)
        },0)
        return total
    }

    const total = totalCart()

    function deleteProduct(name){
        let newCart = cart.filter(function(plant){
            return plant.name != name
        })
        updateCart(newCart)
    }

    /* Update document.title with current total */
    useEffect(()=>{
        document.title = `Produits : ${total} € | Woufflenheim`
    },[cart])

    useEffect(()=>{
        const visible = cartVisibility
        let elmts = document.querySelectorAll("header, aside, main, footer")
        if(visible){
            elmts.forEach((elmt)=>elmt.classList.add("blur"))
            document.body.classList.add("no-scroll")
        }else{
            elmts.forEach((elmt)=>elmt.classList.remove("blur"))
            document.body.classList.remove("no-scroll")
        }
    },[cartVisibility])

    return <>
        {
            cartVisibility ? (
                <div className="cart">
                    <button className="x-mark" onClick={() => updateCartVisibility(!cartVisibility)}><X color="white"/></button>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map((plant, index) => 
                            <li key={plant.name + index}>
                                <p>
                                    {plant.name} x {plant.amount} = {plant.amount*plant.price} €&nbsp;
                                    <button className="delete-item" onClick={()=>deleteProduct(plant.name)}> Supprimer </button>
                                </p>
                            </li>
                        )}
                    </ul>
                    <h3> Total : {total} €</h3>
                    <button onClick={resetCart}>Vider le Panier</button>
                </div>
            ) : (
                null
            )
        }
    </>
}

export default Cart