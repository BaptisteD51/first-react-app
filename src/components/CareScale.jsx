function CareScale({scale, type}) {
    const range = [1, 2, 3];
    const symbol = (type == "water") ? "💧" : "☀️"

    function whatCare(scale,type){
        const word = (type == "water") ? " d'arosage " : " de lumière "
        let level = ""
        switch (scale){
            case 1:
                level = " un peu"
                break
            case 2:
                level = " modérément"
                break
            case 3:
                level = " beaucoup"
                break
        }

        let message = "Cette plante requiert" + level + word
        alert(message)
    }

    return (
        <p onClick={()=>whatCare(scale,type)} className="carescale">
            <span>{type+" : "}</span>
            <span>
                {range.map((i) => (i <= scale ? <span key={type+i}>{symbol}</span> : null))}
            </span>
        </p>
    );
}

export default CareScale;
