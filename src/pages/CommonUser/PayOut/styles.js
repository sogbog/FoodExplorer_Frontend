import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    >footer{
        margin-top: auto;
    }
`

export const Content = styled.div`
    @media(min-width: 800px){
        display: flex;
        justify-content: space-between;
    }
`

export const Orders = styled.div`
    padding: 5.6rem 1.6rem 0 3.5rem;

    >h2{
        font-family: "Poppins";
        font-size: 3.2rem;
        font-weight: 500;
    }

    >p{
        font-family: "Poppins";
        font-size: 2rem;
        font-weight: 500;
    }

    >#no_orders{
        margin-top: 4rem;
    }

    @media(min-width: 800px){
        padding: 3.4rem 3rem 0 5rem;
    }

    @media(min-width: 1200px){
        padding: 3.4rem 3rem 0 12.3rem;
    }
`

export const PayArea = styled.div`
    display: none;

    @media(min-width: 800px){
        
        display: flex;
        flex-direction: column;

        padding: 3.4rem 5rem 0 0;
    
        >h2{
            font-family: "Poppins";
            font-size: 3.2rem;
            font-weight: 500;
            margin-bottom: 3.2rem;
        }
        
        #payMethods{
            display: flex;
            width: 100%;
        }
        
        button{
            background: none;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.4rem;

            width: 100%;

            padding: 3.2rem 0 ;
            
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            font-size: 1.4rem;
            font-family: "Roboto";

            border: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
        }

        #display{
            display: flex;
            justify-content: center;

            width: 530px;
            border-right: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
            border-bottom: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
            border-left: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};

            border-bottom-right-radius: 8px;
            border-bottom-left-radius: 8px;

            padding: 4.8rem 9.1rem;

            >img{
                width: 27rem;
                margin: 0 3.8rem;
            }

            @media(max-width: 1039px){
                padding: 4rem 4rem;
                width: fit-content;
            }

            #creditDisplay{
                animation: credit_load-in 700ms;

                @keyframes credit_load-in{
                0%{
                    opacity: 0;
                    transform: translateX(100px);
                }

                100%{
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            }

            #PIXDisplay{
                animation: PIX_load-in 700ms;

                @keyframes PIX_load-in{
                0%{
                    opacity: 0;
                    transform: translateX(-100px);
                }

                100%{
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            }

            #cashDisplay{
                animation: cash_load-in 700ms;

                @keyframes cash_load-in{
                0%{
                    opacity: 0;
                }

                100%{
                        opacity: 1;
                    }
                }
            }
        }

        .ordered{
            border-top: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
            border-radius: 8px;
        }

        #PIX{
            border-right: 0;

            border-top-left-radius: 8px;
        }

        #Credit{
            border-top-right-radius: 8px;
        }

        #Cash{
            border-right: 0;

            >img{
                width: 25px;
            }
        }

        .Selected{
            background-color: #76797b1A;
        }

        .PaymentStepsImg{
            display: flex;
            opacity: 0.4;
            margin: 0 auto 4.5rem auto;
        }

        .PaymentStepsText{
            color: ${({theme}) => theme.COLORS.LIGHT_400};
            font-size: 2.4rem;
            font-weight: 700;
            text-align: center;
            opacity: 0.4;
        }
    }

    @media(min-width: 1200px){
        padding: 3.4rem clamp(15rem, 13.9vw, 19rem) 0 0;
    }
`

export const Dishes = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    

    margin: 2.7rem 0 1.6rem 0;
    padding: 1.6rem 0;



    animation: orders_load-in 500ms;

    @keyframes orders_load-in{
        0%{
            transform: translateX(15px);
            opacity: 0;
        }

        100%{
            transform: translateX(0);
            opacity: 1;
        }
    }

    @media(min-width: 800px){
        max-height: 50rem;
        padding-right: 1.5rem;
        overflow-y: auto;

        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: ${({theme}) => theme.COLORS.DARK_400};
        }

        ::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.COLORS.DARK_600};
            border-radius: 8px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #0A1B25;
        }
    }
`

export const ButtonArea = styled(Link)`
    display: flex;
    justify-content: end;

    >button{
        margin: 4.7rem 3.7rem 5.8rem 0;
        width: 21.6rem;
    }

    @media(min-width: 800px){
        display: none;
    }
`

export const PayForm = styled.form`
    .inputwrapper{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    #smallInputWrapper{
        display: flex;
        gap: 1.7rem;
        height: fit-content;

        margin: 3.7rem 0;

        input{
            width: 16.6rem;
        }
    }

    >Button{
        background-color: ${({theme}) => theme.COLORS.TOMATO_100};
        border: none;
        border-radius: 5px;
        padding: 1.6rem;
    }
`