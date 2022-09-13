import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 30vw;
    width: 100vw;
    justify-content: center;
    align-items: center;
    .content {
        display: flex;
        width: 90vw;
        height: 20vw;
        background-color: #F2F2F2;
        gap: 1vw;
        justify-content: center;
        align-items: center;
    }
    .content-logo {
        width: 11vw;
        height: 6vw;
        transform: translate(-3vw, 0vw)
    }
    .column{
        height: 15vw;
        width: 10vw;
        display: flex;
        flex-direction:column ;
        justify-content: center;
    }
    .title {
        font-size: 1.1vw;
        font-weight: 700;
        color: black;
        margin-bottom: 3vw;
    }
    .a{
        font-size: 1vw;
        font-weight: 500;
        color: ${(props) => props.theme.purple};
        margin-bottom: 1vw;
    }
`;
