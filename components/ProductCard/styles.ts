import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   height: 32vw;
   width: 30vw;
   align-items: center;
   justify-content: center;
   .product-div {
      height: 25vw;
      width: 25vw;
      display: flex;
      flex-direction: column;
      padding: 1vw;
      border-radius: 0.5vw;
      gap: 0.5vw;
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
   }
   .product-img {
      height: 10vw;
      width: 100%;
      
   }
   .product-img1 {
      height: 10vw;
      width: 80%;
      align-self: center;
   }
   .product-title {
      font-size: 1.2vw;
      font-weight: bold;
      color: black;
      text-align: center;
   }
   .product-subtitle {
      font-size: 1vw;
      font-weight: 500;
      color: ${(props) => props.theme.text};
      text-align: center;
   }
   .product-price {
      font-size: 1.2vw;
      font-weight: 500;
      align-self: center;
   }
   .product-button {
      text-align: center;
      font-size: 1vw;
      font-weight: bold;
      padding: 0.8vw;
      width: 10vw;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
         rgba(0, 0, 0, 0.23) 0px 3px 6px;
      border-radius: 0.5vw;
      background-image: linear-gradient(
         ${(props) => props.theme.lightorange},
         #fe9444
      );
      color: white;
      align-self: center;
   }
   .product-oldprice {
      opacity: 60%;
      text-decoration: line-through;
   }
   .product-newprice {
      font-weight: bold;
   }
`;
