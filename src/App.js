import Home from "./Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { GlobalStyle, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import products from "./products";

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
  const [product, setProduct] = useState(null);

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  const setView = () => {
    return product ? (
      <ProductDetail product={product} />
    ) : (
      <ProductList setProduct={setProduct} />
    );
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <ThemeButton onClick={toggleTheme}>
          {currentTheme === "light" ? "Dark" : "Light"} mode
        </ThemeButton>
        <Home />
        {setView()}
      </ThemeProvider>
    </div>
  );
}
export default App;
