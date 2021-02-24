import {Container, Title} from "./style";
import KenzieHub from "../../imgs/kenziehub.png"

const CaseStudy = () => {
    return (
        <Container>
            <Title className="title"><span id="case-study">CaseStudy</span></Title>
            <img src={KenzieHub} alt="project placeholder"/>
        </Container>
    )
}

export default CaseStudy;