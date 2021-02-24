import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    img{
        width: 98%;
        padding: 5px;
        margin-top: 20px;
        object-fit: cover;
    }
    @media only screen and (min-width: 700px) {
        width: 600px;
        height: 450px;
        .title{
            left: 35%;
            font-size: 25px;
            top: 1387px;
        }
        img{
            width: 98%;
            height: 95%;
        }
    }
`;
export const Title = styled.div`
    background-color: white;
    height: 25px;
    padding: 0 10px;
    z-index: 1;
    position: absolute;
    top: 1376px;
    left: 25%;
`;