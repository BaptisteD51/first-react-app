import { Icon } from "@iconify/react"
import { useContext } from "react"
import { FilterSort } from "../../contexts/FilterSort"
import useDisplay from "../../hooks/useDisplay"
import toggleDialog from "../functions/toggleDialog"


function Sort() {
    const { updateSorting, sorting } = useContext(FilterSort)
    const [displayMobile] = useDisplay()

    function selectSorting(e) {
        updateSorting(e.target.value)
    }

    return (
        <>
            <h2 className="font-bold md:text-lg text-2xl mt-6 flex items-center md:justify-start justify-center gap-1">
                <Icon icon="mi:sort" />
                Trier
            </h2>
            <select onChange={selectSorting} defaultValue={sorting} className="max-md:w-full max-md:block max-md:p-3 max-md:rounded-2xl max-md:my-5">
                <option value="none">Pas de tri</option>
                <option value="price-ascending">Prix croissant</option>
                <option value="price-descending">Prix décroissant</option>
                <option value="popularity">Popularité</option>
                <option value="stars">Évaluations</option>
            </select>
            {displayMobile && (
                <button onClick={()=>toggleDialog("sorting")} className="button-big block m-auto">Voir les produits</button>
            )}
        </>
    )
}

export default Sort
