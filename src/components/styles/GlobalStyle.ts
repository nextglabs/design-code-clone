import { createGlobalStyle } from "styled-components";
import { themes } from "./Color";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${themes.light.backgroundColor};

        @media (prefers-color-scheme: dark) {
            background-color: ${themes.dark.backgroundColor};
        }
    }
`;
