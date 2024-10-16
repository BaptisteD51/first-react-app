import "../assets/css/Header.css";
import {ShoppingCart} from "react-feather";
import { useContext } from "react";
import { CartVisibility } from "../contexts/CartVisibility";

function Header() {
    const title = "Woufflenheim : véritable croquette alsacienne 🐕";

    const {toggleCartVisibility} = useContext(CartVisibility)

    return (
        <header className="banner">
            <div className="container">
                <h1>{title}</h1>
                <button className="cart-icon" onClick={toggleCartVisibility}><ShoppingCart color="white" /></button>
            </div>
        </header>
    );
}

export default Header;
