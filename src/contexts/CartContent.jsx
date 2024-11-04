import { createContext, useState, useEffect, useContext } from "react"
import { CartConfirmation } from "./CartConfirmation"

export const CartContent = createContext()

export const CartContentProvider = ({ children }) => {
    /**
     * Get the cart content if saved in local storage or empty array
     */
    const savedCart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    const [cart, updateCart] = useState(savedCart)

    /**
     * Save the cart in local storage
     */
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    /**
     *  To Sort the cart by decreasing price, may change latter 
     */
    function sortCart(array){
        return array.sort(
            (a,b)=>{
                return b.price - a.price
            }
        )
    }

    /**
     * To add a single product to the cart
     * @param {string} name 
     * @param {int} price 
     * @param {string} cover cover img url 
     * @param {int} quantity 
     */
    function addToCart(name, price, cover, quantity) {
        let inCartProduct = cart.find((product) => product.name == name)
        if (inCartProduct) {
            let tab = cart.filter(function (product) {
                return product.name != inCartProduct.name
            })
            updateCart(
                sortCart([
                    ...tab,
                    {
                        name: name,
                        price: price,
                        amount: inCartProduct.amount + quantity,
                        cover: inCartProduct.cover,
                    },
                ])
            )
        } else {
            updateCart(
                sortCart([
                    ...cart,
                    { name: name, price: price, amount: quantity, cover: cover },
                ])
            )
        }
    }

    return (
        <CartContent.Provider value={{ cart, updateCart, sortCart, addToCart }}>
            {children}
        </CartContent.Provider>
    )
}
