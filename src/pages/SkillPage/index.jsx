import NextButton from "../../composants/NextButton/index"
import logoHTML from "../../assets/html5.webp"
import logoCSS from "../../assets/css3.png"
import logoJS from "../../assets/JS.png"
import logoReact from "../../assets/react.png"
import logoNode from "../../assets/node.png"
import "./skillPage.css"

function SkillPage() {

    const buttonTitle = "Projets"
    const buttonLink = "/project"

    return(
        <div className="skillPageBlock">
            <div className="skillPage">
                <h2>Mes compétences</h2>
                <div className="competences">
                    <div className="htmlAnimation">
                        <div className="html">
                            <img src={logoHTML} alt="html" />
                            <h3>HTML</h3>
                            <ul>
                                <li>Optimiser l'accéssibilité d'un site.</li>
                                <li>Créer un référencement locale.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="cssAnimation">
                        <div className="css">
                            <img src={logoCSS} alt="css" />
                            <h3>CSS</h3>
                            <ul>
                                <li>Faire un affichage responsive.</li>
                                <li>Flex/Grid.</li>
                                <li>SAAS.</li>
                                <li>Animation CSS.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="jsAnimation">
                        <div className="js">
                            <img src={logoJS} alt="js" />
                            <h3>JavaScript</h3>
                            <ul>
                                <li>Débuggez une application ou un site.</li>
                                <li>Fetch / Promise.</li>
                                <li>Gestion des formulaires.</li>
                                <li>Manipuler le DOM.</li>
                                <li>Gérer les User Event.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="reactAnimation">
                        <div className="react">
                            <img src={logoReact} alt="react" />
                            <h3>React</h3>
                            <ul>
                                <li>CRA (Create React App).</li>
                                <li>React Router.</li>
                                <li>Créer et utiliser composants fonctionnels.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="nodeAnimation">
                        <div className="node">
                            <img src={logoNode} alt="node" />
                            <h3>NodeJs</h3>
                            <ul>
                                <li>Express.</li>
                                <li>Opération CRUD.</li>
                                <li>Ajouter des sécurités sur les données stockées (cryptage, JWT).</li>
                                <li>Créer et utiliser une DataBase(MongoDB).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                <NextButton title={buttonTitle} link={buttonLink} />
        </div>
    )
}

export default SkillPage