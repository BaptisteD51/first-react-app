import translateTerm from "../functions/translateTerm"

function Filter({ catName, catValues }) {
    return (
        <p>
            {translateTerm(catName)} :&nbsp;
            <select name={catName}>
                <option value={"all"}>Tout</option>
                {catValues.map((value,index)=>(
                    <option key={`${value}-${index}`}> {translateTerm(value)}</option>
                ))}
            </select>
        </p>
    )
}

export default Filter
