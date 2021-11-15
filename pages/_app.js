import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Menu/Menu";

const theme = {
  fonts: "Roboto, sans-serif",
  background: {
    primary: "#f5f5f5",
  },
};

const GlobalStyle = createGlobalStyle`
html,body{
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
    font-family: ${theme.fonts};
    background-color: ${theme.background.primary};
   
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Menu />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
