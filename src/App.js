import Home from "./Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import products from "./products";
//Libraries
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";

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

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

        <Switch>
          <Route path="/products/:productSlug">
            <ProductDetail
              products={_products}
              // setProduct={setProduct}
              productDelete={productDelete}
            />
          </Route>

          <Route path="/products">
            <ProductList products={_products} productDelete={productDelete} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}
export default App;
