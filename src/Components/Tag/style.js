import styled from 'styled-components'

export const Container = styled.span`
font-size: 12px;
padding: 5px 14px;
border-radius: 5px;
margin-right: 6px;
color:${({ theme }) => theme.COLORS.CARD_FONT_COLOR_TITLE};
background-color:${({ theme }) => theme.COLORS.BORDER_1};
/* box-shadow: 2px -2px 0 0  rgba(0,0,0,0.5); */
 transition: 1s;

&:hover{
  cursor: pointer;
  box-shadow: 1px 1px 2px  ${({ theme }) => theme.COLORS.PINK};
  color:${({ theme }) => theme.COLORS.PINK};
  font-weight:bold;
  transition: 1s;
  }
`