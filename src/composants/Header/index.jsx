import { Link } from "react-router-dom"
import "./header.css"

function Header(){

    return (
        <header className="header">
            <div className="headerLogo">
                <h1 className="headerLogoTitle">Thomas Joudinaud</h1>
            </div>
            <nav className="headerNav">
                <Link to="/Portfolio/" className="button">Accueil</Link>
                <Link to="/Portfolio/skill" className="button">Compétences</Link>
                <Link to="/Portfolio/project" className="button">Projets</Link>
                <Link to="/Portfolio/contact" className="button">Contact</Link>
            </nav>
        </header>
    )
}

export default Header