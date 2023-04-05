import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    >footer{
        margin-top: auto;
    }
`

export const PayArea = styled.div`

    display: flex;
    flex-direction: column;

    padding: 5.6rem 3.5rem;
    
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

        @media(max-width: 400px){
            flex-direction: column;
            gap: 5px;
        }
    }

    #display{
        display: flex;
        justify-content: center;

        width: 100%;
        border-right: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
        border-bottom: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
        border-left: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};

        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;

        padding: 4.8rem 2.6rem;

        >img{
            width: 18rem;
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
`

export const PayForm = styled.form`
    input{
        background: none;
        border: 1px solid ${({theme}) => theme.COLORS.LIGHT_100};
        border-radius: 5px;

        padding: 1.6rem 1.4rem;

        color: ${({theme}) => theme.COLORS.LIGHT_500};
    }

    label{
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

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
            width: 14.4rem;
        }

        @media(max-width: 400px){
            flex-direction: column;
            margin-top: 1.7rem;

            input{
                width: 100%;
            }
        }
    }

    >Button{
        background-color: ${({theme}) => theme.COLORS.TOMATO_100};
        border: none;
        border-radius: 5px;
        padding: 1.6rem;
    }
`