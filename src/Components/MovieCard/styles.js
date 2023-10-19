import styled from "styled-components"


export const Container = styled.div`
background-color: ${({ theme }) => theme.COLORS.PINK_LUCID};
/* border:1px solid ${({ theme }) => theme.COLORS.PINK}; */
display: flex;
padding: 32px;
flex-direction: column;
align-items: flex-start;
gap: 15px;
border-radius:18px;

h1{
   color:${({ theme }) => theme.COLORS.CARD_FONT_COLOR_TITLE};
   text-transform: capitalize;
}

.description-movie{
  text-align:justify; 
  overflow-y:scroll;
  font-size: 16px;
  color:${({ theme }) => theme.COLORS.CARD_FONT_COLOR_DESCRIPTION};
  display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
align-self: stretch;
overflow: hidden;
color: var(--Gray, #999591);
text-overflow: ellipsis;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

`