import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductDetail = (props) => {
  return (
    <DetailWrapper>
      <h1>{props.product.name}</h1>
      <img src={props.product.image} alt={props.product.name} />
      <p>{props.product.description}</p>
      <p>{props.product.price}</p>
      <DeleteButton
        productDelete={props.productDelete}
        productId={props.product.id}
        setProduct={props.setProduct}
      />
      <button onClick={() => props.setProduct(null)}>Back</button>
    </DetailWrapper>
  );
};

export default ProductDetail;
