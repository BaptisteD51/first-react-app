import { useState, useEffect } from "react"
import "../assets/css/Cart.css"
import { X } from "react-feather"
import Quantity from "./Quantity"


function Cart({ cart, updateCart, cartVisibility, updateCartVisibility, sortCart }) {

    function resetCart() {
        updateCart([])
    }

    function totalCart() {
        let total = cart.reduce(function (acc, plant) {
            return acc + (plant.price * plant.amount)
        }, 0)
        return total
    }

    const total = totalCart()

    function deleteProduct(name) {
        let newCart = cart.filter(function (plant) {
            return plant.name != name
        })
        updateCart(newCart)
    }

    /* Update document.title with current total */
    useEffect(() => {
        document.title = `Panier : ${total} € | Woufflenheim`
    }, [cart])

    useEffect(() => {
        const visible = cartVisibility
        let elmts = document.querySelectorAll("header, aside, main, footer")
        if (visible) {
            elmts.forEach((elmt) => elmt.classList.add("blur"))
            document.body.classList.add("no-scroll")
        } else {
            elmts.forEach((elmt) => elmt.classList.remove("blur"))
            document.body.classList.remove("no-scroll")
        }
    }, [cartVisibility])

    function alertOrder() {
        alert("Ce site est un site de démonstration. Les produits à vendre sont fictifs")
    }

    return <>
        {
            cartVisibility ? (
                <div className="cart">
                    <button className="x-mark" onClick={() => updateCartVisibility(!cartVisibility)}><X color="white" /></button>
                    <h2>Panier</h2>
                    {
                        cart.length != 0 ? (
                            <ul>
                                {cart.map((plant, index) =>
                                    <li key={plant.name + index}>
                                        <figure>
                                            <img src={plant.cover} alt={plant.name} />
                                        </figure>
                                        <div>
                                            <h3>{plant.name}</h3>
                                            <p>Prix : {plant.price} €</p>
                                            <Quantity amount={plant.amount} name={plant.name} cart={cart} updateCart={updateCart} sortCart={sortCart} />
                                            <p> Sous-total = {plant.amount * plant.price} €&nbsp;</p>
                                            <p><button className="discreet-button" onClick={() => deleteProduct(plant.name)}> Supprimer </button></p>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        ) : (
                            <ul>
                                <p>Pas de produit dans le panier</p>
                            </ul>
                        )
                    }

                    <div className="total-order">
                        <div>
                            <p className="total-cart"> Total : {total} €</p>
                            <button onClick={resetCart} className="discreet-button">Vider le Panier</button>
                        </div>

                        <button className="cta" onClick={alertOrder}>Commander</button>
                    </div>

                </div>
            ) : (
                null
            )
        }
    </>
}

export default Cart