import { Container } from "./style";
import {useState} from "react";
import Header from "./components/Header";
import About from "./components/About";
import HardSkills from "./components/HardSkills";
import SoftSkills from "./components/SoftSkills";
import ContactMe from "./components/ContactMe";
import CaseStudy from "./components/CaseStudy";
import FindMe from "./components/FindMe";
import ModalFormError from "./components/ModalFormError";
import Footer from "./components/Footer";
import EasterEgg from "./imgs/smalljeff.png"
import ModalEasterEgg from "./components/ModalEasterEgg";
import ModalMap from "./components/ModalMap";
import Dropdown from "./components/Dropdown"

const App = () => {
  const [showEasteregg, setShowEasteregg] = useState(false);
  const [backButton, setBackButton] = useState(false);
  const [formError, setFormError] = useState(false);
  const [modalEasterEgg, setModalEasterEgg] = useState(false);
  const [modalMap, setModalMap] = useState(false);
  const [headerHeight, setHeaderHeight] = useState("100px");
  const [displayDropdown, setDisplayDropdown] = useState("-250px")
  function myFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      setShowEasteregg(true);
      setBackButton(true);
    }
    else if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      setHeaderHeight("60px")
    }else{
      setShowEasteregg(false);
      setBackButton(false);
      setHeaderHeight("100px")
    }
  }

  window.onscroll = function() {myFunction()};

  return (
    <Container className="App">
      <img className={`easteregg nes-pointer ${showEasteregg ? "show" : "dontshow"}`} src={EasterEgg} alt="EasterEgg button" onClick={() => setModalEasterEgg(true)}/>
      <a href="#" className={`get-back-hidden ${backButton && "get-back"}`}>
        <button type="button" className="nes-btn is-primary">/\</button>
      </a>
      <Header headerHeight={headerHeight} setDisplayDropdown={setDisplayDropdown} displayDropdown={displayDropdown} />
      <Dropdown displayDropdown={displayDropdown} setDisplayDropdown={setDisplayDropdown} headerHeight={headerHeight}/>
      <About />
      <HardSkills />
      <SoftSkills />
      {modalMap && <ModalMap setModalMap={setModalMap} />}
      {modalEasterEgg && <ModalEasterEgg setModalEasterEgg={setModalEasterEgg} />}
      <CaseStudy />
      {formError && <ModalFormError setFormError={setFormError} />}
      <ContactMe setFormError={setFormError}/>
      <FindMe setModalMap={setModalMap}/>
      <Footer />
    </Container>
  );
}

export default App;
