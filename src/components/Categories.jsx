import { products } from "../data/products"
import "../assets/css/Categories.css"
import { useState, useEffect } from "react"
import { Filter } from "react-feather"
import Sort from "./Sort"

function Categories({ filter, updateFilter, sorting, updateSorting }) {
    const categories = []
    products.forEach(function (product) {
        if (!categories.includes(product.category)) {
            categories.push(product.category)
        }
    })

    const heights = []
    products.forEach(function (product) {
        if (!heights.includes(product.height)) {
            heights.push(product.height)
        }
    })

    const ages = []
    products.forEach(function (product) {
        if (!ages.includes(product.age)) {
            ages.push(product.age)
        }
    })

    function selectFilters(e) {
        e.preventDefault()
        let data = new FormData(e.target)
        updateFilter({
            category: data.get("category"),
            age: data.get("age"),
            height: data.get("height"),
        })
    }

    return (
        <aside className="categories">
            <form onSubmit={selectFilters}>
                <h2 className="filter-title">
                    <Filter />
                    <span>Filtres</span>
                </h2>
                <p>
                    Type :&nbsp;
                    <select className="category-list" name="category">
                        <option value={"all"}>Tout</option>
                        {categories.map((category, index) => (
                            <option key={category + index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </p>

                <p>
                    Âge :&nbsp;
                    <select className="category-list" name="age">
                        <option value="all">Tout</option>
                        <option value="junior">Junior</option>
                        <option value="adulte">Adulte</option>
                        <option value="senior">Senior</option>
                    </select>
                </p>

                <p>
                    Taille :&nbsp;
                    <select className="category-list" name="height">
                        <option value={"all"}>Tout</option>
                        <option value={"petit"}>Petit</option>
                        <option value={"moyen"}>Moyen</option>
                        <option value={"grand"}>Grand</option>
                    </select>
                </p>

                <p>
                    <input
                        type="submit"
                        value="Filtrer"
                        className="cta-little"
                    />
                </p>
            </form>
            <Sort sorting={sorting} updateSorting={updateSorting} />
        </aside>
    )
}

export default Categories
