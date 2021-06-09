import Home from "./Home";
import ProductList from "./components/ProductList";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "grey",
  backgroundColor: "yellow",
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
        <ProductList />
      </ThemeProvider>
    </div>
  );
}
export default App;

/*
import './App.css';

import Home from "./Home";

function App() { 
  return (
    <div>
       <Home/>
    </div>
  );
}
export default App;

*/
