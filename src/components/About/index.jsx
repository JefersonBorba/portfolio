import { Container } from "./style"
import Talking from "../../imgs/talking.jpeg"

const About = () => {
    return (
        <Container>
            <div class="nes-balloon from-left">
                <p>
                    Hello, my name is Jeferson, I'm 25 years old, I'm pursuing my Computer Science barchelor degree
                    and a Computer Networks assiociate degree. Recently I've finished the Kenzie Academy course on front-end 
                    web development with more than 1000 hours.
                </p>
            </div>
            <img src={Talking} alt="An avatar talking"/>
        </Container>
    )
}

export default About;