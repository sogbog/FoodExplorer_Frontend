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

       margin: 5.6rem 0 1.7rem 3.5rem;

       @media(min-width: 800px){
            margin: 3.4rem 0 3.2rem 12.3rem;
        }
    }
`

export const MobileOrders = styled.ul`
    margin: 0 3.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.7rem;

    padding-bottom: 5.6rem;
    
    @media(min-width: 800px){
        display: none;
    }

    animation: list_load-in 500ms;
    
    @keyframes list_load-in{
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

export const DesktopOrders = styled.table`
    @media(max-width: 799px){
        display: none;
    }

    border: 2px solid ${({theme}) => theme.COLORS.DARK_1000};
    border-radius: 8px 8px 0 0;
    border-spacing: 0;

    margin: 0 11.8rem 3.2rem 11.8rem;

    th{
        font-size: 1.4rem;
        font-weight: 700;

        text-align: start;
        padding: 2.1rem 2.4rem;
    }

    th:nth-child(odd){
        border-right: 2px solid ${({theme}) => theme.COLORS.DARK_1000};
    }

    th:nth-child(2){
        border-right: 2px solid ${({theme}) => theme.COLORS.DARK_1000};
    }

    tbody{
        td{
            border-top: 2px solid ${({theme}) => theme.COLORS.DARK_1000};
            padding: 1.6rem 2.4rem;
        }

        td:nth-child(odd){
        border-right: 2px solid ${({theme}) => theme.COLORS.DARK_1000};
        }

        td:nth-child(2){
            border-right: 2px solid ${({theme}) => theme.COLORS.DARK_1000};
        }
    }

    animation: table_load-in 500ms;

    @keyframes table_load-in{
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