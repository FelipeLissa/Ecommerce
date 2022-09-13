import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;

 
  ::-webkit-scrollbar {
  display:none;
 }

body {
  background: ${props => props.theme.background};
  font: 400 1rem 'Montserrat', sans-serif;
}

img {
  width: 100%;
  max-width: 100%;
}
a {
  color:black;
}

ul {
  list-style: none;
}
button {
  cursor: pointer;
  border:none;
}
a {
  text-decoration:none;
} a:hover{
  color:black;
}

.container {
  width:100%;
  margin: 0 auto;
  max-width: 85rem;
  padding: 0 1 rem;
  @media(max-width:1450px) {
    max-width: 70rem
  }
  @media(max-width:1000px) {
    max-width: 50 rem
  }
  @media(max-width:700px) {
    padding: 0 2rem
  }}}`