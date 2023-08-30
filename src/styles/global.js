import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
}

body{
  background-color: ${({ theme }) => theme.COLORS.DARK_3};
}




`;