import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { useParams, Redirect } from "react-router-dom";

const ProductDetail = (props) => {
  const productSlug = useParams().productSlug;
  const product = props.products.find(
    (product) => product.slug === productSlug
  );

  if (!product) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton
        productDelete={props.productDelete}
        productId={product.id}
      />
      <button>Back</button>
    </DetailWrapper>
  );
};

export default ProductDetail;
