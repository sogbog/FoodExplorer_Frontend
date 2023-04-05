import styled from "styled-components";

export const Container = styled.li`
    list-style: none;

    border: 2px solid ${({theme}) => theme.COLORS.DARK_1000}; 
    border-radius: 8px;
    padding: 1.6rem 2rem;
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.6rem;
    gap: 3rem;

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
        margin-right: 5px;
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

    p{
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        font-size: 1.4rem;
    }
`

export const Dishes = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    font-size: 1.4rem;
`