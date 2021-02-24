import {Container} from "./style"

const ModalFormError = ({setFormError}) => {
    return (
        <Container>
            <h1>Sorry</h1>
            <h2>Not yet implemented</h2>
            <p>hint: To contact me, use one of the links on the footer</p>
            <button type="button" class="nes-btn is-primary" onClick={() => setFormError(false)}>I Understand</button>
        </Container>
    )
}

export default ModalFormError;