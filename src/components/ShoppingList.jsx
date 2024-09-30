import { products } from "../data/products.js"
import "../assets/css/ShoppingList.css"
import CareScale from "./Age"
import Product from "./Product"

function ShoppingList({ cart, updateCart, filter, updateFilter }) {
    let displayedProducts = products

    if (filter.category != "all") {
        displayedProducts = displayedProducts.filter(function (product) {
            return product.category == filter.category
        })
    }
    
    if (filter.age != "all") {
        displayedProducts = displayedProducts.filter(function (product) {
            return product.age == filter.age
        })
    }

    if (filter.height != "all") {
        displayedProducts = displayedProducts.filter(function (product) {
            return product.height == filter.height
        })
    }

    return (

        <main>
            <ul className="product-list">
                {displayedProducts.map((product) => (
                    <Product
                        cart={cart}
                        updateCart={updateCart}
                        name={product.name}
                        id={product.id}
                        height={product.height}
                        age={product.age}
                        cover={product.cover}
                        isBestSale={product.isBestSale}
                        price={product.price}
                    />
                ))}
            </ul>
        </main>

    )
}

export default ShoppingList
