import styled from "styled-components";

export const Container = styled.button`    
   width: 100%;
   
   padding: 1.2rem;

    border: none;
    border-radius: 5px;
    
    font-family: 'Poppins';
    font-size: 1.4rem;

    background-color: ${({theme, colorCode}) => theme.COLORS[colorCode]};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
`