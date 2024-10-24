import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Property from "../components/product-parts/Property"
import Stars from "../components/product-parts/Stars"
import { useContext } from "react"
import {CartContent} from "../contexts/CartContent"
import { ShoppingCart } from "react-feather"

function SingleProduct() {
    const { animal, product } = useParams()

    const hostName = window.location.hostname
    const protocol = window.location.protocol
    let [data, dataLoaded, error] = useFetch(
        `${protocol}//${hostName}/woufflenheim-api/?animal=${animal}&product=${product}`
    )

    const { addToCart } = useContext(CartContent)

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
                        <button 
                            className="button flex" 
                            onClick={()=>addToCart(data.name, data.price, data.cover, 1)}
                        >
                            Ajouter au panier <ShoppingCart/>
                        </button>
                    </div>
                </main>
            ) : (
                <p>Chargement des données</p>
            )}
        </>
    )
}

export default SingleProduct
