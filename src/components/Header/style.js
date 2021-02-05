import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid gray;
    width: 100%;
    height: 100px;
    background-color: #f37b00;
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
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    img{
        width: 30px;
    }
`;