import styled, { css } from 'styled-components'

interface WithTaskContainerProps {
  disabled: boolean
}

export const WithTaskContainer = styled.div<WithTaskContainerProps>`
  width: ${(props) => props.theme['--width-center']};
  background: ${(props) => props.theme['--gray-400']};
  border-radius: 8px;
  min-height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .5rem;
  p,
  del {
    text-align: start;
    width: 55vw;
    margin: 0.5rem 0;
  }

  .circle {
    color: ${(props) => props.theme['--blue']};
    margin-left: 0.5rem;
  }
  .checkCircle {
    margin-left: 0.5rem;
    color: ${(props) => props.theme['--purple']};
  }
  .trash {
    margin-right: 0.5rem;
  }
  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ${(props) =>
    !props.disabled &&
    css`
      cursor: pointer;
      .circle:hover {
        color: ${(props) => props.theme['--blue-dark']};
      }

      .checkCircle:hover {
        color: ${(props) => props.theme['--purple-dark']};
      }

      .trash:hover {
        color: ${(props) => props.theme['--danger']};
      }
    `}
  
  ${(props) => props.disabled && 'cursor: not-allowed;'}

`

export const StyledWithTaskContainer = styled(WithTaskContainer)`
  + ${WithTaskContainer} {
    margin-top: 0.75rem;
  }
`
