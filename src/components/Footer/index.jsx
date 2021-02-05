import { Container, SocialMedia, Credits } from "./style";

const Footer = () => {
    return (
        <Container>
            <SocialMedia>
                <i class="nes-icon github is-medium"></i>
                <i class="nes-icon linkedin is-medium"></i>
                <i class="nes-icon facebook is-medium"></i>
                <i class="nes-icon whatsapp is-medium"></i>
            </SocialMedia>
            <Credits>
                <p>Made with <i class="nes-icon is-small heart"></i> by Jeferson Borba</p>
            </Credits>
        </Container>
    )
}

export default Footer;