import CareScale from "./CareScale"
import "../assets/css/Plant.css"

function Plant({ name, cover, id, light, water, isBestSale}) {
    return (
        <li key={id} className="plant">
            <img src={cover} alt={name} />
            <h2>{name.toUpperCase()}</h2>
            <CareScale scale={water} type="water" />
            <CareScale scale={light} type="light" />
            { isBestSale ? <p className="popular">POPULAR</p> : null }
        </li>
    )
}

export default Plant
