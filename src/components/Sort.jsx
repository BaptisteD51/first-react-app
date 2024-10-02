import { ArrowDown, ArrowUp } from "react-feather"

function Sort({sorting,updateSorting}) {
    function selectSorting(e){
        updateSorting(e.target.value)
    }

    return (
        <>
            <h2 className="sort-title">Trier<ArrowUp/><ArrowDown/></h2>
            <select onChange={selectSorting}>
                <option value="none">Pas de tri</option>
                <option value="price-ascending">Prix croissant</option>
                <option value="price-descending">Prix décroissant</option>
            </select>
        </>
    )

}

export default Sort