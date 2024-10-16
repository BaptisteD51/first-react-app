import { useState } from "react";
import Shoppinglist from "../components/ShoppingList.jsx";
import Categories from "../components/Categories.jsx";
import "../assets/css/App.css"

function App() {
    
    const [filter, updateFilter] = useState(
        {
            category: "all",
            height: "all",
            age: "all"
        }
    )
    const [sorting, updateSorting] = useState("none")

    


    

    return (
        <>
            <section className="page">
                <Categories
                    filter={filter}
                    updateFilter={updateFilter}
                    sorting={sorting}
                    updateSorting={updateSorting}
                />
                {<Shoppinglist
                    filter={filter}
                    sorting={sorting}
                />}
            </section>

        </>
    );
}

export default App;
