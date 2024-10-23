import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Property from "../components/product-parts/Property"
import Stars from "../components/product-parts/Stars"

function ProductPage() {
    const { animal, product } = useParams()

    const hostName = window.location.hostname
    const protocol = window.location.protocol
    let [data, dataLoaded, error] = useFetch(
        `${protocol}//${hostName}/woufflenheim-api/?animal=${animal}&product=${product}`
    )

    console.log(data)

    if (error) {
        return (
            <p>
                Erreur lors du chargement des données{" "}
                {`${protocol}//${hostName}/woufflenheim-api/?animal=${animal}&product=${product}`}
            </p>
        )
    }

    return (
        <>
            {dataLoaded ? (
                <main className="wrapper flex flex-wrap gap-4">
                    <figure>
                        <img src={data.cover} alt={data.name} />
                    </figure>
                    <div>
                        <h1 className="text-2xl">
                            {data.name}
                            {data.isBestSale ? (
                                <>
                                    &nbsp;- <span className="text-red-600">Meilleures ventes</span>
                                </>
                            ) : (
                                null
                            )}
                        </h1>
                        <p className="font-bold">{data.price} €</p>
                        <p>
                            {Object.entries(data.filters).map(
                                ([key, value]) => (
                                    <>
                                        <Property
                                            property={key}
                                            value={value}
                                            key={`property-${key}`}
                                        />
                                    </>
                                )
                            )}
                        </p>
                        <Stars name={data.name} stars={data.stars}/>
                    </div>
                </main>
            ) : (
                <p>Chargement des données</p>
            )}
        </>
    )
}

export default ProductPage
