import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <ProductWrapper>
      <Link to={`/products/${props.product.slug}`}>
        <img alt={props.product.name} src={props.product.image} />
      </Link>
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
