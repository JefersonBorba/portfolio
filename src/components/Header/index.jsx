import { Container, LeftContainer, Image, Name,  ButtonNav } from "./style"
import Menu from "../../imgs/menu.svg";
import Profile from "../../imgs/profile.gif";

const Header = () => {
    return (
        <Container>
            <LeftContainer>
                <Image>
                    <img src={Profile} alt="Profile" />
                </Image>
                <Name>
                    <h5 id="back-to-start">Jeferson Borba</h5>
                    <p>Front End Web Developer</p>
                </Name>
            </LeftContainer>
            <ButtonNav>
                <a href="#case-study">
                    <img className="nes-pointer" src={Menu} alt="Menu"/>
                </a>
            </ButtonNav>
        </Container>
    )
}

export default Header