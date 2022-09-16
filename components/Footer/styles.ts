import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   height: 30vw;
   width: 85vw;
   justify-content: center;
   align-items: center;
   margin-left: 7.75vw;
   .content {
      display: flex;
      width: 90vw;
      height: 20vw;
      background-color: #f2f2f2;
      gap: 4vw;
      justify-content: center;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
         rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
         rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      border-radius: 2vw;
   }
   .content-logo {
      width: 12vw;
      height: 5vw;
      right: 8vw;
   }
   .column {
      height: 15vw;
      width: 10vw;
      display: flex;
      flex-direction: column;
      justify-content: baseline;
      margin-left: 5vw;
   }
   .title {
      font-size: 1.1vw;
      font-weight: 700;
      color: black;
      margin-bottom: 3vw;
   }
   .a {
      font-size: 1vw;
      font-weight: 500;
      color: ${(props) => props.theme.purple};
      margin-bottom: 1vw;
   }
`;
