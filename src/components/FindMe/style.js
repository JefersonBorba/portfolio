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
    .arrow{
        position: absolute;
        z-index: 1;
        top: 2130px;
        left: 100px;
    }
`;

export const Title = styled.div`
    background-color: white;
    height: 25px;
    padding: 0 10px;
    z-index: 1;
    position: absolute;
    top: 2000px;
    left: 60px;
`;