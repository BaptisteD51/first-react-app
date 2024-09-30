import { useState, useEffect } from "react"
import "../assets/css/Footer.css"


function Footer({ footVisibility, changeFootVisibility }) {

    const [inputValue, setInputValue] = useState("")


    function validate(e) {
        const valid = e.target.value.includes("@")
        alert(valid ? "Votre email a bien été enregistré" : "Veuillez entrer une adresse email valide")
        setInputValue(valid ? "" : e.target.value)
        valid ? (e.target.value = "") : null
    }

    useEffect(()=>{
        return () => {
            console.log("Composant footer retiré du DOM")
        }
    })

    return (
        <footer>
            <><button onClick={() => changeFootVisibility(!footVisibility)}>Cacher le footer</button>
                <div>
                    <p><label htmlFor="email">Pour les passionée de plantes, envoyez nous votre email :</label></p>
                    <input type="text" name="email" id="email" defaultValue={inputValue} onBlur={validate} />
                </div>
            </>
        </footer>
    )

}

export default Footer