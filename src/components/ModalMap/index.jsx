import {Container} from "./style"

const ModalMap = ({setModalMap}) => {
    return (
        <Container>
            <h1>Where I live!</h1>
            <p>Country: Brazil</p>
            <p>State: Rio Grande do Sul</p>
            <p>City: Nova Araçá</p>
            <button type="button" class="nes-btn is-primary" onClick={() => setModalMap(false)}>I agree not to stalk you</button>
        </Container>
    )
}

export default ModalMap;