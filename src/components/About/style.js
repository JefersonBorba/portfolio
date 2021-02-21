import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    .nes-balloon{
        margin-left: 50px;
        margin-right: 20px;
        width: 300px;
        padding: 10px;
    }
    @media only screen and (min-width: 700px) {
        .nes-balloon{
            width: 600px;
        }
    }
    p{
        font-size: 12px;
        margin: 0;
    }

`;

export const ImageContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    .jeff{
        height: 300px;
        width: 150px;
        margin: 0;
    }
    .dog{
        height: 200px;
        width: 200px;
        margin-right: 30px;
    }
`;
export const DogContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;