import { Title, Description, ShopImage } from "./styles";

function Home() {
  return (
    <div>
      <Title> Bakery Heaven </Title>
      <Description> The place for carbs craving </Description>
      <ShopImage
        alt="shop"
        src="https://i.ndtvimg.com/i/2017-10/bakeries_620x350_41509023137.jpg"
      />
    </div>
  );
}
export default Home;

/*


import ProductList from "./components/ProductList";
import { GlobalStyle, Title, Description, ShopImage } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "grey",
  backgroundColor: "yellow",
};

function Home() { 
    return (
      <div>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <div>
            <Title> Bakery Heaven </Title>
            <Description> The place for carbs craving </Description>
            <ShopImage
            alt="shop" 
            src="https://i.ndtvimg.com/i/2017-10/bakeries_620x350_41509023137.jpg"
            />     
          </div>
      <ProductList />
      </ThemeProvider>
   </div>
    );
  }
  export default Home;

  */
