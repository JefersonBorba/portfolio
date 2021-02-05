import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid gray;
    width: 100%;
    height: 150px;
    background-color: #f37b00;
    margin-top: 30px;
    padding-top: 20px;
`;

export const SocialMedia = styled.div`
    width: 100%;
    margin: 20px 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;
export const Credits = styled.div`
    margin: 10px 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
`;