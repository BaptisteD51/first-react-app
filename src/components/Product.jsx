import Age from "./Age"
import "../assets/css/Product.css"
import { useEffect, useContext } from "react"
import Height from "./Height"
import Stars from "./Stars"
import { ShoppingCart } from "react-feather"
import { CartContent } from "../contexts/CartContent.jsx"

function Product({
    name,
    cover,
    id,
    height,
    age,
    isBestSale,
    price,
    stars,
}) {
    const { cart, updateCart,sortCart } = useContext(CartContent)

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
        <li key={id} className="product">
            <figure>
                <img src={cover} alt={name} />
            </figure>
            <h2>{name.toUpperCase()}</h2>
            <p className="price">
                <strong>{price} €</strong>
            </p>
            <Age age={age} />
            <Height height={height} />
            <Stars stars={stars} name={name} />
            {isBestSale ? <p className="popular">Meilleures ventes !</p> : null}
            <p className="add-to-cart">
                <button
                    className="cta"
                    onClick={() => addToCart(name, price, cover)}
                >
                    <ShoppingCart size={20} />
                    <span>&nbsp;Ajouter au panier</span>
                </button>
            </p>
        </li>
    )
}

export default Product
