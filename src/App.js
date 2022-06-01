import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Organisme/Header";
import Content from "./components/Organisme/Content";
import Footer from "./components/Organisme/Footer";
import GlobalStyles from "./components/atoms/Global";

const theme = {
  colors: {
    header: "#4f4d53",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
