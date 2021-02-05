import {useState} from "react";
import { Container, ImageContainer, DogContainer } from "./style"
import Talking from "../../imgs/bigjeff.png"
import Dog from "../../imgs/happydog.gif"
import Bark from "../../sounds/Single-yard-dog-woof.mp3"

const About = () => {

    const [havePet, setHavePet] = useState(false);
    const [audio] = useState(new Audio(Bark));
    havePet && setTimeout(() => setHavePet(false), 1000)
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
                <DogContainer>
                    {havePet && <i class="nes-icon is-medium heart"></i>}
                    <img onClick={() => {
                        audio.play()
                        setHavePet(true)
                        }} className="dog nes-pointer" src={Dog} alt="Happy Dog"/>
                </DogContainer>
            </ImageContainer>
        </Container>
    )
}

export default About;