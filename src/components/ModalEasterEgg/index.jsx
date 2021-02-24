import {Container} from "./style"

const ModalEasterEgg = ({setModalEasterEgg}) => {
    return (
        <Container>
            <h1>Did you know?</h1>
            <p>There is no brazilian symbol more sympathetic, frank and mostly omnipresent than the caramel mongrel. No matter where you are, no matter your social class, your address or your region, it is certain that in your neighborhood, probably on your street, there is a nice caramel colored dog wandering after water, food or entertainment. </p>
            <button type="button" class="nes-btn is-primary" onClick={() => setModalEasterEgg(false)}>I will pet the dog</button>
        </Container>
    )
}

export default ModalEasterEgg;