import styled from "styled-components";

export const Container = styled.tr`
    td{
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.LIGHT_400};

        padding-left: 2.4rem;
    }

    .status{
    display: flex;
    align-items: center;
    }

    .status::before{
        display: flex;
        content: '';
        width: 8px;
        height: 8px;

        border-radius: 50%;
        margin-right: 8px;
    }

    .Pendente::before{
        background-color: ${({theme}) => theme.COLORS.TOMATO_300};
    }
    .Preparando::before{
        background-color: ${({theme}) => theme.COLORS.CARROT};
    }
    .Entregue::before{
        background-color: ${({theme}) => theme.COLORS.MINT};
    }
`