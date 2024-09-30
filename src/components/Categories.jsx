import { plantList } from "../data/plantList";
import "../assets/css/Categories.css"
import { useState, useEffect } from "react";

function Categories({filter,updateFilter}) {
    let categories = [];
    plantList.forEach(function (plant) {
        if (!categories.includes(plant.category)) {
            categories.push(plant.category);
        }
    });

    function selectCategory(e){
        let selectCat = e.target.value
        selectCat != "false" ? updateFilter(selectCat) : updateFilter(false) 
    }


    return (
        <aside className="categories">
            <p>Filtrer par type de croquette :&nbsp;
                <select className="category-list" onChange={selectCategory}>
                    <option value={false}>Tout</option>
                    {categories.map((category, index) => (
                        <option key={category + index} value={category}>{category}</option>
                    ))}
                </select>
            </p>
        </aside>
    );
}

export default Categories