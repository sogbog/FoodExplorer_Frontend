import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

    >nav{
        margin: 1.1rem 0 0 3.2rem;

        a{
            display: flex;
            align-items: center;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-size: 1.6rem;
            font-family: "Poppins";
            max-width: fit-content;
            
            img{
                height: 2.2rem;
            }
        }

        @media(min-width: 800px){
            margin: 4rem 0 2.4rem 12.3rem;

            a{
                font-size: 2.4rem;
                font-weight: 700;

            img{
                height: 3.2rem;
            }
        }
        }
    }

    >h2{
        font-size: 3.2rem;
        font-family: "Poppins";
        font-weight: 500;

        margin: 3.5rem 0 3.5rem 3.2rem;

        @media(min-width: 800px){
            margin: 3.4rem 0 3.2rem 12.3rem;
        }
    }
    
    >footer{
        margin-top: auto;
    }
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    >label{
        font-size: 1.6rem;

        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    input, select, >textarea{
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        background-color: ${({theme}) => theme.COLORS.DARK_800};

        line-height: 2.4rem;
        
        border: none;
        border-radius: 8px;
    }

    >input{
        padding: 1.2rem 1.4rem;

        font-family: "Roboto";
        font-size: 1.6rem;
    }

    select{
        width: 100%;
        
        background-color: ${({theme}) => theme.COLORS.DARK_900};
        font-family: "Roboto";
        font-size: 1.4rem;

        padding: 1.2rem;

        appearance: none;

        @media(min-width: 800px){
            background-color: ${({theme}) => theme.COLORS.DARK_800};
        }
    }

    #selectWrapper{
        position: relative;
    }
    
    #selectArrow{
        position: absolute;
        z-index: 1;

        right: 2rem;
        top: 1.5rem;
        pointer-events: none;
        
        img{
            height: 1.6rem;

            transform: rotate(90deg);
        }
    }

    >textarea{
        padding: 1.4rem;

        font-family: "Roboto";
        font-size: 1.6rem;

        resize: none;
    }

    @media(min-width: 800px){
        width: 100%;
    }
`

export const InfoArea = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    
    padding: 0 3.2rem 5.3rem 3.2rem;

    #uploadView{
        display: flex;
        align-items: center;
        gap: 8px;

        font-family: "Poppins";
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        
        padding: 1.2rem 3.2rem;

        background-color: ${({theme}) => theme.COLORS.DARK_800};
        border-radius: 8px;

        cursor: pointer;

        >img{
            height: 2.4rem;
        }

        >span{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
        }
    }

    #imgUpload{
        padding: 1.2rem 0;

        position: absolute;
        left: 3.2rem;
        right: 3.2rem;
        z-index: -1;
    }

    >#buttonWrapper{
        display: flex;
        gap: 3.2rem;
        width: 100%;
        
        >button{
            padding: 1.2rem 3rem;
        }
    }

    @media(min-width: 800px){
        padding: 0 8rem 11.6rem 8rem;
        gap: 3.2rem;

        >#buttonWrapper{
            justify-content: flex-end;
            
            >button{
                max-width: fit-content;
            }
        }

        #imgUpload{
            left: 8rem;
            right: unset;
            width: 24rem;
        }
    }

    @media(min-width: 900px){
        padding: 0 12.4rem 11.6rem 12.4rem;

        #imgUpload{
            left: 12.4rem;
        }
    }

    animation: form_load-in 500ms;
    
    @keyframes form_load-in{
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

export const Ingredients = styled.div`
    display: flex;
    gap: 1.6rem;
    flex-wrap: wrap;

    background-color: ${({theme}) => theme.COLORS.DARK_800};
    border-radius: 8px;
    padding: 8px;
`

export const IngredientTag = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 8px 1.6rem;

    width: fit-content;
    
    border-radius: 8px;

    font-size: 1.6rem;

    background-color: ${({theme}) => theme.COLORS.LIGHT_600};

    height: 3.2rem;

    >button{
        background: none;
        border: none;

        img{
            width: 8px;
        }
    }
`

export const NewIngredient = styled.div`
    display: flex;
    gap: 8px;

    padding: 6px 1.6rem;
    
    border: 2px dashed ${({theme}) => theme.COLORS.LIGHT_500};
    border-radius: 8px;

    height: 3.2rem;

    >input{
        width: 6.83rem;

        font-family: "Roboto";
        font-size: 1.6rem;
        line-height: 1.6rem;

        border-radius: 0;

        color: ${({theme}) => theme.COLORS.LIGHT_500};

        outline: none;
    }
    
    >button{
        background: none;
        border: none;

        img{
            width: 10px;
        }
    }
`

export const DesktopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    @media(min-width: 800px){
        flex-direction: row;

        #uploadWrapper{
            max-width: 24rem;
        }
        
        #nameWrapper{
            width: 100%;
        }

        #categoryWrapper{
            max-width: 36.5rem;
        }

        #priceWrapper{
            max-width: 25rem;
        }
    }
`