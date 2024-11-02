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
                <figure>
                    <img src={cover} alt={name} />
                </figure>
                <h2 className="font-bold">{name.toUpperCase()}</h2>
            </Link>
            <p>
                <strong>{price} €</strong>
            </p>
            {children}
            <Stars stars={stars} name={name} />
            {isBestSale ? <p className="popular">Meilleures ventes !</p> : null}
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
