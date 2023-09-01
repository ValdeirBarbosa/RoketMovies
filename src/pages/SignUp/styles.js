import styled from "styled-components"

import BackgroundImage from "../../assets/SignIn.png"

export const Container = styled.div`
height:100vh;
display:flex;
align-items:stretch;
`;



export const Form = styled.form`
padding:0 136px;
display: flex;
flex-direction:column;
justify-content: center;
align-items: left;
/* background-color: red; */


> h1{
  font-size: 48px;
font-style: normal;
font-weight: 700;
color:${({ theme }) => theme.COLORS.PINK}
};
>h2{
  color:${({ theme }) => theme.COLORS.WHITE};
  
text-align: left;
font-size: 24px;
font-style: normal;
font-weight: 500;
margin:48px 0;



  
};
>p{
 

}

>p{
  font-size: 14px;
  color:${({ theme }) => theme.COLORS.COLOR_SUB_TITLE}
}

>a{
  margin-top: 124px;
  height: 17px;
  line-height: 17px;
  text-decoration: none;
  color:${({ theme }) => theme.COLORS.PINK};


}
`;
export const Background = styled.div`
flex:1;
background:url(${BackgroundImage}) no-repeat center center;
background-size: cover;
opacity: 0.5;
 `
