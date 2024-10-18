import { useState } from "react"
import Shoppinglist from "../components/ShoppingList.jsx"
import Categories from "../components/Categories.jsx"
import "../assets/css/App.css"
import useFetch from "../hooks/useFetch.jsx"

function Dogs() {
    const [data, dataLoaded, error] = useFetch(
        "http://localhost/woufflenheim-api/?animal=dog"
    )

    const [filter, updateFilter] = useState({
        category: "all",
        height: "all",
        age: "all",
    })
    const [sorting, updateSorting] = useState("none")

    if (error) {
        return <p>Erreur lors du chargement des données</p>
    }

    return (
        <>
            {dataLoaded ? (
                <section className="page">
                <Categories
                    filter={filter}
                    updateFilter={updateFilter}
                    sorting={sorting}
                    updateSorting={updateSorting}
                />
                <Shoppinglist filter={filter} sorting={sorting} data={data}/>
            </section>
            ) : (
                <p>Chargement des données</p>
            )}
            
        </>
    )
}

export default Dogs
