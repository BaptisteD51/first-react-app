import { plantList } from "../data/plantList"
import "../assets/css/ShoppingList.css"
import CareScale from "./CareScale"
import Plant from "./Plant"
//import Form from "./Form"

function ShoppingList() {
    return (
        <>
            <ul className="product-list">
                {plantList.map((plant) => (
                    <Plant
                        name={plant.name}
                        id={plant.id}
                        light={plant.light}
                        water={plant.water}
                        cover={plant.cover}
                        isBestSale={plant.isBestSale}
                    />
                ))}
            </ul>
        </>
    )
}

export default ShoppingList
