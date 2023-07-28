import logoTwitter from "../../assets/twitter.png"
import logoLinkedin from "../../assets/linkedin.webp"
import logoGitHub from "../../assets/github.png"
import logoCV from "../../assets/avatar.webp"
import "./contactPage.css"

function ContactPage() {

    return(
        <div className="contactPageBlock">
            <div className="contactPage">
                <h2>Pour me contacter..</h2>
                <div className="mail">
                    <h3>Mail :</h3>
                    <a href="mailto:joudinaud.thomas@hotmail.fr" className="mailAdress" target="_blank" rel="noopener noreferrer">joudinaud.thomas@hotmail.fr</a>
                </div>
                <p className="localisation">Si vous avez des remarques, suggestions ou avis sur mon travail, n'hésitez pas à me contacter par mail, ou sur les réseaux. À bientot!</p>
                <div className="reseaux">
                    <h3>Retrouvez moi également ici...</h3>
                    <div className="reseauxLogo">
                        <a className="linkedin" href="https://www.linkedin.com/in/thomas-joudinaud-829587270/" target="_blank" rel="noopener noreferrer"><img src={logoLinkedin} alt="linkedin" /></a>
                        <a className="twitter" href="https://twitter.com/Thomas_DevDoe" target="_blank" rel="noopener noreferrer"><img src={logoTwitter} alt="twitter" /></a>
                        <a className="github" href="https://github.com/ThomasJoudinaud" target="_blank" rel="noopener noreferrer"><img src={logoGitHub} alt="GitHub" /></a>
                        <div className="cv" target="_blank" rel="noopener noreferrer"><img src={logoCV} alt="cv" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage