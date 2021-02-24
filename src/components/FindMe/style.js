import styled from "styled-components";

export const Container = styled.div`
    height: 220px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    .map{
        width: 95%;
        margin: 20px;
    }
    @media only screen and (min-width: 700px) {
        width: 600px;
        height: 400px;
        .title{
            left: 35%;
            font-size: 25px;
            top: 2326px;
        }
    }
`;

export const Title = styled.div`
    background-color: white;
    height: 25px;
    padding: 0 10px;
    z-index: 1;
    position: absolute;
    top: 1996px;
    left: 25%;
`;