import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
height: auto;
margin: 4vw;
   .content-div {
      display: flex;
      height: 10vw;
      width: 30vw;
      border-radius: 1vw;
      padding: 0.5vw;
      background-color: white;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
         rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
         gap: 1vw;
   }
   .content-avatar {
      height: 5vw;
      width: 5vw;
   }
   .content-review {
      display: flex;
      flex-direction: column;
   }
   .content-name {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.1;
   }
   .content-text {
      color: ${(props) => props.theme.text};
      font-size: 1vw;
      width: 20vw;
   }
   .content-rate {
      font-size: 0.8;
      font-weight: bold;
   }
   .content-date {
      font-size: 0.8;
      color: ${(props) => props.theme.text};
   }
`;
