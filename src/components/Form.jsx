import { useState } from "react"

function validate(inputValue){
    if(inputValue.includes("jambon")){
        alert("Vous ne pouvez pas employer le mot jambon")
    }else{
        alert(inputValue)
    }
}

function Form() {
    const [inputValue, setInputValue] = useState("Posez votre question ici")
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => validate(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}

export default Form
