import { ProductWrapper } from "../styles";

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
    </ProductWrapper>
  );
};

export default ProductItem;
