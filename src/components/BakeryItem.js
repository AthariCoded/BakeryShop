import { BakeryItemImage } from "../styles";
import { Link } from "react-router-dom";

const BakeryItem = ({ bakery }) => {
  return (
    <>
      <p>{bakery.name}</p>
      <Link to={`/bakeries/${bakery.slug}`}>
        <BakeryItemImage src={bakery.image} alt={bakery.name} />
      </Link>
    </>
  );
};

export default BakeryItem;
