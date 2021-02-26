import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    z-index: 5;
    width: 90vw;
    height: 70vh;
    border: 2px solid black;
    background-color: white;
    margin-top: 100px;
    padding: 20px;
    font-size: 10px;
    text-align: center;
    div{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
    img{
        width: 300px;
    }
    @media only screen and (min-width: 700px) {
        width: 70vw;
        height: 80vh;
        font-size: 14px;
        img{
            width: 500px;
        }
    }
`;