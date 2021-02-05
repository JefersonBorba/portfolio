import {Container, Title} from "./style";
import Map from "../../imgs/map.jpeg"
import Arrow from "../../imgs/locationarrow.gif"

const FindMe = () => {
    return (
        <Container>
            <Title>FindMe</Title>
            <img className="map" src={Map} alt="Map" />
            <img className="arrow nes-pointer" src={Arrow} alt="pointer" />
        </Container>
    )
}

export default FindMe;