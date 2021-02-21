import styled from "styled-components";

export const Container = styled.div`
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 2px solid black;
    padding-top: 20px;
    margin: 20px;
    padding: 10px;
    @media only screen and (min-width: 700px) {
        width: 600px;
        height: 450px;
        font-size: 20px;
        .title{
            left: 35%;
            font-size: 25px;
            top: 1856px;
        }
    }
`;
export const Title = styled.div`
    background-color: white;
    height: 25px;
    padding: 0 10px;
    z-index: 1;
    position: absolute;
    top: 1642px;
    left: 25%;
`;