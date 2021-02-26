import {Container, Title} from "./style";
import {useState, useEffect} from "react"
import KenzieHub from "../../imgs/kenziehub.png"
import MeuCapital from "../../imgs/meucapital.png"

const CaseStudy = ({setProjectDetails, setProjectDescription}) => {
    const projectData = {p1:{
            projectName: "KenzieHub",
            projectRepo: "https://github.com/JefersonBorba/kenziehub",
            projectWeb: "https://kenziehub-rho.vercel.app/",
            projectDescription: "This project was made during the second quarter at Kenzie Academy. I assumed the role of QA, created the login page and implemented the responsiveness of all pages.",
            projectImage: KenzieHub
        },
        p2:{
            projectName: "Meu Capital",
            projectRepo: "https://github.com/JefersonBorba/meu-capital",
            projectWeb: "https://meu-capital-xi.vercel.app/",
            projectDescription: "This was the capstone project of the second quarter at Kenzie Academy. I assumed the role of Scrum Master and created all the authenticated pages.",
            projectImage: MeuCapital
        }
    }
    const [carouselPosition, setCarouselPosition] = useState(0)
    const [projectPage, setProjectPage] = useState(1);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        if(width > 700){
            if(projectPage === 2){
                window.setTimeout(() => {
                    setCarouselPosition(0)
                    setProjectPage(1)
                }, 7000);
            }
            else{
                window.setTimeout(() => {
                    setCarouselPosition(carouselPosition - 590)
                    setProjectPage(projectPage + 1)
                }, 7000)
                
            }
        }else{
            if(projectPage === 2){
                window.setTimeout(() => {
                    setCarouselPosition(0)
                    setProjectPage(1)
                }, 7000);
                
            }
            else{
                window.setTimeout(() => {
                    setCarouselPosition(carouselPosition - 300)
                    setProjectPage(projectPage + 1)
                }, 7000)
                
            }
        }
        
        
    }, [projectPage, carouselPosition, width])

    const handleClick = (data) => {
        setProjectDescription(data)
        setProjectDetails(true)
    }
    return (
        <Container>
            <Title className="title"><span id="case-study">CaseStudy</span></Title>
            <div className="carousel nes-pointer" style={{left: `${carouselPosition}px`}}>
                <img src={KenzieHub} alt="project placeholder" onClick={() => handleClick(projectData.p1)}/>
                <img src={MeuCapital} alt="project holder" onClick={() => handleClick(projectData.p2)}/>
            </div>
            <div className="changer">
                <div style={{backgroundColor: `${projectPage === 1 ? "orange" : "white"}`}}/>
                <div style={{backgroundColor: `${projectPage === 2 ? "orange" : "white"}`}}/>
            </div>
            
        </Container>
    )
}

export default CaseStudy;