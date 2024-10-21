import { useState, useEffect } from "react"
import Sort from "./categories-parts/Sort"
import Filter from "./categories-parts/Filter"

function Categories({ filter, updateFilter, sorting, updateSorting, data }) {
    /**
     * 
     * @param {*} data 
     * @returns Object
     * 
     * Return an object containing all the categories of products with their possible values
     */
    function getCategories(data){
        const catNames = Object.getOwnPropertyNames(data[0].filters)
        let allCats = {}
        
        catNames.forEach((catName)=>{
            allCats[catName] = []
        })

        data.forEach((product)=>{
            let filters = product.filters
            for(let key in filters){
                if (!allCats[key].includes(filters[key])){
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
        updateFilter({
            category: data.get("category"),
            age: data.get("age"),
            height: data.get("height"),
        })
    }


    return (
        <aside className="categories">
            {/* <form onSubmit={selectFilters}>
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
                        <option value="adult">Adulte</option>
                        <option value="senior">Senior</option>
                    </select>
                </p>

                <p>
                    Taille :&nbsp;
                    <select className="category-list" name="height">
                        <option value={"all"}>Tout</option>
                        <option value={"small"}>Petit</option>
                        <option value={"medium"}>Moyen</option>
                        <option value={"big"}>Grand</option>
                    </select>
                </p>

                <p>
                    <input
                        type="submit"
                        value="Filtrer"
                        className="cta-little"
                    />
                </p>
            </form> */}
            <form>
                <h2>Filtrer</h2>
                { Object.entries(categories).map(([key,value])=>(
                <Filter catName={key} catValues={value} key={`category-${key}`}/>
            )) }
            </form>
            
            <Sort sorting={sorting} updateSorting={updateSorting} />
        </aside>
    )
}

export default Categories
