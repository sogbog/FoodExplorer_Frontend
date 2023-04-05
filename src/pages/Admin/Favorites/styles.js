import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

    >footer{
        margin-top: auto;
    }

    >h2{
        font-size: 3.2rem;
        font-family: "Poppins";
        font-weight: 500;

        margin: 5.6rem 0 3.2rem 3.5rem;

        @media(min-width: 800px){
            margin: 3.4rem 0 3.2rem 12.3rem;
    }
    }
`

export const Favs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    
    padding: 0 3rem 9rem 3rem;

    @media(min-width: 800px){
        flex-direction: row;
        flex-wrap: wrap;
        gap: 4.8rem;

        padding: 0 12.3rem 9rem 12.3rem;
    }

    animation: favs_load-in 500ms;
    
    @keyframes favs_load-in{
        0%{
            transform: translateY(15px);
            opacity: 0;
        }

        100%{
            transform: translateY(0);
            opacity: 1;
        }
    }
`