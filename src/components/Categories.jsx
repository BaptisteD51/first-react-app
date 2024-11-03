import { useState, useEffect, useContext } from "react"
import Sort from "./categories-parts/Sort"
import Filter from "./categories-parts/Filter"
import { FilterSort } from "../contexts/FilterSort"
import { Icon } from "@iconify/react/dist/iconify.js"

function Categories({ sorting, updateSorting, data }) {
    const { updateFilter,filter } = useContext(FilterSort)

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
        for (const key of data) {
            newFilter[key[0]] = key[1]
        }
        updateFilter(newFilter)
    }

    return (
        <>
            <form onSubmit={selectFilters}>
                <h2 className="font-bold text-lg flex items-center">
                    <Icon icon="mdi:filter-outline" />
                    &nbsp;Filtrer
                </h2>
                <div className="flex flex-col items-start gap-1">
                    {Object.entries(categories).map(([key, value]) => (
                        <Filter
                            catName={key}
                            catValues={value}
                            key={`category-${key}`}
                        />
                    ))}
                </div>
                <input
                    type="submit"
                    value="Filtrer"
                    className="button-small px-3 cursor-pointer mt-1"
                />
            </form>

            <Sort sorting={sorting} updateSorting={updateSorting} />
        </>
    )
}

export default Categories
