import { plantList } from "../data/plantList";
import "../assets/css/Categories.css"

function CategoryList() {
    let categories = [];
    plantList.forEach(function (plant) {
        if (!categories.includes(plant.category)) {
            categories.push(plant.category);
        }
    });
    return (
        <div className="categories">
            <p>Type of plants :</p>
            <ul className="category-list">
                {categories.map((category, index) => (
                    <li key={category + index}>{category}</li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryList