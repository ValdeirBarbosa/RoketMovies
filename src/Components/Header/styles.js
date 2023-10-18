import styled from 'styled-components'

export const Container = styled.div`
width:100%;
height: 150px;
background-color: ${({theme})=>theme.COLORS.PINK_LUCID};

display: flex;
align-items:center;
gap:64px;
padding:5px;
/* justify-content: space-evenly; */


>a{
  display: flex;
  flex-direction: row-reverse;
  gap:5px;
  margin-left: 2rem;
  color:${({theme})=>theme.COLORS.PINK};
  text-decoration: none;
}
svg{
 color:${({ theme }) => theme.COLORS.PINK};
 
}
img{
    border-radius: 100%;
  }
  h3{
    color:${({ theme }) => theme.COLORS.COLOR_SUB_TITLE}
  }
.search_field{
flex:2;
}

.field_profile{
  display: flex;
  gap:9px;
  justify-content: center;
  align-items: center;
}

.text-values{
  display: flex;
  flex-direction: column;
  >span{
    align-self: end;
    cursor: pointer;
    color:${({ theme }) => theme.COLORS.COLOR_FONT_1}
  }
  
}
`