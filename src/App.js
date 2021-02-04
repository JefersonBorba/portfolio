import { Container } from "./style"
import Header from "./components/Header"
import About from "./components/About"

const App = () => {
  return (
    <Container className="App">
      <Header />
      <About />
    </Container>
  );
}

export default App;
