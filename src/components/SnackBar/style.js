import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 60px;
    left: 40%;
    z-index: 50;
    position: fixed;
    background-color: white;
    border: 2px solid black;
    transition: bottom 0.3s;
`;