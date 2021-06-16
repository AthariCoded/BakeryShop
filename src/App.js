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
    red: "red",
  },
  dark: {
    mainColor: "MistyRose",
    backgroundColor: "grey",
    red: "red",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [product, setProduct] = useState(null);
  const [_products, setProducts] = useState(products);

  const productDelete = (productId) => {
    const updatedProducts = _products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  const setView = () => {
    return product ? (
      <ProductDetail
        product={product}
        setProduct={setProduct}
        productDelete={productDelete}
      />
    ) : (
      <ProductList
        setProduct={setProduct}
        products={_products}
        productDelete={productDelete}
      />
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
