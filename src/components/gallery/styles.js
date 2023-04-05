import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 1.6rem;
    padding-right: 1.6rem;
    overflow-x: scroll;

    >button{
        display: none;
    }

    @media (min-width: 800px){
        margin-right: clamp(2rem, 7vw ,10rem);
        scroll-behavior: smooth;

        ::-webkit-scrollbar {
            -webkit-appearance: none;
        }

        >button{
            position: absolute;
            z-index: 1;

            background: none;
            border: none;

            height: 41.9rem;
            padding: 0 2rem;
        }
        
        >.right{
            right: clamp(2rem, 7vw - 1px,9.8rem);
            background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
        }

        >.left{
            img{
                transform: rotate(180deg);
            }

            left: clamp(4rem,8vw + 2px,13rem);
            background: linear-gradient(90deg, #000A0F 0%, rgba(0, 10, 15, 0.272541) 100%);

            @media (min-width: 800px){
                left: clamp(2rem,7vw - 1px,10rem);
            }

            @media (min-width: 1100px){
                left: clamp(4rem,8vw - 1px,12.1rem);
            }
        }
    }
`