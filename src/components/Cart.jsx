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
        let elmts = document.querySelectorAll("header, nav, aside, main, footer")
        if (visible) {
            elmts.forEach((elmt) => elmt.classList.add("blur"))
            document.body.classList.add("overflow-y-hidden")
        } else {
            elmts.forEach((elmt) => elmt.classList.remove("blur"))
            document.body.classList.remove("overflow-y-hidden")
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
                <div className="fixed bg-yellow-400 top-10 bottom-10 left-1/2 -translate-x-1/2 overflow-hidden rounded-3xl p-5 z-0 max-w-[90vw] shadow-lg shadow-gray-500">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-4xl font-bold">Panier</h2>
                        <button
                            className="button-small"
                            onClick={toggleCartVisibility}
                        >
                            <X color="white" />
                        </button>
                    </div>
                    {cart.length != 0 ? (
                        <ul className="h-[82.5%] overflow-y-scroll">
                            {cart.map((product, index) => (
                                <li
                                    key={product.name + index}
                                    className="mb-8 bg-white p-4 flex flex-wrap gap-3"
                                >
                                    <figure>
                                        <img
                                            src={product.cover}
                                            alt={product.name}
                                            className="w-96"
                                        />
                                    </figure>
                                    <div>
                                        <h3 className="text-2xl font-bold">
                                            {product.name}
                                        </h3>
                                        <p>Prix : {product.price} €</p>
                                        <Quantity
                                            amount={product.amount}
                                            name={product.name}
                                            cart={cart}
                                            updateCart={updateCart}
                                        />
                                        <p>
                                            Sous-total =
                                            {product.amount * product.price}
                                            €&nbsp;
                                        </p>
                                        <p>
                                            <button
                                                className="underline text-red-700 font-bold"
                                                onClick={() =>
                                                    deleteProduct(product.name)
                                                }
                                            >
                                                Supprimer
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

                    <div className="flex flex-wrap justify-between items-center pt-1">
                        <div>
                            <p className="text-bold text-xl font-bold">
                                Total : {total} €
                            </p>
                            <button
                                onClick={resetCart}
                                className="underline text-red-700 font-bold"
                            >
                                Vider le Panier
                            </button>
                        </div>

                        <button className="button-big" onClick={alertOrder}>
                            Commander
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart
