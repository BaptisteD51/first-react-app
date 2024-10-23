import { useState, useEffect, useContext } from "react"
import Sort from "./categories-parts/Sort"
import Filter from "./categories-parts/Filter"
import { FilterSort } from "../contexts/FilterSort"

function Categories({ sorting, updateSorting, data }) {
    const { updateFilter } = useContext(FilterSort)

    /**
     *
     * @param {*} data
     * @returns Object
     *
     * Return an object containing all the categories of products with their possible values
     */
    function getCategories(data) {
        const catNames = Object.getOwnPropertyNames(data[0].filters)
        let allCats = {}

        catNames.forEach((catName) => {
            allCats[catName] = []
        })

        data.forEach((product) => {
            let filters = product.filters
            for (let key in filters) {
                if (!allCats[key].includes(filters[key])) {
                    allCats[key].push(filters[key])
                }
            }
        })

        return allCats
    }

    let categories = getCategories(data)

    function selectFilters(e) {
        e.preventDefault()
        let data = new FormData(e.target)
        let newFilter = {}
        for ( const key of data){
            newFilter[key[0]] = key[1]
        }
        updateFilter(
            newFilter
        )
    }

    return (
        <aside className="categories">
            <form onSubmit={selectFilters}>
                <h2>Filtrer</h2>
                {Object.entries(categories).map(([key, value]) => (
                    <Filter
                        catName={key}
                        catValues={value}
                        key={`category-${key}`}
                    />
                ))}
                <input type="submit" value="Filtrer" className="button" />
            </form>

            <Sort sorting={sorting} updateSorting={updateSorting} />
        </aside>
    )
}

export default Categories
