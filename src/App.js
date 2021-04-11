import { Container } from "./style";
import {useState} from "react";
import Header from "./components/Header";
import About from "./components/About";
import SkillSet from "./components/SkillSet";
import ContactMe from "./components/ContactMe";
import CaseStudy from "./components/CaseStudy";
import FindMe from "./components/FindMe";
import ModalProject from "./components/ModalProject";
import Footer from "./components/Footer";
import EasterEgg from "./imgs/smalljeff.png"
import ModalEasterEgg from "./components/ModalEasterEgg";
import ModalMap from "./components/ModalMap";
import Dropdown from "./components/Dropdown"
import SnackBar from "./components/SnackBar";

const App = () => {
  const [showEasteregg, setShowEasteregg] = useState(false);
  const [backButton, setBackButton] = useState(false);
  const [projectDetails, setProjectDetails] = useState(false);
  const [modalEasterEgg, setModalEasterEgg] = useState(false);
  const [modalMap, setModalMap] = useState(false);
  const [headerHeight, setHeaderHeight] = useState("100px");
  const [displayDropdown, setDisplayDropdown] = useState("-250px")
  const [snackMessage, setSnackMessage] = useState("");
  const [selectedCaramelo, setSelectedCaramelo] = useState(2)
  const [displaySnack, setDisplaySnack] = useState(false);
  const [projectDescription, setProjectDescription] = useState()
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
      <SkillSet />
      {modalMap && <ModalMap setModalMap={setModalMap} />}
      {modalEasterEgg && <ModalEasterEgg setModalEasterEgg={setModalEasterEgg} />}
      <CaseStudy setProjectDetails={setProjectDetails} setProjectDescription={setProjectDescription}/>
      {projectDetails && <ModalProject setProjectDetails={setProjectDetails} projectDescription={projectDescription}/>}
      <ContactMe setSnackMessage={setSnackMessage} setDisplaySnack={setDisplaySnack} setSelectedCaramelo={setSelectedCaramelo}/>
      <FindMe setModalMap={setModalMap}/>
      <Footer />
      <SnackBar snackMessage={snackMessage} displaySnack={displaySnack} selectedCaramelo={selectedCaramelo}/>
    </Container>
  );
}

export default App;
