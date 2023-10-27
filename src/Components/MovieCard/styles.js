import styled from "styled-components"


export const Container = styled.div`
background-color: ${({ theme }) => theme.COLORS.PINK_LUCID};
border:1px solid ${({ theme }) => theme.COLORS.PINK_LUCID};
display: flex;
padding: 32px;
height: 208px;
flex-direction: column;
justify-content: center;
gap: 15px;
border-radius:18px;




.start_rate{
  display: flex;
  flex-direction: row;
  height: 24px;
  align-items: center;
  gap:5px;
}
svg{
  color:${({ theme }) => theme.COLORS.PINK};
  fill:${({ theme }) => theme.COLORS.PINK};
}
svg:last-child{
  color:${({ theme }) => theme.COLORS.PINK};
  fill:transparent
}


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