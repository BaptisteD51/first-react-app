import "../assets/css/Header.css";
import Cart from "./Cart";

function Header({cartVisibility, updateCartVisibility}) {
    const title = "Woufflenheim : véritable croquette alsacienne 🐕";

    return (
        <header className="banner">
            <h1>{title}</h1>
            <button className="open-close" onClick={() => updateCartVisibility(!cartVisibility)}>Panier</button>
        </header>
    );
}

export default Header;
