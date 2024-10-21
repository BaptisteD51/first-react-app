import { useState } from "react"
import ShoppingList from "../components/ShoppingList.jsx"
import Categories from "../components/Categories.jsx"
import "../assets/css/App.css"
import useFetch from "../hooks/useFetch.jsx"
import ProductPageLayout from "../components/ProductPageLayout.jsx"

function Dogs() {
    const hostName = window.location.hostname
    const protocol = window.location.protocol

    const [data, dataLoaded, error] = useFetch(
        `${protocol}//${hostName}/woufflenheim-api/?animal=dog`
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
                <ProductPageLayout
                    categories={
                        <Categories
                            filter={filter}
                            updateFilter={updateFilter}
                            sorting={sorting}
                            updateSorting={updateSorting}
                            data={data}
                        />
                    }
                    shoppingList={
                        <ShoppingList
                            filter={filter}
                            sorting={sorting}
                            data={data}
                        />
                    }
                    pageTitle={"Nourriture pour chien"}
                />
            ) : (
                <p>Chargement des données</p>
            )}
        </>
    )
}

export default Dogs
