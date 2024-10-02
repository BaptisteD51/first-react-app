import Age from "./Age"
import "../assets/css/Product.css"
import { useEffect } from "react"
import Height from "./Height"
import Stars from "./Stars"

function Product({ cart, updateCart, name, cover, id, height, age, isBestSale, price, stars }) {
    function addToCart(name, price) {
        let inCartPlant = cart.find((plant) => plant.name == name)
        if (inCartPlant) {
            let tab = cart.filter(function (plant) {
                return plant.name != inCartPlant.name
            })
            updateCart([...tab, { name: name, price: price, amount: inCartPlant.amount + 1 }])
        } else {
            updateCart([...cart, { name: name, price: price, amount: 1 }])
        }

    }

    return (
        <li key={id} className="product">
            <figure><img src={cover} alt={name} /></figure>
            <h2>{name.toUpperCase()}</h2>
            <p className="price">{price} €</p>
            <Age age={age} />
            <Height height={height} />
            <Stars stars={stars}/>
            {isBestSale ? <p className="popular">Meilleures ventes !</p> : null}
            <button onClick={() => addToCart(name, price)}>Ajouter au panier</button>
        </li>
    )
}

export default Product
