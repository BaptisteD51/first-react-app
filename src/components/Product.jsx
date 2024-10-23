import { useContext } from "react"
import Stars from "./product-parts/Stars.jsx"
import { ShoppingCart } from "react-feather"
import { CartContent } from "../contexts/CartContent.jsx"
import { Link } from "react-router-dom"

function Product({ children, name, cover, id, isBestSale, price, stars, animal }) {
    const { cart, updateCart, sortCart } = useContext(CartContent)

    function addToCart(name, price, cover) {
        let inCartPlant = cart.find((plant) => plant.name == name)
        if (inCartPlant) {
            let tab = cart.filter(function (plant) {
                return plant.name != inCartPlant.name
            })
            updateCart(
                sortCart([
                    ...tab,
                    {
                        name: name,
                        price: price,
                        amount: inCartPlant.amount + 1,
                        cover: inCartPlant.cover,
                    },
                ])
            )
        } else {
            updateCart(
                sortCart([
                    ...cart,
                    { name: name, price: price, amount: 1, cover: cover },
                ])
            )
        }
    }

    return (
        <li
            key={id}
            className="max-w-56 shadow-lg shadow-gray-500 p-4 rounded-2xl"
        >
            <figure>
                <img src={cover} alt={name} />
            </figure>
            <h2>{name.toUpperCase()}</h2>
            <p>
                <strong>{price} €</strong>
            </p>
            {children}
            <Stars stars={stars} name={name} />
            {isBestSale ? <p className="popular">Meilleures ventes !</p> : null}
            <p className="add-to-cart">
                <button
                    className="button flex"
                    onClick={() => addToCart(name, price, cover)}
                >
                    <ShoppingCart size={20} />
                    <span>&nbsp;Ajouter au panier</span>
                </button>
            </p>
            <p><Link to={`/${animal}/${id}`}>Lien</Link></p>
        </li>
    )
}

export default Product
