import { Link } from "react-router-dom"

function Home() {
    return (
        <section className="wrapper">
            <h1 className="product-page-title mt-10">
                Woufflenheim : vente de nourriture pour animaux
            </h1>
            <p>
                <Link to="/chien">Chien</Link>
            </p>
            <p>
                <Link to="/chat">Chat</Link>
            </p>
        </section>
    )
}

export default Home
