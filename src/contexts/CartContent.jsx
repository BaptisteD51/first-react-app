import { createContext, useState, useEffect } from "react"

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

    return (
        <CartContent.Provider value={{ cart, updateCart, sortCart }}>
            {children}
        </CartContent.Provider>
    )
}
