import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    z-index: 5;
    width: 70vw;
    height: 70vh;
    border: 2px solid black;
    background-color: white;
    margin-top: 5%;
    padding: 20px;
    margin-top: 100px;
    font-size: 10px;
    @media only screen and (min-width: 700px) {
        width: 70vw;
        height: 70vh;
        font-size: 14px;
        
    }
`;