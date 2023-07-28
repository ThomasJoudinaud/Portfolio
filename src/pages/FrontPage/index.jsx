import NextButton from "../../composants/NextButton/index"
import { useNavigate } from "react-router-dom"
import "./frontpage.css"

import aboutPic from "../../assets/about.png"
import skillPic from "../../assets/skill.png"
import projectPic from "../../assets/project.png"
import contactPic from "../../assets/contact.png"

function FrontPage(){

    const buttonTitle = "Commençons la visite.."
    const buttonLink = "/about"

    const navigate = useNavigate()

    const about = () => {
        navigate("/about")
    }

    const skill = () => {
        navigate("/skill")
    }

    const project = () => {
        navigate("/project")
    }

    const contact = () => {
        navigate("/contact")
    }

    return(
        <div className="frontPage">
            <h2>Accueil</h2>
            <div className="accueil">
                <div className="motivation">
                    <p>Développeur Frontend <span className="special">Javascript</span> et <span className="special">React</span> qui veut travailler dans l'<span className="special">intégration</span>, <span className="special">création de fonctionnalités</span> "from scratch" et la <span className="special">mise à jour graphique</span> de sites ou applications.</p>
                </div>
                <h3>Dans ce portfolio vous pourrez voir:</h3>
                <div className="website">
                    <div className="webAbout" onClick={about}>
                        <h4>Qui je suis</h4>
                        <img src={aboutPic} alt="about" />
                    </div>
                    <div className="webSkill" onClick={skill}>
                        <h4>Mes technologies</h4>
                        <img src={skillPic} alt="skill" />
                    </div>
                    <div className="webProject" onClick={project}>
                        <h4>Quelques projets</h4>
                        <img src={projectPic} alt="project" />
                    </div>
                    <div className="webContact" onClick={contact}>
                        <h4>Comment me contacter</h4>
                        <img src={contactPic} alt="contact" />
                    </div>
                </div>
            </div>
            <NextButton title={buttonTitle} link={buttonLink} />
        </div>
    )
}

export default FrontPage