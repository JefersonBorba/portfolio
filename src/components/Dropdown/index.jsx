import { Container } from "./style"

const Dropdown = ({displayDropdown, setDisplayDropdown, headerHeight}) => {
    return (
        <Container style={{right: displayDropdown, top: headerHeight}}>
            <a href="#hard-skills" onClick={() => setDisplayDropdown("-250px")}>
                <div className="sidebutton nes-pointer">HardSkills</div>
            </a>
            <a href="#soft-skills" onClick={() => setDisplayDropdown("-250px")}>
                <div className="sidebutton nes-pointer">SoftSkills</div>
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