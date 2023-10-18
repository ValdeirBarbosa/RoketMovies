import styled from 'styled-components'

export const Container = styled.div`
width:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


>header{
  width:100%;
  height: 144px;
  display: flex;
  align-items: center;
  padding: 0 124px;
  background-color: ${({ theme }) => theme.COLORS.DARK_1};

  
}




`;

export const Form = styled.form`
max-width: 340px;
margin-top:24px;
`;

export const Avatar = styled.div`
position: relative;
margin: -124px auto 32px;

>img{
  width:186px;
  height: 186px;
  border: 4px solid ${({ theme }) => theme.COLORS.DARK_2};
  border-radius:50%;

};

>label{
  width:48px;
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  border-radius:50%;
  display:flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 7px;
  right: 7px;
 transition:500ms;
  cursor: pointer;
  &:hover{
  transform: rotate(45deg);
  
}
  input{
    display: none;
  };
  svg{
    width: 30px;
    height:20px;
    color:${({ theme }) => theme.COLORS.DARK_2}
  }
};

`;
export const Header_profile = styled.div`
width:100%;
height: 150px;
background-color: ${({ theme }) => theme.COLORS.PINK_LUCID};

display: flex;
align-items:center;

>a{
  display: flex;
  flex-direction: row-reverse;
  gap:5px;
  margin-left: 2rem;
  color:${({ theme }) => theme.COLORS.PINK};
  text-decoration: none;
}
svg{
 color:${({ theme }) => theme.COLORS.PINK};
}

`
