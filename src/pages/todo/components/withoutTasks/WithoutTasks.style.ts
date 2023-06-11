import styled from 'styled-components'

export const WithoutTaskContainer = styled.div`
  width: ${(props) => props.theme['--width-center']};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  font-size: 1rem;
  border-top: 1px solid ${(props) => props.theme['--gray-100']};
  border-radius: 8px;
  padding-top: 2rem;
`
