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
