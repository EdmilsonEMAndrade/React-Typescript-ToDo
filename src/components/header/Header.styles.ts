import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 12.5rem;
  width: 100vw;
  background-color: ${(props) => props.theme['--gray-900']};
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    height: 3rem;
    margin: auto;
  }
`
export const DivHeaderContainer = styled.div`
  
  position: absolute;
  margin-left: calc(55vw + 1.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    color: ${(props) => props.theme['--gray-100']};

   

    border-bottom: 3px solid transparent;
    border-top: 3px solid transparent;

    &:hover{
      border-bottom: 3px solid ${(props) => props.theme['--purple-dark']};
    }
  }
  
`