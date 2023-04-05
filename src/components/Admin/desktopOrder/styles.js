import styled from "styled-components";

export const Container = styled.tr`
    td{
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.LIGHT_400};

        padding-left: 2.4rem;
    }
`

export const Status = styled.div`
    display: flex;
    align-items: center;
   
    margin-top: 1.6rem;
    
    min-width: 17.5rem;
    
    border: none;
    border-radius: 5px;

    padding: 1.6rem;
    
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    
    >div{
        width: 8px;
        height: 8px;

        border-radius: 50%;
        margin-right: 5px;

        background-color: ${({theme}) => theme.COLORS.TOMATO_300};
    }
    
    >select{
        width: 100%;
        
        border: none;
        
        background-color: ${({theme}) => theme.COLORS.DARK_900};

        color: ${({theme}) => theme.COLORS.LIGHT_400};
        font-size: 1.4rem;
    }
`