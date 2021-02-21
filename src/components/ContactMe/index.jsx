import { Container, Title } from "./style";

const ContactMe = () => {
    return(
        <Container>
            <Title className="title">ContactMe</Title>
            <div className="nes-field">
                <label htmlFor="name_field">Your name</label>
                <input type="text" id="name_field" className="nes-input" />
            </div>
            <div className="nes-field">
                <label htmlFor="name_field">Your email</label>
                <input type="text" id="name_field" className="nes-input" />
            </div>
            <div className="nes-field">
                <label htmlFor="textarea_field">Your message</label>
                <textarea id="textarea_field" className="nes-textarea"></textarea>
            </div>
            <button type="button" className="nes-btn is-primary">Send message</button>
        </Container>
    )
}

export default ContactMe;