import { useContext } from "react"
import Stars from "./product-parts/Stars.jsx"
import { ShoppingCart } from "react-feather"
import { CartContent } from "../contexts/CartContent.jsx"
import { Link } from "react-router-dom"

function Product({
    children,
    name,
    cover,
    id,
    isBestSale,
    price,
    stars,
    animal,
}) {
    const { addToCart } = useContext(CartContent)

    return (
        <li
            key={id}
            className="max-w-56 shadow-lg shadow-gray-500 p-4 rounded-2xl"
        >
            <Link to={`/${animal}/${id}`}>
                <figure className="relative">
                    <img src={cover} alt={name} />
                    {isBestSale ? <p className="font-bold text-red-700 bg-yellow-400/60 absolute top-0 right-0 px-1">Meilleures ventes !</p> : null}
                </figure>
                <h2 className="font-bold text-xl">{name.toUpperCase()}</h2>
            </Link>
            <p>
                <strong>{price} €</strong>
            </p>
            {children}
            <Stars stars={stars} name={name} />
            <p>
                <button
                    className="button-small px-3 flex"
                    onClick={() => addToCart(name, price, cover, 1)}
                >
                    <ShoppingCart size={20} />
                    <span>&nbsp;Ajouter au panier</span>
                </button>
            </p>
        </li>
    )
}

export default Product
