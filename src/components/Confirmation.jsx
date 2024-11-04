import { useContext } from "react"
import { CartConfirmation } from "../contexts/CartConfirmation"
import { Icon } from "@iconify/react/dist/iconify.js"

function Confirmation() {
    const { addedProduct, updateAddedProduct } = useContext(CartConfirmation)

    if (!addedProduct) {
        return null
    } else {
        return (
            <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-yellow-200 p-4 rounded-xl w-[450px] max-w-[90vw]">
                <div className="flex justify-end">
                    <Icon
                        icon="fe:close"
                        className="size-6 cursor-pointer"
                        onClick={() => updateAddedProduct(null)}
                    />
                </div>
                <div className="flex items-center mb-2 justify-center mb-5">
                    <Icon
                        icon="mingcute:check-2-fill"
                        style={{ color: "#26a269" }}
                        className="size-7"
                    />
                    &nbsp;
                    <p className="text-lg font-bold"> Produit ajouté au panier</p>
                </div>
                <div className="flex gap-3 flex-wrap">
                    <figure className="max-w-52">
                        <img src={addedProduct.cover} alt={addedProduct.name} />
                    </figure>
                    <div>
                        <p className="font-bold text-lg">{addedProduct.name}</p>
                        <p>
                            Prix à l'unité :{" "}
                            <span className="font-bold">
                                {addedProduct.price} €
                            </span>
                        </p>
                        <p className="border-b-2 border-black">
                            Quantité :{" "}
                            <span className="font-bold">
                                {addedProduct.quantity}
                            </span>
                        </p>
                        <p>
                            Sous total :{" "}
                            <span className="font-bold">
                                {addedProduct.price * addedProduct.quantity} €
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        className="button-small mt-6 px-3"
                        onClick={() => updateAddedProduct(null)}
                    >
                        Poursuivre vos achats
                    </button>
                </div>
            </div>
        )
    }
}

export default Confirmation
