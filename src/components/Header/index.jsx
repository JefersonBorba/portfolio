import { Container, LeftContainer, Name, ButtonNav } from "./style"
import Menu from "../../imgs/menu.svg";
import Profile from "../../imgs/profile.gif";

const Header = () => {
    return (
        <Container>
            <LeftContainer>
                <Name>
                    <img src={Profile} alt="Profile" />
                    <h5>Jeferson Borba</h5>
                </Name>
                <p>Front End Web Developer</p>
            </LeftContainer>
            <ButtonNav>
                <img className="nes-pointer" src={Menu} alt="Menu"/>
            </ButtonNav>
        </Container>
    )
}

export default Header