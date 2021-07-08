import Home from "./Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
//Libraries
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";
import BakeryList from "./components/BakeryList";

const theme = {
  light: {
    mainColor: "#586f6b",
    backgroundColor: "#cfc0bd",
    red: "red",
  },
  dark: {
    mainColor: "#cfc0bd",
    backgroundColor: "#586f6b",
    red: "red",
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
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

        <Switch>
          <Route path="/products/:productSlug">
            <ProductDetail />
          </Route>

          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/bakeries">
            <BakeryList />
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
