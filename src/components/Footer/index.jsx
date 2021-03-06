import { Container, SocialMedia, Credits } from "./style";

const Footer = () => {
    return (
        <Container>
            <SocialMedia>
                <a href="https://github.com/JefersonBorba" target="_blank" rel="noreferrer">
                    <i className="nes-icon github is-medium nes-pointer"></i>
                </a>
                <a href="https://www.linkedin.com/in/jefersonborbasls/" target="_blank" rel="noreferrer">
                    <i className="nes-icon linkedin is-medium nes-pointer"></i>
                </a>
                <a href="https://www.facebook.com/aceofskies" target="_blank" rel="noreferrer">
                    <i className="nes-icon facebook is-medium nes-pointer"></i>
                </a>
                <a href="https://wa.me/5554996231710" target="_blank" rel="noreferrer">
                    <i className="nes-icon whatsapp is-medium nes-pointer"></i>
                </a>
            </SocialMedia>
            <Credits>
                <p>Made with <i className="nes-icon is-small heart"></i> by Jeferson Borba</p>
            </Credits>
        </Container>
    )
}

export default Footer;