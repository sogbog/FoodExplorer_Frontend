import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    @media (min-width: 800px){
            display: grid;
            grid-template-areas: "A B";

            padding: 10rem 0;
        }

`

export const Title = styled.div`
    margin-top: 150px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (min-width: 800px){
        margin-top: 0;
    }

    >h1{
        font-weight: 700;
        font-size: 3.7rem;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    animation: title_load-in 700ms;

    @keyframes title_load-in{
    0%{
        opacity: 0;
        transform: translateX(-15px);
    }

    100%{
            opacity: 1;
            transform: translateX(0);
        }
    }
`

export const LoginArea = styled.div`
    margin-top: 7rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px){
        max-width: fit-content;
        height: fit-content;
 
        margin: auto;
        padding: 6.4rem;

        border-radius: 1.6rem;

        background-color: ${({theme}) => theme.COLORS.DARK_700};
    }

    >h1{
        font-family: 'Poppins';
        font-size: 3.2rem;
        font-weight: 500;

        margin-bottom: 3.2rem;

        @media (max-width: 799px){
            display: none;
        }
    }

    animation: login_load-in 700ms;

    @keyframes login_load-in{
        0%{
            opacity: 0;
            transform: translateY(-15px);
        }

        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    min-width: clamp(26rem, 18rem + 32vw, 40rem);

    @media (min-width: 800px){
        min-width: clamp(28rem, 5rem + 23vw, 38rem);
    }
`

export const CreateAccount = styled.div`
    margin-top: 3.2rem;
    
    display: flex;
    justify-content: center;
    
    >a{
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-size: 1.4rem;
    }
`