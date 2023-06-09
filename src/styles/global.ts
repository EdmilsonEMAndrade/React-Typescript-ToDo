import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: ${(props) => props.theme['--gray-600']};
    color: ${(props) => props.theme['--gray-300']};
    -webkit-font-smoothing: antiliased;
}

body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
}

:focus{
    outline: transparent;
    box-shadow: 0 0 0 2px ${(props) => props.theme['--blue-dark']};
}

`
