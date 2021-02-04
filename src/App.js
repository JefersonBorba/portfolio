import { Container } from "./style"
import Header from "./components/Header"
import About from "./components/About"
import HardSkills from "./components/HardSkills"

const App = () => {
  return (
    <Container className="App">
      <Header />
      <About />
      <HardSkills />
    </Container>
  );
}

export default App;
