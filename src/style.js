import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Press Start 2P';
    .easteregg{
        position: fixed;
        top: 100px;
        // right: -240px;
        right: -25px;
        z-index: 999;
        transform: rotate(-60deg);
        display: flex;
        height: 100px;
        transition: all 0.3s ease;
    }
    .get-back-hidden{
        position: fixed;
        bottom: -60px;
        // right: -240px;
        right: 10px;
        z-index: 999;
        display: flex;
        transition: all 0.3s ease;
    }
    .dontshow{
        right: -100px;
    }
    .get-back{
        bottom: 25px;
    }
`;