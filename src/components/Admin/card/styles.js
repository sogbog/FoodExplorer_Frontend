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
    padding: 5.5rem 2.4rem;


    position: relative;

    #editButton{
        position: absolute;

        right: 1.6rem;
        top: 1.6rem;

        >button{
            background: none;
            border: none;
        }
        
        img{
            width: 2.4rem;
        }
    }

    >#likeButton{
        position: absolute;
        background: none;
        border: none;

        left: 1.6rem;
        top: 1.6rem;

        >img{
            width: 2.4rem;
        }
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

        padding: 2.4rem 2.4rem 5.5rem 2.4rem;

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