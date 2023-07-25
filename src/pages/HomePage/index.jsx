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
                    <h2>Présentation</h2>
                    <p>
                        Après une expérience de 13 ans en tant qu'animateur, je me suis reconverti en développeur web.
                        <br />
                        Un développeur, pour moi, c'est quelqu'un qui veut apprendre. Il découvre des choses, cherche à les comprendre, les résous, regardent comment d'autres l'ont résolu, puis apprend. Et on recommence.
                    </p>
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