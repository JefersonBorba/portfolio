import { Container } from "./style";
import Header from "./components/Header";
import About from "./components/About";
import HardSkills from "./components/HardSkills";
import SoftSkills from "./components/SoftSkills";

const App = () => {
  return (
    <Container className="App">
      <Header />
      <About />
      <HardSkills />
      <SoftSkills />
    </Container>
  );
}

export default App;
