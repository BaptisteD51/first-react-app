import useFetch from "../hooks/useFetch"
import ShoppingList from "../components/ShoppingList"
import Categories from "../components/Categories"
import { useContext, useEffect, useState } from "react"
import ProductPageLayout from "../components/ProductPageLayout"
import { FilterSort } from "../contexts/FilterSort"

function Cats() {
    const hostName = window.location.hostname
    const protocol = window.location.protocol

    const animal = "cat"

    const [data, dataLoaded, error] = useFetch(
        `${protocol}//${hostName}/woufflenheim-api/?animal=cat`
    )

    const { updateFilter, updateSorting } = useContext(FilterSort)
    // Did it to reset filters while switching between animals product pages, need to find a better solution
    useEffect(() => {
        updateFilter(null)
        updateSorting("none")
    }, [])

    if (error) {
        return <p>Erreur lors du chargement des données</p>
    }

    return (
        <>
            {dataLoaded ? (
                <ProductPageLayout
                    categories={<Categories data={data} />}
                    shoppingList={<ShoppingList data={data} animal={animal}/>}
                    pageTitle={"Nourriture pour chat"}
                />
            ) : (
                <p>Chargement des données</p>
            )}
        </>
    )
}

export default Cats
