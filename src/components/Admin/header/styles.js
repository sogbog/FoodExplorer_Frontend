import styled from "styled-components";

export const Container = styled.header`
    background-color: ${({theme}) => theme.COLORS.DARK_700};

    padding: 5.6rem 2.8rem 2.4rem 2.8rem;

    @media (min-width: 800px){
        padding: 1.2em clamp(2rem, 4vw ,10rem);
    }

    @media (min-width: 1100px){
        padding: 2.4rem clamp(4rem, 5vw, 12.3rem);
    }
`

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    >button{
        background: none;
        border: none;

        @media (min-width: 800px){
            display: none;
        }
    }

    >.NavLink{
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        text-align: center;
        font-size: 1.6rem;
        padding: 0 1rem;

        @media (max-width: 799px){
            display: none;
        }

        @media (max-width: 1099px){
        font-size: 1.4rem;
        }
    }

    >#Logout{
        padding-left: 1rem;
        background: none;
        border: none;
        display: block;

        @media (max-width: 799px){
            display: none;
        }
    }

    >#Title{
        display: flex;
        align-items: center;

        >span{
            color: ${({theme}) => theme.COLORS.CAKE_200};
            font-size: 1.2rem;

            @media(min-width: 800px){
                margin-right: 8px;
            }
        }

        @media(min-width: 800px){
            flex-direction: column;
            align-items: flex-end;
        }
    }
`

export const Title = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    padding-right: 8px;

    >h1{
        font-size: 2.1rem;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    >img{
        max-height: 3rem;
    }
`

export const SearchBar = styled.div`
    @media (max-width: 799px){
        display: none;
    }

    position: relative;

    display: flex;
    gap: 1.4rem;
    border-radius: 5px;
    height: 4.8rem;

    padding: 1.2em clamp(2rem, 3vw ,15rem);

    background-color: ${({theme}) => theme.COLORS.DARK_900};

    @media (max-width: 1099px){
        padding: 1.2em clamp(2rem, 3vw ,10rem);
    }

    >input{
        background: none;
        border: none;

        color: ${({theme}) => theme.COLORS.LIGHT_500};

        width: clamp(21rem,3rem + 15vw,34rem)
    }

    >#dropDown{
        position: absolute;
        top: 4.5rem;
        left: 0;
        z-index: 1;

        display: flex;
        flex-direction: column;
        gap: 8px;

        width: 100%;
        max-height: 13.7rem;
        overflow-y: auto;
        padding: 1rem 0;
        background-color: ${({theme}) => theme.COLORS.DARK_900};

        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;

        a{
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            padding: 0 1.5rem;
            font-size: 1.6rem;
        }

        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: ${({theme}) => theme.COLORS.DARK_900};
        }

        ::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.COLORS.LIGHT_600};
            border-radius: 8px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #606367;
        }

    }

    @media (max-width: 1099px){
        >input{
            width: clamp(21rem,5rem + 10vw,30rem)
        }
    }
`

export const Orders = styled.div`
    #Mobile{
        background: none;
        border: none;

        position: relative;

        >span{
            background-color: ${({theme}) => theme.COLORS.TOMATO_100};
            color: ${({theme}) => theme.COLORS.LIGHT_100};

            font-size: 1.4rem;
            font-family: "Poppins";

            padding: 1px 6.1px 0 6.1px;

            border-radius: 50%;
            width: fit-content;

            position: absolute;
            bottom: 50%;
            right: -50%;
        }

        @media (min-width: 800px){
            display: none;
        }
    }

    #Desktop{
        display: flex;
        gap: 8px;
        padding: 1.6rem clamp(1rem,1rem + 2vw,4.7rem);

        @media (max-width: 1099px){
            display: flex;
            gap: 6px;
            padding: 1.5rem clamp(1rem, 1vw,4.7rem);
        }
        
        @media (max-width: 799px){
            display: none;
        }
    }
`