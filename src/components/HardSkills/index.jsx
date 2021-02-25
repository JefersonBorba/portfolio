import {Container, Skill, Title, SkillHolder} from "./style"
import {useState, useEffect} from "react";

const HardSkills = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [iconSize, setIconSize] = useState("is-small");
    useEffect(() => {
        function handleResize() {
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
            <Title className="title" id="hard-skills">HardSkills</Title>
            <SkillHolder>
                <Skill>
                    <p>HTML</p>
                    <div>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star is-half`}></i>
                    </div>
                    
                </Skill>
                <Skill>
                    <p>CSS</p>
                    <div>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star is-half`}></i>
                    </div>
                </Skill>
                <Skill>
                    <p>JS</p>
                    <div>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star is-transparent`}></i>
                    </div>
                </Skill>
                <Skill>
                    <p>React</p>
                    <div>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star is-transparent`}></i>
                    </div>
                </Skill>
                <Skill>
                    <p>Git</p>
                    <div>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star is-half`}></i>
                        <i className={`nes-icon ${iconSize} star is-transparent`}></i>
                    </div>
                </Skill>
                <Skill>
                    <p>Python</p>
                    <div>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star`}></i>
                        <i className={`nes-icon ${iconSize} star is-half`}></i>
                        <i className={`nes-icon ${iconSize} star is-transparent`}></i>
                    </div>
                </Skill>
            </SkillHolder>
        </Container>
    )
}

export default HardSkills;