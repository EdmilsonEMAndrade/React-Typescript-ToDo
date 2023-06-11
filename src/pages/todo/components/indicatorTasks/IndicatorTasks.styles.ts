import styled from 'styled-components'

export const IndicatorTasksContainer = styled.div`
  width: ${(props) => props.theme['--width-center']};
  margin: 2rem 0 0.75rem 0;
  display: flex;
  justify-content: space-between;

  div {
    font-size: 0.875rem;
    display: flex;
    margin-bottom: 1.5rem;
  }
`
