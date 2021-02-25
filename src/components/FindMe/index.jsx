import {Container, Title} from "./style";
import Map from "../../imgs/map.gif"

const FindMe = ({setModalMap}) => {
    return (
        <Container>
            <Title className="title" id="find-me">FindMe</Title>
            <img className="map nes-pointer" src={Map} alt="Where to find me" onClick={() => setModalMap(true)}/>
        </Container>
    )
}

export default FindMe;