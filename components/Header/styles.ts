import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 6vw;
display: flex;
justify-content: center;
align-items: center;
display: flex;
    .header-div {
        width: 50vw ;
        height: 5vw ;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5vw;
        text-transform: uppercase;
    }
    .header-a{
        text-align: center;
        height: 1vw;
        width: 10vw;
        font-size: 1vw;
        font-weight: bold;
        transition: all 0.3s ease-in-out;
    }.header-a:hover{
        transform: scale(1.2);
    }
`;
