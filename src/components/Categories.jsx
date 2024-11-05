import { useState, useEffect, useContext } from "react"
import Sort from "./categories-parts/Sort"
import Filter from "./categories-parts/Filter"
import { FilterSort } from "../contexts/FilterSort"
import { Icon } from "@iconify/react/dist/iconify.js"
import useDisplay from "../hooks/useDisplay"
import toggleDialog from "./functions/toggleDialog"

function Categories({ sorting, updateSorting, data }) {
    const { updateFilter, filter } = useContext(FilterSort)

    const [displayMobile] = useDisplay()

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

    if (displayMobile) {
        return (
            <>
                <dialog
                    id="filter"
                    className="fixed inset-0 bg-white z-20 size-full p-4"
                >
                    <div className="flex justify-end">
                        <button>
                            <Icon
                                icon="fe:close"
                                className="size-8"
                                onClick={() => toggleDialog("filter")}
                            />
                        </button>
                    </div>
                    <form
                        onSubmit={(e) => {
                            selectFilters(e)
                            toggleDialog("filter")
                        }}
                    >
                        <h2 className="font-bold text-2xl flex items-center justify-center mb-5">
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
                            value="Voir les produits"
                            className="button-big cursor-pointer mt-5 block m-auto"
                        />
                    </form>
                </dialog>

                <dialog
                    id="sorting"
                    className="fixed inset-0 bg-white z-20 size-full p-4"
                >
                    <div className="flex justify-end">
                        <button>
                            <Icon
                                icon="fe:close"
                                className="size-8"
                                onClick={() => toggleDialog("sorting")}
                            />
                        </button>
                    </div>
                    <Sort sorting={sorting} updateSorting={updateSorting} />
                </dialog>

                <div className="fixed bottom-0 left-0 right-0 bg-red-800 text-white flex z-10">
                    <button
                        className="flex-1 flex items-center justify-center py-5 border-r-[1px] border-red-950 text-lg"
                        onClick={() => toggleDialog("filter")}
                    >
                        <Icon icon="mdi:filter-outline" />
                        &nbsp;Filtrer
                    </button>
                    <button
                        className="flex-1 flex items-center justify-center py-5 border-l-[1px] border-red-950 text-lg"
                        onClick={() => toggleDialog("sorting")}
                    >
                        <Icon icon="mi:sort" />
                        Trier
                    </button>
                </div>
            </>
        )
    } else {
        return (
            <aside className="py-12 filter-sort">
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
            </aside>
        )
    }
}

export default Categories
