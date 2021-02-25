import { Container, Title } from "./style";

const ContactMe = ({setFormError}) => {
    return(
        <Container>
            <Title className="title" id="contact-me">ContactMe</Title>
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
            <button type="button" className="nes-btn is-primary" onClick={() => setFormError(true)}>Send message</button>
        </Container>
    )
}

export default ContactMe;