import { Title, Description, ShopImage } from "../styles";

function Home() {
  return (
    <div>
      <Title> Bakery Heaven </Title>
      <Description> Experience the best of baking with us </Description>
      <ShopImage
        alt="shop"
        //src="https://cdn.trendhunterstatic.com/thumbs/style-bakery.jpeg"
        src="https://cdn.shopify.com/s/files/1/2246/7407/articles/ook180img3_1351x.jpg?v=1558965735"
      />
    </div>
  );
}
export default Home;
