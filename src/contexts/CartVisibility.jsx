import { createContext, useState } from "react";

export const CartVisibility = createContext()

export const CartVisibilityProvider = ({children})=>{
    const [cartVisibility, updateCartVisibility] = useState(false)
    const toggleCartVisibility = () => {
        updateCartVisibility(!cartVisibility)
    }

    return (
        <CartVisibility.Provider value={{cartVisibility, toggleCartVisibility}}>
            {children}
        </CartVisibility.Provider>
    )
}