import { DefaultTheme, createGlobalStyle } from "styled-components";

export const myTheme: DefaultTheme = {
  colors: {
    logo: "cyan",
    bgColor: "#000816",
    main: "#03132c",
    header: "white",
    body: "#9f9f9f",
  },
};

export const GlobalStyle = createGlobalStyle`
*{
 margin:0;
 padding:0;
 box-sizing:border-box;
}

body{
 background-color:#010814;
 color:white;
 font-family:'Syne', sans-serif;
 overflow:hidden;
}
`;
