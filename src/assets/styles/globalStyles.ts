import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --detail-red: #A02C2C;
    --dark-blue: #212529;
    --default-black: #000000;
    --title-black: rgba(0, 0, 0, 0.68);
    --subtitle-black: rgba(0, 2, 48, 0.85);
    --info-black: #474646;
    --default-white: #FFFFFF;
    --primary-white: #F8F8F8;
    --second-white: #AAB2C8;
    --primary-gray: #DFDFDF;
    --second-gray: #9F9F9F;
    font-family: "Roboto";
}

body, ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
}

a {
    color: var(--default-white);
    text-decoration: none;
}
`;

export default GlobalStyle;
