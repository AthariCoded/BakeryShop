//useState
import { useState } from "react";

// Libraries
import { observer } from "mobx-react";

//components
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";

//styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

// Stores
import bakeryStore from "./stores/bakeryStore";
import productStore from "./stores/productStore";

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
        {bakeryStore.loading || productStore.loading ? (
          <h1>Loading...</h1>
        ) : (
          <Routes />
        )}
      </ThemeProvider>
    </div>
  );
}
export default observer(App);
