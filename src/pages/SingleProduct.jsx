import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Property from "../components/product-parts/Property"
import Stars from "../components/product-parts/Stars"
import { useContext, useState } from "react"
import { CartContent } from "../contexts/CartContent"
import { CartConfirmation } from "../contexts/CartConfirmation"
import { ShoppingCart } from "react-feather"
import { Minus, Plus } from "react-feather"

function SingleProduct() {
    const { animal, product } = useParams()

    const hostName = window.location.hostname
    const protocol = window.location.protocol
    let [data, dataLoaded, error] = useFetch(
        `${protocol}//${hostName}/woufflenheim-api/?animal=${animal}&product=${product}`
    )

    // To change the amount of products to add to cart
    const [quantity, updateQuantity] = useState(1)

    const { addToCart } = useContext(CartContent)
    const { updateAddedProduct } = useContext(CartConfirmation)

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
                        <img src={data.cover} alt={data.name} className="w-full"/>
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

                        <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() =>
                                        updateQuantity(
                                            quantity > 1 ? quantity - 1 : 1
                                        )
                                    }
                                    className="bg-slate-200 p-2 border-[2px] border-slate-500 rounded-md"
                                >
                                    <Minus size={10} />
                                </button>
                                <div className="font-bold">{quantity}</div>
                                <button
                                    onClick={() => updateQuantity(quantity + 1)}
                                    className="bg-slate-200 p-2 border-[2px] border-slate-500 rounded-md"
                                >
                                    <Plus size={10} />
                                </button>
                            </div>

                            <button
                                className="button-small px-3 flex"
                                onClick={() => {
                                    addToCart(
                                        data.name,
                                        data.price,
                                        data.cover,
                                        quantity
                                    )
                                    updateAddedProduct({
                                        name: data.name,
                                        price: data.price,
                                        cover: data.cover,
                                        quantity: quantity,
                                    })
                                }}
                            >
                                <ShoppingCart size={20} />
                                <span>&nbsp;Ajouter au panier</span>
                            </button>
                        </div>
                    </div>
                </main>
            ) : (
                <p>Chargement des données</p>
            )}
        </>
    )
}

export default SingleProduct
