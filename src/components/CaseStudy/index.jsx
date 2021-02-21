import {Container, Title} from "./style";
import Placeholder from "../../imgs/csplaceholder.jpeg"

const CaseStudy = () => {
    return (
        <Container>
            <Title className="title"><span id="case-study">CaseStudy</span></Title>
            <img src={Placeholder} alt="project placeholder"/>
        </Container>
    )
}

export default CaseStudy;