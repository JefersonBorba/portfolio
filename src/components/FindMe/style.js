import styled from "styled-components";

export const Container = styled.div`
    height: 220px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    img{
        width: 95%;
        margin: 20px;
    }
`;

export const Title = styled.div`
    background-color: white;
    height: 25px;
    padding: 0 10px;
    z-index: 1;
    position: absolute;
    top: 2140px;
    left: 60px;
`;