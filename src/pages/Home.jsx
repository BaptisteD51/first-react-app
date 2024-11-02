import { Link } from "react-router-dom"
import bunny from "../assets/bunny.jpg"
import dog from "../assets/dog.jpg"
import cat from "../assets/cat.jpg"

function Home() {
    return (
        <main className="wrapper py-10">
            <h1 className="product-page-title">
                Woufflenheim : vente de nourriture pour animaux
            </h1>
            <div className="flex flex-wrap justify-center gap-8 mb-9">
                <Link to="/chien">
                    <div className="shadow-md shadow-lg shadow-gray-500 rounded-3xl overflow-hidden">
                        <figure>
                            <img src={dog} alt="Chien" className="w-72"/>
                        </figure>
                        <h2 className="py-3 font-bold pl-2 text-xl">Nourriture pour chien</h2>
                    </div>
                </Link>
                <Link to="/chat">
                    <div className="shadow-md shadow-lg shadow-gray-500 rounded-3xl overflow-hidden">
                        <figure>
                            <img src={cat} alt="Chat" className="w-72"/>
                        </figure>
                        <h2 className="py-3 font-bold pl-2 text-xl">Nourriture pour chat</h2>
                    </div>
                </Link>
                <Link to="/rongeur">
                    <div className="shadow-md shadow-lg shadow-gray-500 rounded-3xl overflow-hidden">
                        <figure>
                            <img src={bunny} alt="Lapin" className="w-72"/>
                        </figure>
                        <h2 className="py-3 font-bold pl-2 text-xl">Nourriture pour rongeur</h2>
                    </div>
                </Link>
            </div>
        </main>
    )
}

export default Home
