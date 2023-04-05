import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }

    body{
        background-color: ${({theme}) => theme.COLORS.DARK_400};
        color: ${({theme}) => theme.COLORS.LIGHT_300};

        -webkit-font-smoothing: antialiased;
        font-family: "Roboto", serif;

        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: ${({theme}) => theme.COLORS.DARK_400};
        }

        ::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.COLORS.DARK_600};
            border-radius: 8px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #0A1B25;
        }
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.9)
    }
`