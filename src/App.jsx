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
    const [filter, updateFilter] = useState(false)
    const [footVisibility, changeFootVisibility] = useState(true)
    const [cartVisibility, updateCartVisibility] = useState(false)

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])
    
    return (
        <>
            <Header
                cartVisibility={cartVisibility}
                updateCartVisibility={updateCartVisibility}
            />
            <Cart
                cart={cart}
                updateCart={updateCart}
                cartVisibility={cartVisibility}
                updateCartVisibility={updateCartVisibility}
            />
            <Categories
                filter={filter}
                updateFilter={updateFilter}
            />
            <Shoppinglist
                cart={cart}
                updateCart={updateCart}
                filter={filter}
                updateFilter={updateFilter}
            />
            {footVisibility ? (
                <Footer footVisibility={footVisibility} changeFootVisibility={changeFootVisibility} />
                ) : (
                    <button onClick={() => changeFootVisibility(!footVisibility)}>Montrer le footer</button>
                )
            }
        </>
    );
}

export default App;
