import { useState } from "react"
import Carousel from "../Carousel/index"
import "./card.css"

function Card({project}) {

    const [modal, setModal] = useState(false)

    const toggleModal = (event) => {
        event.stopPropagation()
        setModal(!modal)
    }

    const Canva = () => {
        if(project.canva){
            return(<a href={project.canva} className="canva">canva</a>)
        }
    }

    const Github = () => {
        if(project.github){
            return(<a href={project.github} className="github">github</a>)
        }
    }

    const Online = () => {
        if(project.online){
            return(<a href={project.online} className="online">online</a>)
        }
    }

    return(
        <div className="cardBlock">
            <div className="card" onClick={toggleModal} >
                <div className="cardCover">
                    <img src={project.cover} alt="website cover" />
                </div>
                <div className="cardTitle">
                    {project.title}
                </div>
                <div className="date">
                    {project.date}
                </div>
            </div>
            {modal && (
                <div className="modal">
                    <div className="overlay" onClick={toggleModal} >

                    </div>
                    <div className="modalContent">
                        <div className="modalHeader">
                            <h2>{project.title}</h2>
                            <button className="closeModal" onClick={toggleModal}>Fermer la fenêtre</button>
                        </div>
                        <div className="carouselModal">
                            <Carousel images={project.pictures} />
                        </div>
                        <div className="descriptionModal">
                            <div className="description">
                                {project.description}
                            </div>
                            <div className="technology">
                            <h3>Technologies utilisées :</h3>
                                <ul>
                                {project.technology.map((tech, index) => {
                                    return(
                                        <li key={index}>{tech}</li>
                                    )
                                })}
                                </ul>
                            </div>
                        </div>
                        <div className="linkModal">
                            <Canva />
                            <Github />
                            <Online />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Card