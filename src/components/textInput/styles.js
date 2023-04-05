import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    gap: 8px;

    >label{
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    >input{
        color: ${({theme}) => theme.COLORS.LIGHT_500};
        background-color: ${({theme, isLogin}) => isLogin ? theme.COLORS.DARK_900 : "transparent"};

        border: ${({theme, isLogin}) => isLogin ? "none" : ("1px solid " + theme.COLORS.LIGHT_100)};
        border-radius: 8px;

        padding: 1.4rem 1.6rem;

        font-size: 1.6rem;
    }
`