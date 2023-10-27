import styled from "styled-components";


export const Container = styled.div`



`

export const Content = styled.div`
margin-left:106px;
margin-right:106px;
>h1{
  color:${({theme})=>theme.COLORS.WHITE}

}
`

export const Header_profile = styled.div`
width:100%;
height: 30px;
display: flex;
align-items:center;


>a{
  display: flex;
  flex-direction: row-reverse;
  gap:5px;
  /* margin-left: 2rem; */
  color:${({ theme }) => theme.COLORS.PINK};
  text-decoration: none;
}
svg{
 color:${({ theme }) => theme.COLORS.PINK};

}

`
export const Section = styled.div`
height: 453px;
background-color: rosybrown;
padding:25px;
gap:30px;
display: grid;
grid-template-columns: auto;
grid-template-rows: 55px;
grid-template-areas:
"titulo nota"
"obs obs";
Input{
width:50%;
height: 10px;
}
`