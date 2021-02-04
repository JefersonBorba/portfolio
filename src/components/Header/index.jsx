import { Container, LeftContainer, Name, ButtonNav } from "./style"
import Menu from "../../imgs/menu.svg"

const Header = () => {
    return (
        <Container>
            <LeftContainer>
                <Name>
                    <h5>Jeferson Borba</h5>
                </Name>
                <p>Front End Web Developer</p>
            </LeftContainer>
            <ButtonNav>
                <img src={Menu} alt="Menu"/>
            </ButtonNav>
        </Container>
    )
}

export default Header