import { Star } from "react-feather"

function Stars({ stars,name }) {
    let allStars = [1, 2, 3, 4, 5]

    return (
        <p>
            {allStars.map((i)=>(
                i <= stars ? <Star fill="gold" key={`star-${name}-${i}`}/> : <Star key={`empty-star-${name}-${i}`}/>
            ))}
        </p>

    )
}

export default Stars