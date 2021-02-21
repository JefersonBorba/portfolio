import { Container } from "./style";
import {useState} from "react";
import Header from "./components/Header";
import About from "./components/About";
import HardSkills from "./components/HardSkills";
import SoftSkills from "./components/SoftSkills";
import ContactMe from "./components/ContactMe";
import CaseStudy from "./components/CaseStudy";
import FindMe from "./components/FindMe";
import Footer from "./components/Footer";
import EasterEgg from "./imgs/smalljeff.png"

const App = () => {
  const [showEasteregg, setShowEasteregg] = useState(false);
  const [backButton, setBackButton] = useState(false);
  function myFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      setShowEasteregg(true);
      setBackButton(true);
    }else{
      setShowEasteregg(false);
      setBackButton(false);
    }
  }

  window.onscroll = function() {myFunction()};

  
  return (
    <Container className="App">
      <img className={`easteregg nes-pointer ${showEasteregg ? "show" : "dontshow"}`} src={EasterEgg} alt="EasterEgg button" />
      <a href="#back-to-start" className={`get-back-hidden ${backButton && "get-back"}`}>
        <button type="button" className="nes-btn is-primary">/\</button>
      </a>
      <Header />
      <About />
      <HardSkills />
      <SoftSkills />
      <CaseStudy />
      <ContactMe />
      <FindMe />
      <Footer />
    </Container>
  );
}

export default App;
