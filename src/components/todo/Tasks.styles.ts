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

export const BodyTaskContainer = styled.body`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    header{
        width: calc(55vw + 5.8rem);
        div{
            margin: 2rem 0 0.75rem 0;
            display: flex;
            justify-content: space-between;
        }
    }
    header div{
        font-size: 0.875rem;
        display: flex;
        margin-bottom: 1.5rem;
    }
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

    .withoutTasks{
        width: calc(55vw + 5.8rem);
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
        font-size: 1rem;
        border-top: 1px solid ${props => props.theme["--gray-100"]};
        border-radius: 8px;
        padding-top: 2rem;
    }

    .withTasks{
        background: ${props => props.theme["--gray-400"]};
        border-radius: 8px;
        padding: .5rem;
        display: flex;
        justify-content: space-between;
        width: calc(55vw + 5.8rem);
    }
    .withTasks + .withTasks{
        margin-top: 0.75rem;
    }
    .withTasks p, del{
        text-align: start;
        width: calc(55vw);
    }

    .circle{
        color: ${props => props.theme["--blue"]};
    }
    .circle:hover{
        color: ${props => props.theme["--blue-dark"]};
    }
    .checkCircle{
        color: ${props => props.theme["--purple"]};
    }
    .checkCircle:hover{
        color: ${props => props.theme["--purple-dark"]};
    }
    .trash:hover{
        color: ${props => props.theme["--danger"]};
    }

    
    
`