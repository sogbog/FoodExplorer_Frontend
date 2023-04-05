import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    min-height: 100vh;
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        border:1px solid black;
    }

    >footer{
        margin-top: auto;
    }
`
export const Main = styled.div`
    padding: 4.4rem 0 2.5rem 2.4rem;
    
    @media (min-width: 800px){
        padding: 13.4rem 0 3rem clamp(2rem, 7vw ,10rem);
    }

    @media (min-width: 1100px){
        padding: 16.4rem 0 4.8rem clamp(4rem, 8vw, 12.3rem);
    }
`

export const Banner = styled.div`
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 3px;
    margin-right: 1.6rem;

    display: flex;

    @media (min-width: 425px){
        max-height: 12rem;
        margin-left: 1.3rem;
    }

    >img{
        height: 12.1rem;
        position: relative;

        left: -1.3rem;
        bottom: -5px;

        @media (min-width: 349px){
            bottom: 1px;
        }

        @media (min-width: 425px){
            height: 14.9rem;
            left: -2.5rem;
            bottom: 2.9rem;
        }
    }

    >div{
        font-family: "Poppins";

        margin: auto 0 auto 0;
        padding-right: 5px;

        @media (min-width: 425px){
            margin: auto 0 auto -2.5rem;
        }

        h1{
            font-size: 1.8rem;
            font-weight: 600;
        }

        p{
            font-size: 1.2rem;
        }
    }

    @media (min-width: 800px){
        border-radius: 8px;
        max-height: 26rem;
        padding-right: 1rem;
        margin: 0;
        margin-right: clamp(2rem, 7vw ,10rem);

        >img{
            height: 41.2rem;
            position: relative;

            left: -7.6rem;
            bottom: 14rem;

            @media (max-width: 1099px){
                height: 26rem;
                left: -6.5rem;
                bottom: -7px;
            }
        }

        >div{
            font-family: "Poppins";
            max-height: 26rem;
            margin: auto 0 auto -5.5rem;

            h1{
                font-size: 4rem;
                font-weight: 500;
                margin-bottom: 8px;
            }

            p{
                font-family: "Roboto";
                font-size: 1.6rem;
            }
        }
    }

    animation: banner_load-in 700ms;

    @keyframes banner_load-in{
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

export const Content = styled.div`    
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    animation: gallery_load-in 700ms;

    .nameWrapper{
        display: flex;
        gap: 2.4rem;

        align-items: center;

        margin-bottom: 2.4rem;

        >h2{
            font-family: "Poppins";
            font-size: 1.8rem;
            font-weight: 500;
        }

        >button{
            background: none;
            border: none;
        }

        @media(min-width: 800px){
            >h2{
                font-size: 3.2rem;
            }
        }
    }

    @keyframes gallery_load-in{
    0%{
        opacity: 0;
        transform: translateY(15px);
    }

    100%{
            opacity: 1;
            transform: translateY(0);
        }
    }
`

export const NewCategory = styled.div`
    display: flex;
    align-items: center;

    gap: 1.2rem;
    margin: 6.2rem 0;

    h2{
        font-family: "Poppins";
        font-size: 1.8rem;
        font-weight: 500;

        width: fit-content;
    }

    .wrapper{
            display: flex;
            flex-wrap: wrap;
            gap: 1.6rem;

            padding-right: 2.4rem;
        }
    
    input{
        background-color: ${({theme}) => theme.COLORS.DARK_700};

        border: none;
        border-radius: 8px;

        padding: 1.4rem 1.6rem;

        font-family: "Roboto";
        font-size: 1.6rem;

        color: ${({theme}) => theme.COLORS.LIGHT_300};

    }

    button{
        padding: 1.2rem 2.5rem;
        width: fit-content;
    }

    @media(max-width: 574px){
        flex-direction: column;
        align-items: unset;
        
        input{
            max-width: max-content;
        }
    }
    
    @media(min-width: 800px){
        h2{
            font-size: 3.2rem;
        }

        .wrapper{
            gap: 3.2rem;
        }
    }

    animation: newCat_load-in 700ms;

    @keyframes newCat_load-in{
        0%{
            opacity: 0;
        }

        100%{
            opacity: 1;
        }
    }
`