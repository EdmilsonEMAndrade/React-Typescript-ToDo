import styled from 'styled-components'

export const WithTaskContainer = styled.div`
  width: calc(55vw + 5.8rem);
  background: ${(props) => props.theme['--gray-400']};
  border-radius: 8px;
  min-height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p,
  del {
    text-align: start;
    width: calc(55vw);
    margin: 0.5rem 0;
  }

  .circle {
    color: ${(props) => props.theme['--blue']};
    margin-left: 0.5rem;
  }
  .circle:hover {
    color: ${(props) => props.theme['--blue-dark']};
  }
  .checkCircle {
    margin-left: 0.5rem;
    color: ${(props) => props.theme['--purple']};
  }
  .checkCircle:hover {
    color: ${(props) => props.theme['--purple-dark']};
  }
  .trash {
    margin-right: 0.5rem;
  }
  .trash:hover {
    color: ${(props) => props.theme['--danger']};
  }
`

export const StyledWithTaskContainer = styled(WithTaskContainer)`
  + ${WithTaskContainer} {
    margin-top: 0.75rem;
  }
`
