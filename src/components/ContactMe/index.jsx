import { Container, Title } from "./style";

const ContactMe = () => {
    return(
        <Container>
            <Title>ContactMe</Title>
            <div class="nes-field">
                <label for="name_field">Your name</label>
                <input type="text" id="name_field" class="nes-input" />
            </div>
            <div class="nes-field">
                <label for="name_field">Your email</label>
                <input type="text" id="name_field" class="nes-input" />
            </div>
            <div class="nes-field">
                <label for="textarea_field">Your message</label>
                <textarea id="textarea_field" class="nes-textarea"></textarea>
            </div>
            <button type="button" class="nes-btn is-primary">Send message</button>
        </Container>
    )
}

export default ContactMe;