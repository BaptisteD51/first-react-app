import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Shoppinglist from "./components/ShoppingList.jsx";
import Categories from "./components/Categories.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./components/Cart.jsx"
import "./assets/css/App.css"

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
    const [cartVisibility, updateCartVisibility] = useState(false)
    const [sorting, updateSorting] = useState("none")

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <>
            <Header
                cartVisibility={cartVisibility}
                updateCartVisibility={updateCartVisibility}
            />
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
                />
            </section>
            <Cart
                cart={cart}
                updateCart={updateCart}
                cartVisibility={cartVisibility}
                updateCartVisibility={updateCartVisibility}
            />

            
            <Footer />
            

        </>
    );
}

export default App;
