import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductItem = (props) => {
  return (
    <ProductWrapper>
      <img
        alt={props.product.name}
        src={props.product.image}
        onClick={() => props.setProduct(props.product)}
      />
      <p> {props.product.name}</p>
      <p className="product-price"> {props.product.price} KD</p>
      <DeleteButton
        productDelete={props.productDelete}
        productId={props.product.id}
        setProduct={props.setProduct}
      />
    </ProductWrapper>
  );
};

export default ProductItem;
