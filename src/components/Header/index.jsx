import { Container, LeftContainer, Image, Name,  ButtonNav } from "./style"
import Menu from "../../imgs/menu.svg";
import Profile from "../../imgs/profile.gif";
import { useState, useEffect } from "react";

const Header = ({headerHeight, setDisplayDropdown, displayDropdown}) => {
    const [width, setWidth] = useState(window.innerWidth)
    const [changeButtons, setChangeButtons] = useState(false);
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        if(width < 1000){
            setChangeButtons(true)
        }else{
            setChangeButtons(false)
        }
      }, [width])
    return (
        <Container style={{height: headerHeight}}>
            <LeftContainer>
                <Image>
                    <img src={Profile} alt="Profile" />
                </Image>
                <Name>
                    <h5>Jeferson Borba</h5>
                    <p>Front End Web Developer</p>
                </Name>
            </LeftContainer>
            <ButtonNav>
                {!changeButtons &&
                    (<div>
                        <a href="#hard-skills">
                        <button type="button" class={`nes-btn ${headerHeight == "100px" ? "biggerbutton" : ""}`}>HardSkills</button>
                        </a>
                        <a href="#soft-skills">
                        <button type="button" class={`nes-btn ${headerHeight == "100px" ? "biggerbutton" : ""}`}>SoftSkills</button>
                        </a>
                        <a href="#case-study">
                        <button type="button" class={`nes-btn ${headerHeight == "100px" ? "biggerbutton" : ""}`}>CaseStudy</button>
                        </a>
                        <a href="#contact-me">
                        <button type="button" class={`nes-btn ${headerHeight == "100px" ? "biggerbutton" : ""}`}>ContactMe</button>
                        </a>
                        <a href="#find-me">
                        <button type="button" class={`nes-btn ${headerHeight == "100px" ? "biggerbutton" : ""}`}>FindMe</button>
                        </a>
                    </div>)
                }
                {changeButtons && (
                            <img className="nes-pointer" src={Menu} alt="Menu" onClick={() => (displayDropdown == "-250px" ? setDisplayDropdown("0px") : setDisplayDropdown("-250px"))}/>
                )}
            </ButtonNav>
        </Container>
    )
}

export default Header