import { useEffect, useState, useContext } from "react";
import Shoppinglist from "../components/ShoppingList.jsx";
import Categories from "../components/Categories.jsx";
import Cart from "../components/Cart.jsx"
import "../assets/css/App.css"
import {CartVisibility} from "../contexts/CartVisibility.jsx"

function App() {
    const savedCart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    const [cart, updateCart] = useState(savedCart)
    const [filter, updateFilter] = useState(
        {
            category: "all",
            height: "all",
            age: "all"
        }
    )
    const {cartVisibility, toggleCartVisibility} = useContext(CartVisibility)
    const [sorting, updateSorting] = useState("none")

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])


    /**
     * 
     * @param {*} array 
     * @returns {array}
     * 
     * Sort the cart item so that they are always displayed in the same order after updateCart.
     * In descending order.
     */
    function sortCart(array){
        return array.sort(
            (a,b)=>{
                return b.price - a.price
            }
        )
    }

    return (
        <>
            <section className="page">
                <Categories
                    filter={filter}
                    updateFilter={updateFilter}
                    sorting={sorting}
                    updateSorting={updateSorting}
                />
                <Shoppinglist
                    cart={cart}
                    updateCart={updateCart}
                    filter={filter}
                    sorting={sorting}
                    sortCart={sortCart}
                />
            </section>
            <Cart
                cart={cart}
                updateCart={updateCart}
                cartVisibility={cartVisibility}
                updateCartVisibility={toggleCartVisibility}
                sortCart={sortCart}
            />            

        </>
    );
}

export default App;
