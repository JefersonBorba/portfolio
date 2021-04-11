import {useState, useEffect} from "react"
import { Container } from "./style"

const Dropdown = ({displayDropdown, setDisplayDropdown, headerHeight}) => {

    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        if(width > 1000){
            setDisplayDropdown("-250px")
        }
      }, [width])

    return (
        <Container style={{right: displayDropdown, top: headerHeight}}>
            <a href="#skill-set" onClick={() => setDisplayDropdown("-250px")}>
                <div className="sidebutton nes-pointer">SkillSet</div>
            </a>
            <a href="#case-study" onClick={() => setDisplayDropdown("-250px")}>
                <div className="sidebutton nes-pointer">CaseStudy</div>
            </a>
            <a href="#contact-me" onClick={() => setDisplayDropdown("-250px")}>
                <div className="sidebutton nes-pointer">ContactMe</div>
            </a>
            <a href="#find-me" onClick={() => setDisplayDropdown("-250px")}>
                <div className="sidebutton nes-pointer">FindMe</div>
            </a>
        </Container>
    )
}

export default Dropdown;