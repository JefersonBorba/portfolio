import styled from "styled-components";

export const Container = styled.div`
    transition: height .3s;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid gray;
    width: 100%;
    background-color: #f37b00;
    z-index: 5;
`;
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
   
`;

export const Image = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const Name = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        font-size: 8px;
        margin: 0;
    }
    h5{
        margin: 0;
    }
`;

export const ButtonNav = styled.div`
    img{
        width: 30px;
        margin-right: 20px;
    }
    div{
        display: flex;
        flex-direction: row;
        width: 65vw;
        justify-content: space-evenly;
        @media only screen and (max-width: 1250px) {
            width: 70vw;
    }
    button{
        color: black;
        background-color: orange;
        font-size: 12px;
    }
    .biggerbutton{
        font-size: 16px;
    }
    .nes-btn{
        transition: font-size 0.3s;
    }
    a{
        
    }
`;