import { Title, Description, ShopImage } from "./styles";

function Home() {
  return (
    <div>
      <Title> Bakery Heaven </Title>
      <Description> Experience the best of baking with us </Description>
      <ShopImage
        alt="shop"
        /* src="https://i.ndtvimg.com/i/2017-10/bakeries_620x350_41509023137.jpg" */
        src="https://cdn.trendhunterstatic.com/thumbs/style-bakery.jpeg"
      />
    </div>
  );
}
export default Home;
