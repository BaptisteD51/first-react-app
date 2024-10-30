import { useState, useEffect, useContext } from "react"
import ShoppingList from "../components/ShoppingList.jsx"
import Categories from "../components/Categories.jsx"
import useFetch from "../hooks/useFetch.jsx"
import ProductPageLayout from "../components/ProductPageLayout.jsx"
import { FilterSort } from "../contexts/FilterSort"

function Dogs() {
    const hostName = window.location.hostname
    const protocol = window.location.protocol

    const animal = "dog"

    const [data, dataLoaded, error] = useFetch(
        `${protocol}//${hostName}/woufflenheim-api/?animal=dog`
    )

    const {updateFilter,updateSorting} = useContext(FilterSort)

    // Did it to reset filters while switching between animals product pages, need to find a better solution
    useEffect(()=>{
        updateFilter(null)
        updateSorting("none")
    },[])

    if (error) {
        return <p>Erreur lors du chargement des données</p>
    }

    return (
        <>
            {dataLoaded ? (
                <ProductPageLayout
                    categories={
                        <Categories
                            data={data}
                        />
                    }
                    shoppingList={
                        <ShoppingList
                            data={data}
                            animal={animal}
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
