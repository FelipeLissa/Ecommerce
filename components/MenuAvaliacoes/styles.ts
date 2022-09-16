import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 50vw;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5vw;
    background-color: #F4F4F4;
    padding:1vw;
`;
export const Container1 = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    gap: 2vw;
    margin-top: 2vw;
    

    .left-content {
        width: 30vw;
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 2vw;
        border-radius: 1vw;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    .left-content-title {
        font-size: 2vw;
        font-weight: bold;
        text-align: center;

    }
    .left-content-text {
        margin-top: 2vw;
    }
`;


