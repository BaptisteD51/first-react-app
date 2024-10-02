import { products } from "../data/products.js"
import "../assets/css/ShoppingList.css"
import CareScale from "./Age"
import Product from "./Product"
import { useEffect } from "react"

function ShoppingList({ cart, updateCart, filter, sorting }) {
    // Pour travailler sur une copie, sinon pointe toujours sur la même référence. Seuls les types primitifs sont copiés par valeur
    let displayedProducts = [...products]
    
    // Filter products
    function filterProducts(products){
        if (filter.category != "all") {
            products = products.filter(function (product) {
                return product.category == filter.category
            })
        }
        
        if (filter.age != "all") {
            products = products.filter(function (product) {
                return product.age == filter.age
            })
        }
    
        if (filter.height != "all") {
            products = products.filter(function (product) {
                return product.height == filter.height
            })
        }

        return products
    }

    displayedProducts = filterProducts(displayedProducts)

    

    // Sort products
    function sortPriceAscending(products){
        products.sort(function(a,b){
            return a.price - b.price
        })
        return products
    }

    function sortPriceDescending(products){
        products.sort(function(a,b){
            return b.price - a.price
        })
        return products
    }

    switch(sorting){
        case "none":
            displayedProducts = filterProducts(products)
            break
        case "price-ascending":
            displayedProducts = sortPriceAscending(displayedProducts)
            break
        case "price-descending":
            displayedProducts = sortPriceDescending(displayedProducts)
            break
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
