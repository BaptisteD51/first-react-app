import translateTerm from "../functions/translateTerm"
import { useContext } from "react"
import { FilterSort } from "../../contexts/FilterSort"
import { Icon } from "@iconify/react"

function Filter({ catName, catValues }) {
    const { filter, updateFilter } = useContext(FilterSort)

    function removeFilter(catName){
        let newFilter = {...filter}
        newFilter[catName] = "all"
        updateFilter(newFilter)
    }

    if (!filter) {
        return (
            <div className="mb-1 order-1">
                {translateTerm(catName)} :&nbsp;
                <select name={catName}>
                    <option value={"all"}>Tout</option>
                    {catValues.map((value, index) => (
                        <option key={`${value}-${index}`} value={value}>
                            {translateTerm(value)}
                        </option>
                    ))}
                </select>
            </div>
        )
    } else {
        return (
            <>
                {filter[catName] !== "all" ? (
                    <div className="bg-yellow-400 rounded-full px-2 inline-flex items-center order-0">
                        {translateTerm(catName)} :&nbsp;
                        {translateTerm(filter[catName])}
                        <span className="cursor-pointer p-2" onClick={() => removeFilter(catName)}>
                            <Icon icon="fe:close" />
                        </span>
                    </div>
                ) : null}

                <div className="mb-1 order-1">
                    {translateTerm(catName)} :&nbsp;
                    <select name={catName}>
                        <option value={"all"}>Tout</option>
                        {catValues.map((value, index) => (
                            <option key={`${value}-${index}`} value={value} selected={filter[catName] == value }>
                                {translateTerm(value)}
                            </option>
                        ))}
                    </select>
                </div>
            </>
        )
    }
}

export default Filter
