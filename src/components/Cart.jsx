import { useState, useEffect } from "react"
import "../assets/css/Cart.css"

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
        document.title = "Plantes : " + total + " €"
    },[cart])

    return <>
        {
            cartVisibility ? (
                <div className="cart">
                    <button className="x-mark" onClick={() => updateCartVisibility(!cartVisibility)}>X</button>
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