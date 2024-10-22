import { createContext, useState, useEffect } from "react"

export const FilterSort = createContext()

export const FilterSortProvider = ({children})=>{
    const [filter, updateFilter] = useState(null)
    const [sorting, updateSorting] = useState("none")
    
    return(
        <FilterSort.Provider value={{sorting, updateSorting, filter, updateFilter}}>
            {children}
        </FilterSort.Provider>
    )
}
