import NextButton from "../../composants/NextButton/index"
import Logo from "../../assets/avatar.webp"
import "./homePage.css"

function HomePage() {
    const buttonTitle = "Compétences"
    const buttonLink = "/skill"

    return(
        <div className="homePage">
            <div className="presentation">
                <div className="description">
                    <h2>À Propos</h2>
                    <p>
                        Riche d'une expérience de plus de 10 ans en animation, je souhaite apporter mon inspiration et ma créativité à l'univers du web.
                        Suite à un bootcamp de 8 mois chez OpenClassRooms, je me lance dans le métier de <span className="special">Développeur Frontend</span>.
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