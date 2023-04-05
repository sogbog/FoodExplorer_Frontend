import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    justify-content: space-between;

    background-color: ${({theme}) => theme.COLORS.DARK_600};
    padding: 2.8rem 2.9rem;

    @media (min-width: 800px){
        padding: 2.4rem 12.3rem;
    }

    >#logo{
        display: flex;
        gap: 7px;
        padding-right: 1rem;

        >h2{
            color: ${({theme}) => theme.COLORS.LIGHT_700};
        }
    }

    >p{
            color: ${({theme}) => theme.COLORS.LIGHT_200};
            font-size: 1.2rem;
            text-align: end;
            margin: auto 0;

            @media (max-width: 390px){
                text-align: center;
                margin: auto;
            }
    }
`