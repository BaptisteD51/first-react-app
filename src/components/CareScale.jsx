function CareScale({scale, type}) {
    const range = [1, 2, 3];
    const symbol = (type == "water") ? "💧" : "☀️"
    return (
        <p>
            <span>{type+" : "}</span>
            <span>
                {range.map((i) => (i <= scale ? <span key={type+i}>{symbol}</span> : null))}
            </span>
        </p>
    );
}

export default CareScale;
