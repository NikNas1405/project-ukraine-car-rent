import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #FFF;
   font-family: 'Manrope', sans-serif;
   font-weight: 400;
   font-style: normal;
   color: #121417;
   width: 100%;
   height: 100vh;
   margin: 0;
   
   overflow: auto;

  &::-webkit-scrollbar {
       width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color:rgba(239, 237, 232, 0.10);
    border-radius: 12px;
  }
}

a {
  text-decoration: none;
}

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

 h1,
 h2,
 h3,
 h4,
 h5,
 h6,
 p {
   margin: 0;
 }

img, svg {
  display: block;
  width: 100%;
  height: 100%;
  
}

button {
   cursor: pointer;
 }
`;

export const Container = styled.div`
  padding: 150px 128px;
  margin: 0 auto;
  width: 1440px;
  min-height: 1210px;
`;
