import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 8px 1.6rem;

    width: fit-content;
    
    border-radius: 8px;

    font-size: 1.6rem;

    background-color: ${({theme}) => theme.COLORS.LIGHT_600};

    height: 3.2rem;

    >button{
        background: none;
        border: none;

        img{
            width: 8px;
        }
    }
`