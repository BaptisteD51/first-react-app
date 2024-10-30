import { HelpCircle, GitHub} from "react-feather"


function Footer() {
    function theYear(){
        let date = new Date()
        return date.getFullYear()
    }

    return (
        <footer>
            <div className="footer-container">
                <p>© Woufflenheim {theYear()} - tous droits réservés </p>
                <p className="description">
                    <HelpCircle size={14}/> Ce site est un site de démonstration réalisé en ReactJS, vous pouvez 
                    consulter le code source ici :&nbsp;
                        <a href="https://github.com/BaptisteD51/first-react-app">
                            <GitHub size={14}/>Dépôt GitHub
                        </a>
                </p>
            </div>
        </footer>
    )

}

export default Footer