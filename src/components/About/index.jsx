import { Container, ImageContainer } from "./style"
import Talking from "../../imgs/bigjeff.png"
import Dog from "../../imgs/happydog.gif"

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
            <ImageContainer>
                <img className="jeff" src={Talking} alt="An avatar talking"/>
                <img className="dog nes-pointer" src={Dog} alt="Happy Dog"/>
            </ImageContainer>
        </Container>
    )
}

export default About;