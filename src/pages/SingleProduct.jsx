import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Property from "../components/product-parts/Property"
import Stars from "../components/product-parts/Stars"
import { useContext } from "react"
import { CartContent } from "../contexts/CartContent"
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
                <main className="wrapper flex flex-wrap gap-4 py-10">
                    <figure className="max-w-[400px] w-full relative">
                        <img src={data.cover} alt={data.name} />
                        {data.isBestSale ? (
                            <p className="font-bold text-red-700 bg-yellow-400/60 absolute top-0 right-0 px-1">
                                Meilleures ventes !
                            </p>
                        ) : null}
                    </figure>
                    <div>
                        <h1 className="text-3xl font-bold">{data.name}</h1>
                        <p className="font-bold text-xl mb-2">{data.price} €</p>
                        <div className="mb-2">
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
                        </div>
                        <Stars name={data.name} stars={data.stars} />
                        <button
                            className="button-small px-3 flex mt-2"
                            onClick={() =>
                                addToCart(data.name, data.price, data.cover, 1)
                            }
                        >
                            <ShoppingCart size={20} />
                            <span>&nbsp;Ajouter au panier</span>
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
