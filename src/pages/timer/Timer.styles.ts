import styled, { keyframes } from "styled-components";

export const TimerContainer = styled.main`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    & form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["--gray-200"]};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;

    @media(max-width: 700px){
        font-size: 1rem;
        label {
            margin: 0.5rem;
        }
    }

`

export const ButtonContainer = styled.button`
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: ${(props) => props.theme["--green"]};
    font-weight: bold;
    color: ${(props) => props.theme["--gray-100"]};
    border-radius: 8px;
    cursor: pointer;

    &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${(props) => props.theme["--green-dark"]};
    }

`

export const CountupContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${(props) => props.theme["--gray-100"]};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    span{
        padding: 2rem 1rem;
        border-radius: 8px;
        background-color: ${(props) => props.theme["--gray-900"]};
    }

    @media(max-width: 700px){
        font-size: 5rem;
        line-height: 4rem;
    }

    @media(max-width: 415px){
        font-size: 3.75rem;
        line-height: 3rem;
        span{
            padding: 1rem 0.5rem;
        }
        
    }
    @media(max-width: 280px){
        font-size: 2.5rem;
        line-height: 2rem;
    }
`

function blinkingEffect() {
    return keyframes`
      50% {
        opacity: 0;
      }
    `;
}

interface CountupSeparatorProps {
    isAtiveCycle: boolean
}

export const CountupSeparator = styled.div<CountupSeparatorProps>`
    padding: 2rem 0;
    color: ${(props) => props.theme["--blue"]};
    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;

    animation: ${blinkingEffect} ${(props) => props.isAtiveCycle ? "1s linear infinite" : null};

    @media(max-width: 280px){
        padding: 0;
        width: 2rem;
    }
`
const InputContainerStyle = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${props => props.theme["--gray-900"]};
    font-weight:bold;
    font-size: 1.125;
    padding: 0 0.5rem;
    color: ${(props) => props.theme["--gray-200"]};
    &:focus{
        box-shadow: none;
        border-color: ${props => props.theme["--blue"]};
    }

    &::placeholder{
        color: ${(props) => props.theme["--gray-300"]};
    }
`

export const InputTask = styled(InputContainerStyle)`
    flex: 1;    
    &::-webkit-calendar-picker-indicator{
        display: none !important;
    }
`

export const InputMinutesAmount = styled(InputContainerStyle)`

`