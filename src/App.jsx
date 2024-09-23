import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Banner from "./components/Banner.jsx";
import Shoppinglist from "./components/ShoppingList.jsx";
import Categories from "./components/Categories.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <>
            <Banner />
            <Categories />
            <Shoppinglist />
            <Footer />
        </>
    );
}

export default App;
