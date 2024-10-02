import { Star } from "react-feather"

function Stars({ stars }) {
    let allStars = [1, 2, 3, 4, 5]

    return (
        <p>
            {allStars.map((i)=>(
                i <= stars ? <Star fill="gold"/> : <Star/>
            ))}
        </p>

    )
}

export default Stars