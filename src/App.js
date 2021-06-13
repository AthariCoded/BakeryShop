import Home from "./Home";
import ProductList from "./components/ProductList";
import { GlobalStyle, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

const theme = {
  light: {
    mainColor: "grey",
    backgroundColor: "MistyRose",
  },
  dark: {
    mainColor: "MistyRose",
    backgroundColor: "grey",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <ThemeButton onClick={toggleTheme}>
          {currentTheme === "light" ? "Dark" : "Light"} mode
        </ThemeButton>
        <Home />
        <ProductList />
      </ThemeProvider>
    </div>
  );
}
export default App;
