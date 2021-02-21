import styled from "styled-components";

export const Container = styled.div`
    height: 200px;
    width: 300px;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    padding-top: 20px;
    margin-top: 50px;
    @media only screen and (min-width: 700px) {
        width: 600px;
        height: 300px;
        p{
            font-size: 20px;
        }
        .title{
            left: 35%;
            font-size: 25px;
            top: 698px;
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
    p{
        margin:0;
    }
`;
export const Title = styled.div`
    background-color: white;
    height: 25px;
    padding: 0 10px;
    z-index: 1;
    position: absolute;
    top: 940px;
    left: 25%;
`;