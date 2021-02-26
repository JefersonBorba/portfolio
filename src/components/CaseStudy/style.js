import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    border: 2px solid black;
    overflow:hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 250px;
    justify-content: space-evenly;
    .carousel{
        position:relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        transition: left 0.3s;
    }
    img{
        width: 98%;
        padding: 5px;
        margin-left 5px;
        margin-top: 20px;
    }
    @media only screen and (min-width: 700px) {
        width: 600px;
        height: 450px;
        .title{
            left: 35%;
            font-size: 25px;
            top: 1387px;
        }
    }
    .changer{
        width: 50%;
        display: flex;
        justify-content: space-evenly;
        div{
            width: 20px;
            height: 20px;
            border: 1px solid black;
            transition: background-color 0.3s;
        }
    }
`;
export const Title = styled.div`
    background-color: white;
    height: 25px;
    padding: 0 10px;
    z-index: 2;
    position: absolute;
    top: 1376px;
    left: 25%;
`;