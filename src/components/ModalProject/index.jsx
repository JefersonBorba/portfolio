import {Container} from "./style"

const ModalProject = ({setProjectDetails, projectDescription}) => {
    return (
        <Container>
            <h1>{projectDescription.projectName}</h1>
            <img src={projectDescription.projectImage} alt="teste"/>
            <p>{projectDescription.projectDescription}</p>
            <div>
                <a href={projectDescription.projectRepo} target="_blank" rel="noreferrer">Repository</a>
                <a href={projectDescription.projectWeb} target="_blank" rel="noreferrer">Live Version</a>
            </div>
            <button type="button" className="nes-btn is-primary" onClick={() => setProjectDetails(false)}>Close</button>
        </Container>
    )
}

export default ModalProject;