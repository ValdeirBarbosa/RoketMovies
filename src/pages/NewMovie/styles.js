import styled from "styled-components";


export const Container = styled.div`



`

export const Content = styled.div`
margin-left:106px;
margin-right:106px;
>h1{
  color:${({theme})=>theme.COLORS.WHITE}

}

Section{
height: 453px;
padding:25px;
gap:30px;
display: grid;
grid-template-columns: auto;
grid-template-rows: 55px;
grid-template-areas:
"header header"
"titulo nota "
"obs obs ";
>h2{
  grid-area:header
}
Textarea{
  grid-area: obs;
}
>Button{
  background-color: ${({ theme }) => theme.COLORS.DARK_1};
  color: ${({ theme }) => theme.COLORS.WHITE};
}
>Button+Button{
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.DARK_1};
}
&:nth-child(3){
   height: 50px;
   .marcadores{
      display: flex;
    flex-direction: row-reverse;
    gap:5px;
    justify-content: left;

   }

}



 



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
// export const Sections = styled.div`
// height: 453px;
// padding:25px;
// gap:30px;
// display: grid;
// grid-template-columns: auto;
// grid-template-rows: 55px;
// grid-template-areas:
// "titulo nota"
// "obs obs";


// >Textarea{
//   grid-area: obs;
// }
// `