import { useEffect, useContext, useState } from "react"
import { X } from "react-feather"
import Quantity from "./Quantity"
import { CartVisibility } from "../contexts/CartVisibility"
import { CartContent } from "../contexts/CartContent"

function Cart() {
    const { cartVisibility, toggleCartVisibility } = useContext(CartVisibility)
    const { cart, updateCart } = useContext(CartContent)

    /**
     *
     * @param {*} array
     * @returns {array}
     *
     * Sort the cart item so that they are always displayed in the same order after updateCart.
     * In descending order.
     */

    function resetCart() {
        updateCart([])
    }

    function totalCart() {
        let total = cart.reduce(function (acc, product) {
            return acc + product.price * product.amount
        }, 0)
        return total
    }

    const total = totalCart()

    function deleteProduct(name) {
        let newCart = cart.filter(function (product) {
            return product.name != name
        })
        updateCart(newCart)
    }

    /* Update document.title with current total */
    useEffect(() => {
        document.title = `Panier : ${total} € | Woufflenheim`
    }, [total])

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
        alert(
            "Ce site est un site de démonstration. Les produits à vendre sont fictifs"
        )
    }

    if (!cartVisibility) {
        return null
    }

    return (
        <>
            {
                <div className="cart fixed bg-yellow-400 inset-10 overflow-hidden rounded-3xl p-5">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-4xl font-bold">Panier</h2>
                        <button
                            className="button"
                            onClick={toggleCartVisibility}
                        >
                            <X color="white" />
                        </button>
                    </div>
                    {cart.length != 0 ? (
                        <ul className="h-[75%] overflow-scroll">
                            {cart.map((product, index) => (
                                <li key={product.name + index} className="mb-8 max-w-96">
                                    <figure>
                                        <img
                                            src={product.cover}
                                            alt={product.name}
                                            className="w-full max-w-96"
                                        />
                                    </figure>
                                    <div>
                                        <h3 className="text-2xl font-bold">{product.name}</h3>
                                        <p>Prix : {product.price} €</p>
                                        <Quantity
                                            amount={product.amount}
                                            name={product.name}
                                            cart={cart}
                                            updateCart={updateCart}
                                        />
                                        <p>
                                            {" "}
                                            Sous-total ={" "}
                                            {product.amount * product.price} €&nbsp;
                                        </p>
                                        <p>
                                            <button
                                                className="discreet-button"
                                                onClick={() =>
                                                    deleteProduct(product.name)
                                                }
                                            >
                                                {" "}
                                                Supprimer{" "}
                                            </button>
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <ul>
                            <p>Pas de produit dans le panier</p>
                        </ul>
                    )}

                    <div className="total-order">
                        <div>
                            <p className="total-cart"> Total : {total} €</p>
                            <button
                                onClick={resetCart}
                                className="discreet-button"
                            >
                                Vider le Panier
                            </button>
                        </div>

                        <button className="cta" onClick={alertOrder}>
                            Commander
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart
