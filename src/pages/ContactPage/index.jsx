import NextButton from "../../composants/NextButton/index"
import logoTwitter from "../../assets/twitter.png"
import logoLinkedin from "../../assets/linkedin.webp"
import logoGitHub from "../../assets/github.png"
import logoCV from "../../assets/avatar.webp"
import "./contactPage.css"

function ContactPage() {

    const buttonTitle = "On recommence ?"
    const buttonLink = "/Portfolio/"

    return(
        <div className="contactPageBlock">
            <div className="contactPage">
                <h2>Contactez moi !</h2>
                <div className="formation">
                    <h3>Formations et diplômes:</h3>
                    <ul>
                    <li>Formation OpenClassRooms en développement web (2023)</li>
                        <li>Bac Marketing (2012)</li>
                        <li>BAFA (2008)</li>
                    </ul>
                    <p className="localisation">Si vous avez des remarques, suggestions ou avis sur mon travail, n'hésitez pas à me contacter par mail, ou sur les réseaux ! A bientot</p>
                </div>
                <div className="mail">
                    <h3>Mail :</h3>
                    <p className="mailAdress">blabla@blabla.fr</p>
                </div>
                <div className="reseaux">
                    <h3>Retrouvez moi également ici.</h3>
                    <div className="reseauxLogo">
                        <a className="linkedin" href="https://www.linkedin.com/in/thomas-joudinaud-829587270/" ><img src={logoLinkedin} alt="linkedin" /></a>
                        <a className="twitter" href="https://twitter.com/Thomas_DevDoe"><img src={logoTwitter} alt="twitter" /></a>
                        <a className="github" href="https://github.com/ThomasJoudinaud"><img src={logoGitHub} alt="GitHub" /></a>
                        <div className="cv"><img src={logoCV} alt="cv" /></div>
                    </div>
                </div>
            </div>
                <NextButton title={buttonTitle} link={buttonLink} />
        </div>
    )
}

export default ContactPage