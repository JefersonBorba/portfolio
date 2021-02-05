import {Container, Title} from "./style";
import Map from "../../imgs/map.jpeg"

const FindMe = () => {
    return (
        <Container>
            <Title>FindMe</Title>
            <img src={Map} alt="Map" />
        </Container>
    )
}

export default FindMe;