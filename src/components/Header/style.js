import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid gray;
    width: 100%;
    height: 100px;
`;
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    p{
        font-size: 8px;
        margin: 0;
    }
`;

export const Name = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ButtonNav = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 30px;
    img{
        width: 30px;
    }
`;