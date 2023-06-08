import styled from "styled-components";


export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.375rem;
    margin-top: -1.5rem;

    input{
        width: 55vw;
        background: ${props => props.theme["--gray-500"]};
        border-radius: 8px;
        margin-right: 0.5rem;
        height: 3rem;
        border: 0;
        padding-left: 0.5rem;
        color: ${props => props.theme["--gray-300"]};
    }
    
    input:focus{
        color: ${props => props.theme["--gray-100"]};
    }

    button{
        font-size: 0.875rem;
        border-radius: 8px;
        height: 3rem;
        width: 5.5rem;
        border: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 0.5rem;
        background: ${props => props.theme["--blue-dark"]};
        color: ${props => props.theme["--white"]};
        transition: background-color 0.5s;
        gap: 0.2rem
    }

    button:hover{
        background: ${props => props.theme["--blue"]};
    }

    .errorMessage {
       
        position: absolute;
        top: 14.5rem;
        left: 20vw;
        color: ${props => props.theme["--danger"]};
    }
`

export const BodyTaskContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .tasksCreated{
        margin-right: 0.5rem;
        color: ${props => props.theme["--blue"]};
    }
    .tasksDone{
        margin-right: 0.5rem;
        color: ${props => props.theme["--purple"]};
    }
    .highlightedNumber{
        color: ${props => props.theme["--gray-200"]};
        background: ${props => props.theme["--gray-400"]};
        border-radius: 10px;
        padding: 0 .5rem;
    }
    
`

