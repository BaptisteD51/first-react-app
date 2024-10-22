import { useContext, useEffect } from "react"
import Product from "./Product"
import Property from "./product-parts/Property"
import { FilterSort } from "../contexts/FilterSort"

function ShoppingList({ data }) {
    // Pour travailler sur une copie, sinon pointe toujours sur la même référence. Seuls les types primitifs sont copiés par valeur
    let displayedProducts = [...data]

    // Filter products
    const { filter } = useContext(FilterSort)

    function filterProducts(products, filter) {
        if (filter == null) {
            return products
        }

        Object.entries(filter).forEach(function ([key, value]) {
            products = products.filter(function (product) {
                return (product.filters[key] == value) | (value == "all")
            })
        })

        return products
    }

    displayedProducts = filterProducts(displayedProducts, filter)

    // Sort products

    const { sorting } = useContext(FilterSort)

    function sortPriceAscending(products) {
        products.sort(function (a, b) {
            return a.price - b.price
        })
        return products
    }

    function sortPriceDescending(products) {
        products.sort(function (a, b) {
            return b.price - a.price
        })
        return products
    }

    function sortByPopularity(products) {
        products.sort(function (a, b) {
            if (a.isBestSale == true && b.isBestSale == true) {
                return 0
            } else if (a.isBestSale == true && b.isBestSale == false) {
                return -1
            } else if (a.isBestSale == false && b.isBestSale == true) {
                return 1
            }
        })
        return products
    }

    function sortByEvaluation(products) {
        products.sort(function (a, b) {
            return b.stars - a.stars
        })
        return products
    }

    switch (sorting) {
        case "none":
            displayedProducts = filterProducts(data,filter)
            break
        case "price-ascending":
            displayedProducts = sortPriceAscending(displayedProducts)
            break
        case "price-descending":
            displayedProducts = sortPriceDescending(displayedProducts)
            break
        case "popularity":
            displayedProducts = sortByPopularity(displayedProducts)
            break
        case "stars":
            displayedProducts = sortByEvaluation(displayedProducts)
    }

    const properties = Object.getOwnPropertyNames(data[0].filters)

    return (
        <ul className="flex flex-wrap gap-10 justify-center">
            {displayedProducts.length != 0 ? (
                displayedProducts.map((product, index) => (
                    <Product
                        name={product.name}
                        id={product.id}
                        height={product.height}
                        age={product.age}
                        cover={product.cover}
                        isBestSale={product.isBestSale}
                        price={product.price}
                        stars={product.stars}
                        key={`${product.name}-${index}`}
                    >
                        {properties.map((property, index) => (
                            <Property
                                property={property}
                                value={product.filters[property]}
                                key={`property-${index}`}
                            />
                        ))}
                    </Product>
                ))
            ) : (
                <p>Pas de produit à afficher pour les filtres sélectionnés</p>
            )}
        </ul>
    )
}

export default ShoppingList
