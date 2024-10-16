import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./pages/App.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CartVisibilityProvider } from "./contexts/CartVisibility.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <CartVisibilityProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chien" element={<App />} />
                </Routes>
                <Footer />
            </CartVisibilityProvider>
        </Router>
    </StrictMode>
)
