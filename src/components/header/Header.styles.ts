import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 12.5rem;
    width: 100wh;
    background-color: ${props => props.theme["--gray-900"]};
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
        height: 3rem;
    }
    
`