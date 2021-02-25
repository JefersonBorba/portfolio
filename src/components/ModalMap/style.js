import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    z-index: 5;
    width: 90vw;
    height: 60vh;
    border: 2px solid black;
    background-color: white;
    font-size: 10px;
    margin-top: 100px;
    padding: 20px;
    @media only screen and (min-width: 700px) {
        width: 70vw;
        height: 70vh;
        font-size: 14px;
    }
`;