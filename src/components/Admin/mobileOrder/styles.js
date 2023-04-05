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

export const Status = styled.div`
    display: flex;
    align-items: center;
   
    margin-top: 1.6rem;
    
    width: 100%;
    
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