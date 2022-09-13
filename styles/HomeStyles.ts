import styled from "styled-components"

export const HomeContainer = styled.div`
display:flex;
flex-direction: column;
width: 100%;
height: 100%;
background-color: ${props => props.theme.background};

font: 400 1rem 'Montserrat', sans-serif;

main {
display: flex;
flex-direction: column;
   
   img{
    position:absolute;top:0;left:0;z-index:1;
    width: 100vw;
    height: 56.25vw ;
   }
   div {
    position:relative;z-index:5;color:white;
   }

}`