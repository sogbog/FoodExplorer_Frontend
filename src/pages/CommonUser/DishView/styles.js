import styled from "styled-components";

export const Container = styled.div` 
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
    >h2{
        font-size: 2.4rem;
        margin-left: 13.5rem;

        position: absolute;

        left: 20vw;
        top: 50vh;

        @media(min-width: 800px){
            left: 35vw;
            top: 50vh;
        }
    }
    
    >nav{
        margin: 3.7rem 0 1.6rem 5.6rem;

        a{
            display: flex;
            align-items: center;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-size: 2.4rem;
            font-family: "Poppins";
            max-width: fit-content;
            
            img{
                height: 3.2rem;
            }
        }
    }

    >footer{
        margin-top: auto;
    }

    @media(min-width: 800px){
        >nav{
            margin: 2.4rem 0 4.6rem 5.6rem;

            a{
                font-weight: 700;
            }
        }
    }

    @media(min-width: 1024px){
        >nav{
            margin: 2.4rem 0 4.2rem 12.1rem;
        }
    }
`

export const Dish = styled.div`
    >img{
        width: 26.4rem;
        height: 26.4rem;
        object-fit: cover;
        display: flex;

        margin: auto;

        border-radius: 50%;
        
        animation: img_load-in 500ms;

        @keyframes img_load-in{
            0%{
                transform: translateY(-15px);
                opacity: 0;
            }

            100%{
                transform: translateY(0);
                opacity: 1;
            }
        }

        .defaultImg{
            width: 4.5rem;
            height: unset;
            border-radius: 0;
        }
    }

    @media(min-width: 800px){
        display: flex;
        align-items: center;

        padding-bottom: 5rem;
        
        >img{
            width: 39rem;
            height: 39rem;
            margin: 0 4.8rem 0 5.6rem;
        }

        .defaultImg{
            width: 20rem;
            height: unset;
            border-radius: 0;
            margin: 9.5rem 13.1rem;
        }
    }

    @media(min-width: 1024px){
        >img{
            margin: 0 4.8rem 0 12.1rem;
        }
    }
`

export const Info = styled.div`
    @media(min-width: 800px){
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
    }

    animation: info_load-in 500ms;

    @keyframes info_load-in{
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

export const Description = styled.div`
    padding: 0 5.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    >h2{
        margin: 1.6rem 0 2.4rem 0;
        font-family: "Poppins";
        font-size: 2.7rem;
        font-weight: 500;
    }

    >p{
        font-family: "Poppins";
        font-size: 1.6rem;
        font-weight: 400;
        text-align: center;
        margin-bottom: 2.4rem;
    }

    @media(min-width: 800px){
        padding: 0;
        align-items: flex-start;

        >h2{
            font-size: 4rem;
            margin: 0 0 2.4rem 0;
            padding-right: 3rem;
        }

        >p{
            font-size: 2.4rem;
            margin: 0;
            text-align: start;

            padding-right: 3rem;
        }
    }
`

export const Ingredients = styled.div`
    display: grid;
    grid-template-columns: repeat(3, max-content);
    justify-content: center;
    gap: 2.4rem;

    padding: 0 5.6rem;

    >div{
        height: fit-content;
        min-width: max-content;
        margin: 0 auto;
    }

    @media(min-width: 800px){
        padding: 0;
        gap: 1.2rem;

        justify-content: flex-start;
    }

    @media(min-width: 1090px){
        padding: 0;
        grid-template-columns: repeat(6, max-content);
        gap: 1.2rem;

        justify-content: flex-start;
    }
`

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;

    >button{
        display: flex;
        background: none;
        border: none;
        align-items: center;
    }

    >p{
        font-size: 2.3rem;
        font-weight: 700;
    }

    @media(min-width: 800px){
        >p{
            font-size: 2rem;
            font-weight: 700;
        }
    }
`

export const Order = styled.div`
    display: flex;
    gap: 1.6rem;
    justify-content: center;

    padding: 0 5.6rem 5.4rem 5.6rem;
    margin-top: 4.8rem;

    >button{
        display: flex;
        gap: 5.4px;
        justify-content: center;
        align-items: center;
        min-width: fit-content;
        max-width: 20rem;
    }

    >#Desktop{
        display: none;
    }

    @media(min-width: 800px){
        justify-content: flex-start;
        padding: 0 4rem 0 0;
        margin-top: 2.4rem;

        >#Mobile{
            display: none;
        }

        >#Desktop{
            display: flex;
            line-height: 9px;
        }
    }
`