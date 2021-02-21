import styled from "styled-components";

export const Container = styled.div`
    height: 200px;
    width: 300px;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    padding-top: 20px;
    margin: 20px;
    p{
        margin:0;
        font-size: 10px;
    }
    @media only screen and (min-width: 700px) {
        .title{
        }
    }
    @media only screen and (min-width: 700px) {
        width: 600px;
        height: 350px;
        p{
            font-size: 20px;
        }
        .title{
            left: 35%;
            font-size: 25px;
            top: 1016px;
        }
    }
`;
export const SkillHolder = styled.div`
    column-count: 2;
    margin-left: 20px;
`;

export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    
`;
export const Title = styled.div`
    background-color: white;
    height: 25px;
    padding: 0 10px;
    z-index: 1;
    position: absolute;
    top: 1157px;
    left: 25%;
`;