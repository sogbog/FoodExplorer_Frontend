import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    min-height: 100vh;

    >footer{
        margin-top: auto;
    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    
    background-color: ${({theme}) => theme.COLORS.DARK_700};

    font-size: 2.1rem;
    line-height: 1.8px;

    padding: 5.6rem 2.8rem 2.4rem 2.8rem;
`

export const SearchBar = styled.div`  
    display: flex;
    gap: 1.4rem;
    border-radius: 5px;

    background-color: ${({theme}) => theme.COLORS.DARK_900};

    padding: 1.2rem 1.4rem;

    margin: 3.6rem 2.8rem;

    >input{
        background: none;
        border: none;

        color: ${({theme}) => theme.COLORS.LIGHT_500};

        width: clamp(21rem,3rem + 25vw,34rem)
    }

    >img{
        width: 1.9rem;
    }
`

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    
    font-family: "Poppins";
    font-size: 2.4rem;
    font-weight: 300;

    padding: 0 2.8rem;

    >a{
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        padding: 1rem 0;
    }

    >button{
        background: none;
        border: none;
        border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};

        color: ${({theme}) => theme.COLORS.LIGHT_300};

        font-family: "Poppins";
        font-size: 2.4rem;
        font-weight: 300;

        text-align: left;
        padding: 1rem 0;
    }

    >*{
        border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
    }
`

export const Results = styled.ul`
    min-height: max-content;

    display: flex;
    flex-direction: column;

    padding: 2.8rem 2.8rem;

    list-style: none;
    gap: 2rem;

    >li{
        font-size: 2rem;

        a{
            color: ${({theme}) => theme.COLORS.LIGHT_300};
        }
    }
`