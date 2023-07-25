import NextButton from "../../composants/NextButton/index"
import ProjectCard from "../../composants/Card/index"
import Projects from "../../projet.json"
import "./projectPage.css"

function ProjectPage() {
    const projects = Projects


    const buttonTitle = "Contact"
    const buttonLink = "/contact"

    return(
        <div className="projectPage">
            <div className="project">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            <NextButton title={buttonTitle} link={buttonLink} />
        </div>
    )
}

export default ProjectPage