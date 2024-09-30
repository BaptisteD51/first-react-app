import { plantList } from "../data/plantList"
import "../assets/css/ShoppingList.css"
import CareScale from "./CareScale"
import Product from "./Product"

function ShoppingList({ cart, updateCart, filter, updateFilter }) {
    let displayedPlants = plantList
    console.log(typeof (filter))
    if (filter) {
        displayedPlants = plantList.filter(function (plant) {
            return plant.category == filter
        })
    }


    return (
        <>
            <main>
                <ul className="product-list">
                    {displayedPlants.map((plant) => (
                        <Product
                            cart={cart}
                            updateCart={updateCart}
                            name={plant.name}
                            id={plant.id}
                            light={plant.light}
                            water={plant.water}
                            cover={plant.cover}
                            isBestSale={plant.isBestSale}
                            price={plant.price}
                        />
                    ))}
                </ul>
            </main>

        </>
    )
}

export default ShoppingList
