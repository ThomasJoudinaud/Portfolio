import NextButton from "../../composants/NextButton/index"
import Logo from "../../assets/avatar.webp"
import "./homePage.css"

function HomePage() {
    const buttonTitle = "La suite est par ici.."
    const buttonLink = "/skill"

    return(
        <div className="homePage">
            <h2>À Propos</h2>
            <div className="presentation">
                <div className="description">
                    <p>
                    Riche d'une expérience de plus de 10 ans en animation, qui m'a apporté des compétences en <span className="special">organisation</span>, en <span className="special">travail d'équipe</span>, et en capacité d'<span className="special">adaptation</span>, j'ai décidé de me réorienter professionnellement.
                        Suite à une formation de 8 mois chez OpenClassRooms, je suis maintenant un <span className="special">Développeur Frontend, spécialisé en Javascript</span>.
                    </p>
                    <div className="formation">
                        <h3>Formations:</h3>
                        <ul>
                            <li>Développeur Web - OpenClassRooms (2023)</li>
                            <li>Bac Marketing - Silvia Monfort (2012)</li>
                            <li>BAFA - PeP28 (2008)</li>
                        </ul>                
                    </div>
                </div>
                <div className="Picture">
                    <img src={Logo} alt="Thomas Joudinaud" />
                </div>
            </div>
            <NextButton title={buttonTitle} link={buttonLink} />
        </div>
    )
}

export default HomePage