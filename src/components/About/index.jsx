import {useState, useEffect} from "react";
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
            <div className="nes-balloon from-left">
                <p>
                    Hello, my name is Jeferson and I'm a frontend developer with skills in HTML, CSS, JavaScript, React, Redux and GIT. 
                    I'm passionate about tech and have been studying programming for a couple of years and I do believe that I'm ready for any challenge. 
                    Currently I'm pursuing a graduation in Computer Science and Computer Networks, and I'm also doing a super intensive and practical 
                    course at Kenzie Academy Brasil, with the objective of becoming a fullstack developer. 
                </p>
            </div>
            <ImageContainer>
                <img className="jeff" src={Talking} alt="An avatar talking"/>
                <DogContainer>
                    {havePet && <i className="nes-icon is-medium heart"></i>}
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