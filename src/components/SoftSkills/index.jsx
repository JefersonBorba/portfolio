import {Container, Skill, Title, SkillHolder} from "./style"
import {useState, useEffect} from "react";

const SoftSkills = () => {
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
        <Container className='container'>
            <Title className="title">SoftSkills</Title>
            <SkillHolder>
                <Skill>
                    <p>TeamWork</p>
                    <div>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart is-half`}></i>
                    </div>
                    
                </Skill>
                <Skill>
                    <p>Creative Thinking</p>
                    <div>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart is-half`}></i>
                    </div>
                </Skill>
                <Skill>
                    <p>Learning Skills</p>
                    <div>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                    </div>
                </Skill>
                <Skill>
                    <p>Networking</p>
                    <div>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart is-half`}></i>
                        <i className={`nes-icon ${iconSize} heart is-transparent`}></i>
                    </div>
                </Skill>
                <Skill>
                    <p>Time Management</p>
                    <div>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart is-half`}></i>
                    </div>
                </Skill>
                <Skill>
                    <p>Conflict Resolution</p>
                    <div>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart`}></i>
                        <i className={`nes-icon ${iconSize} heart is-half`}></i>
                        <i className={`nes-icon ${iconSize} heart is-transparent`}></i>
                    </div>
                </Skill>
            </SkillHolder>
        </Container>
    )
}

export default SoftSkills;