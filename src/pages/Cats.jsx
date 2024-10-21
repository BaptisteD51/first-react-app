import useFetch from "../hooks/useFetch"
import ShoppingList from "../components/ShoppingList"
import Categories from "../components/Categories"
import { useState } from "react"
import ProductPageLayout from "../components/ProductPageLayout"

function Cats() {
    const hostName = window.location.hostname
    const protocol = window.location.protocol
    const [data, dataLoaded, error] = useFetch(
        `${protocol}//${hostName}/woufflenheim-api/?animal=cat`
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
                    pageTitle={"Nourriture pour chat"}
                />
            ) : (
                <p>Chargement des données</p>
            )}
        </>
    )
}

export default Cats
