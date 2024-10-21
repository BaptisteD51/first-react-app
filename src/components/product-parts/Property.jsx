import translateTerm from "../functions/translateTerm"

function Property({property, value}){

    return (
        <p>
            {translateTerm(property)} : {translateTerm(value)}
        </p>
    )
}

export default Property