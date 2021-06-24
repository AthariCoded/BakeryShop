import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import productStore from "../stores/productStore";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const productSlug = useParams().productSlug;
  const product = productStore.products.find(
    (product) => product.slug === productSlug
  );

  if (!product) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton productId={product.id} />
      <Link to="/products">
        <button>Back</button>
      </Link>
    </DetailWrapper>
  );
};

export default observer(ProductDetail);
