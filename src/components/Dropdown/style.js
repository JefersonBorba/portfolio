import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 250px;
    display: flex;
    flex-direction: column;
    z-index: 999;
    position: fixed;
    background-color: orange;
    transition: right 0.3s, top 0.3s;
    a{
        text-decoration: none;
        color: black;
    }
    .sidebutton{
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 20px;
        border-bottom: 1px gray solid;
        
    }
`;