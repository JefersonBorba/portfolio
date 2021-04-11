import {Container, Skill, Title, SkillHolder} from "./style"
import {useState, useEffect} from "react";
import HTMLIcon from "../../imgs/htmlIcon.png"
import CSSIcon from "../../imgs/cssIcon.png"
import JavascriptIcon from "../../imgs/javascriptIcon.png"
import ReactIcon from "../../imgs/reactIcon.png"
import GitIcon from "../../imgs/gitIcon.png"
import PythonIcon from "../../imgs/pythonIcon.png"

const SkillSet = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [iconSize, setIconSize] = useState("is-small");
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        if(width > 700){
            setIconSize("is-medium")
        }else{
            setIconSize("is-small")
        }
      }, [width])
    return (
        <Container>
            <Title className="title" id="skill-set">SkillSet</Title>
            <SkillHolder>
                <Skill>
                    <img src={HTMLIcon} alt="HTML Icon"/>
                    <p>HTML5</p>
                </Skill>
                <Skill>
                    <img src={CSSIcon} alt="CSS Icon"/>
                    <p>CSS3</p>
                </Skill>
                <Skill>
                    <img src={JavascriptIcon} alt="Javascript Icon"/>
                    <p>JS</p>
                </Skill>
                <Skill>
                    <img src={ReactIcon} alt="React Icon"/>
                    <p>React</p>
                </Skill>
                <Skill>
                    <img src={GitIcon} alt="GIT Icon"/>
                    <p>GIT</p>
                </Skill>
                <Skill>
                    <img src={PythonIcon} alt="Python Icon"/>
                    <p>Python</p>
                </Skill>
            </SkillHolder>
        </Container>
    )
}

export default SkillSet;