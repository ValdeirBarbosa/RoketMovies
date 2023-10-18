import styled from 'styled-components'

export const Container = styled.div`


h2{
  color:${({ theme }) => theme.COLORS.COLOR_SUB_TITLE}
}
>Button{
  width: 200px;;
}
/* .liner{
  padding:0 25px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  >Button{
    width:200px;
    cursor:pointer
  }
} */


`;
export const Liner = styled.div`
  display: flex;
  height: 100px;
  flex-direction: row;
  padding:0 25px;
  margin: 15px 0;
  align-items: center;
  justify-content:space-between;

  >Button{
    width:200px;
    height: 50%;
    cursor:pointer;
    align-self: center;
  }




`

export const MovieList = styled.div`
display: flex;
flex-direction: column;
gap:10px;
padding:25px;

`
