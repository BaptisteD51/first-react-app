import "../assets/css/Header.css";
import {ShoppingCart} from "react-feather";

function Header({ cartVisibility, updateCartVisibility }) {
    const title = "Woufflenheim : véritable croquette alsacienne 🐕";

    return (
        <header className="banner">
            <div className="container">
                <h1>{title}</h1>
                <button className="cart-icon" onClick={() => updateCartVisibility(!cartVisibility)}><ShoppingCart color="white" /></button>
            </div>
        </header>
    );
}

export default Header;
