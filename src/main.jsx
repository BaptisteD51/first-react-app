import "./index.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Dogs from "./pages/Dogs.jsx"
import Cats from "./pages/Cats.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CartVisibilityProvider } from "./contexts/CartVisibility.jsx"
import { CartContentProvider } from "./contexts/CartContent.jsx"
import { FilterSortProvider } from "./contexts/FilterSort.jsx"
import { CartConfirmationProvider } from "./contexts/CartConfirmation.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Cart from "./components/Cart.jsx"
import Rodents from "./pages/Rodents.jsx"
import SingleProduct from "./pages/SingleProduct.jsx"
import Confirmation from "./components/Confirmation.jsx"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <CartContentProvider>
                <CartVisibilityProvider>
                    <CartConfirmationProvider>
                        <FilterSortProvider>
                            <Header />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/chien" element={<Dogs />} />
                                <Route path="/chat" element={<Cats />} />
                                <Route path="/rongeur" element={<Rodents />} />
                                <Route
                                    path="/:animal/:product"
                                    element={<SingleProduct />}
                                />
                            </Routes>
                            <Footer />
                            <Cart />
                            <Confirmation />
                        </FilterSortProvider>
                    </CartConfirmationProvider>
                </CartVisibilityProvider>
            </CartContentProvider>
        </Router>
    </StrictMode>
)
