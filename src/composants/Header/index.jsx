import { Link } from "react-router-dom"
import "./header.css"

function Header(){

    return (
        <header className="header">
            <div className="headerLogo">
                <h1 className="headerLogoTitle">Thomas Joudinaud</h1>
            </div>
            <nav className="headerNav">
                <Link to="/" className="button">Accueil</Link>
                <Link to="/about" className="button">À Propos</Link>
                <Link to="/skill" className="button">Compétences</Link>
                <Link to="/project" className="button">Projets</Link>
                <Link to="/contact" className="button">Contact</Link>
            </nav>
        </header>
    )
}

export default Header