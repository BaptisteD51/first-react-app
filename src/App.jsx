import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Banner from "./components/Banner.jsx";
import Shoppinglist from "./components/ShoppingList.jsx";
import Categories from "./components/Categories.jsx";

function App() {
    return (
        <>
            <Banner />
            <Categories />
            <Shoppinglist />
        </>
    );
}

export default App;
