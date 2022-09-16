import styled from 'styled-components';

export const HomeContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
   background-color: ${(props) => props.theme.background};
   background-image: url('/backgroundbanner2.png');
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

   font: 400 1vw 'Montserrat', sans-serif;

   main {
      display: flex;
      flex-direction: column;
   }
`;
