import { createGlobalStyle, ThemeProvider } from "styled-components";
const theme = {
  background: {
    primary: "#f5f5f5",
  },
};

const GlobalStyle = createGlobalStyle`
  body{
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    background-color: ${theme.background.primary};
   
  }
`;



function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
