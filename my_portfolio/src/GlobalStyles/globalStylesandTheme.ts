import {DefaultTheme, createGlobalStyle} from "styled-components";

export const myTheme: DefaultTheme = {
  colors: {
    logo: "cyan",
    bgColor: "#000816",
  },
};

export const GlobalStyle = createGlobalStyle`
*{
 margin:0;
 padding:0;
 box-sizing:border-box;
}

body{
 background-color:#000816;
 color:white;
 font-family:'Syne', sans-serif;
}
`;
