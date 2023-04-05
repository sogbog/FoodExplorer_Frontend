import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    min-width: 21rem;
    max-width: 21rem;

    background-color: ${({theme}) => theme.COLORS.DARK_200};
    border: 1px solid ${({theme}) => theme.COLORS.DARK_300};
    border-radius: 8px;
    padding: 2.4rem;

    position: relative;

    >#likeButton{
        position: absolute;
        background: none;
        border: none;

        right: 1.6rem;
        top: 1.6rem;
    }

    >#description{
        display: none;
        text-align: center;
    }

    >#price{
        color: ${({theme}) => theme.COLORS.CAKE_200};
        font-size: 1.6rem;

        margin: 1.2rem 0;
    }

    @media (min-width: 800px){
        min-width: 30rem;

        >#description{
            display: block;
            font-size: 1.4rem;
        }

        >#price{
            font-size: 3.2rem;
            margin: 1.5rem 0;
            line-height: 5rem;
        }
    }
`

export const View = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    >img{
        width: 8.8rem;
        height: 8.8rem;
        object-fit: cover;
        border-radius: 50%;
    }

    .defaultImg{
        border-radius: 0;
        object-fit: contain;
    }
    
    >h3{
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-family: "Poppins";
        font-size: 1.4rem;
        font-weight: 500;
        margin-top: 1.2rem;
    }

    @media (min-width: 800px){
        >img{
            width: 17.6rem;
            height: 17.6rem;
        }

        .defaultImg{
            width: unset;
            height: 12.6rem;
            margin: 2.5rem 0;
        }
    
        >h3{
            font-size: 2.4rem;
            font-weight: 700;
            margin: 1.5rem 0;
        }
    }
`

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    margin-bottom: 2.4rem;
    
    >button{
        display: flex;
        background: none;
        border: none;
        align-items: center;
    }

    >p{
        font-size: 1.6rem;
    }

    @media (min-width: 800px){
        margin: 0;
        
        >p{
            font-size: 2rem;
            font-weight: 700;
        }
    }    
`

export const DesktopSection = styled.div`
    width: 100%;
    @media (min-width: 800px){
        display: flex;
        gap: 1.6rem;

        margin-bottom: 2.2rem;
        width: 21rem;
    }
`