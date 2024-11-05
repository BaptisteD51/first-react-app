import { HelpCircle, GitHub} from "react-feather"


function Footer() {
    function theYear(){
        let date = new Date()
        return date.getFullYear()
    }

    return (
        <footer className="bg-red-600 text-white py-10 max-md:mb-16">
            <div className="footer-container wrapper">
                <p>© Woufflenheim {theYear()} - tous droits réservés </p>
                <p className="description">
                    <HelpCircle size={14} class="inline"/> Ce site est un site de démonstration réalisé en ReactJS, vous pouvez 
                    consulter le code source ici :&nbsp;
                        <a href="https://github.com/BaptisteD51/first-react-app" className="underline">
                            <GitHub size={14} class="inline"/> Dépôt GitHub
                        </a>
                </p>
            </div>
        </footer>
    )

}

export default Footer