import { createContext, useState } from "react"

export const CartConfirmation = createContext()

export const CartConfirmationProvider = ({children}) => {

    const [addedProduct, updateAddedProduct] = useState(null)

    return (
        <CartConfirmation.Provider value={{addedProduct, updateAddedProduct}}>
            {children}
        </CartConfirmation.Provider>
    )
}
