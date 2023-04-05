import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 1.3rem;

    align-items: center;

    img{
        height: 7.2rem;
        width: 7.2rem;
        object-fit: cover;
        border-radius: 50%;
    }

    .defaultImg{
        width: 4.5rem;
        height: unset;
        border-radius: 0;
        margin: 0 1.35rem;
    }
`

export const Text = styled.div`
    >button{
        font-size: 1.2rem;
        font-family: "Roboto";
        color: ${({theme}) => theme.COLORS.TOMATO_400};

        background: none;
        border: none;
    }
`

export const Description = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    
    h3{
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-family: "Poppins";
        font-size: 2rem;
        font-weight: 500;
        line-height: 3.2rem;
    }

    >p{
        font-size: 1.2rem;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
`