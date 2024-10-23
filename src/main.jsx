import "./index.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Dogs from "./pages/Dogs.jsx"
import Cats from "./pages/Cats.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CartVisibilityProvider } from "./contexts/CartVisibility.jsx"
import { CartContentProvider } from "./contexts/CartContent.jsx"
import { FilterSortProvider } from "./contexts/FilterSort.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Cart from "./components/Cart.jsx"
import Rodents from "./pages/Rodents.jsx"
import ProductPage from "./pages/ProductPage.jsx"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <CartContentProvider>
                <CartVisibilityProvider>
                    <FilterSortProvider>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/chien" element={<Dogs />} />
                            <Route path="/chat" element={<Cats />} />
                            <Route path="/rongeur" element={<Rodents />} />
                            <Route path="/:animal/:product" element={<ProductPage />} />
                        </Routes>
                        <Footer />
                        <Cart />
                    </FilterSortProvider>
                </CartVisibilityProvider>
            </CartContentProvider>
        </Router>
    </StrictMode>
)
