import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.DARK_1000};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    padding: 4px 8px;
    border-radius: 5px;

    font-size: 1.4rem;
    line-height: 2.4rem;
    font-family: "Poppins";

    width: fit-content;
`