import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   width: 100vw;
   height: 6vw;
   .header-div {
      width: 50vw;
      height: 5vw;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8vw;
      text-transform: uppercase;
      margin-left: 15%;
   }
   .header-logo {
      width: 15vw;
      height: 5vw;
      transition: all 0.2s ease-in-out;
      align-self: center;
      margin-left: 4vw;
      margin-top: 1vw;
      border-radius: 0.5vw;
   }
   .header-logo:hover {
      transform: translate(0.6vw, -0.6vw);
      box-shadow: rgba(240, 46, 170, 0.4) -3px 3px,
         rgba(240, 46, 170, 0.3) -6px 6px, rgba(240, 46, 170, 0.2) -9px 9px;
      cursor: pointer;
   }
   .header-a {
      text-align: center;
      width: fit-content;
      font-size: 1.2vw;
      font-weight: bold;
      transition: all 0.2s ease-in-out;
      color: white;
      background-color: #121212;
      height: fit-content;
      padding: 0.6vw;
      border-radius: 0.5vw;
      
   }
   .header-a:hover {
      transform: translateX(-0.5vw);
      box-shadow: #f02eaa66 5px 0px, rgba(240, 46, 170, 0.3) 10px 0px,
         rgba(240, 46, 170, 0.2) 15px 0px, rgba(240, 46, 170, 0.1) 20px 0px,
         rgba(240, 46, 170, 0.05) 25px 0px;
   }
`;
