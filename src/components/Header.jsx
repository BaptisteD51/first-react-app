import { ShoppingCart } from "react-feather"
import { useContext } from "react"
import { CartVisibility } from "../contexts/CartVisibility"
import { Link } from "react-router-dom"

function Header() {
    const { toggleCartVisibility } = useContext(CartVisibility)

    return (
        <>
            <header className="bg-yellow-400">
                <div className="wrapper">
                    <section className="flex justify-between items-center py-4">
                        <p className="text-2xl">
                            <Link to="/">
                                Woufflenheim : véritable croquette alsacienne 🐕
                            </Link>
                        </p>
                        <button
                            className="button"
                            onClick={toggleCartVisibility}
                        >
                            <ShoppingCart color="white" />
                        </button>
                    </section>
                </div>
            </header>

            <section className="bg-gray-100">
                <nav className="bg-gray-100 wrapper">
                    <ul className="flex">
                        <li>
                            <Link to="/chien">
                                <p className="p-4 hover:bg-gray-50">Chien</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/chat">
                            <p className="p-4 hover:bg-gray-50">Chat</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/rongeur">
                                <p className="p-4 hover:bg-gray-50">Rongeur</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default Header
