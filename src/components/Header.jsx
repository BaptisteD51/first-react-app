import { ShoppingCart } from "react-feather"
import { useContext, useMemo } from "react"
import { CartVisibility } from "../contexts/CartVisibility"
import { Link } from "react-router-dom"
import { CartContent } from "../contexts/CartContent"

function Header() {
    const { toggleCartVisibility } = useContext(CartVisibility)

    const { cart } = useContext(CartContent)

    function cartTotalItems(cart){
        let total = cart.reduce(function(acc,current){
            return acc + current.amount
        },0)
        return total
    }

    const totalItems = useMemo(() => cartTotalItems(cart),[cart])

    console.log(totalItems)
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
                            className="button relative"
                            onClick={toggleCartVisibility}
                        >
                            <ShoppingCart color="white" />
                            <div className="absolute -bottom-2 -right-2 bg-orange-400 text-white text-sm px-[6px] rounded-full border-[2px] border-rose-950 font-bold">{totalItems}</div>
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
