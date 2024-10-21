import { Icon } from '@iconify/react';

function Sort({sorting,updateSorting}) {
    function selectSorting(e){
        updateSorting(e.target.value)
    }

    return (
        <>
            <h2 className="sort-title"><span className="sorting-arrows"><Icon icon="mi:sort"/></span>Trier</h2>
            <select onChange={selectSorting}>
                <option value="none">Pas de tri</option>
                <option value="price-ascending">Prix croissant</option>
                <option value="price-descending">Prix décroissant</option>
                <option value="popularity">Popularité</option>
                <option value="stars">Évaluations</option>
            </select>
        </>
    )

}

export default Sort