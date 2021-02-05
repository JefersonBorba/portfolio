import { Container } from "./style";
import Header from "./components/Header";
import About from "./components/About";
import HardSkills from "./components/HardSkills";
import SoftSkills from "./components/SoftSkills";
import ContactMe from "./components/ContactMe";
import CaseStudy from "./components/CaseStudy";
import FindMe from "./components/FindMe";

const App = () => {
  return (
    <Container className="App">
      <Header />
      <About />
      <HardSkills />
      <SoftSkills />
      <CaseStudy />
      <ContactMe />
      <FindMe />
    </Container>
  );
}

export default App;
