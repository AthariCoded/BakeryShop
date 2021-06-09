import products from "../products";
import ProductItem from "./ProductItem";
import { ListWrapper } from "../styles";

const ProductList = () => {
  const productList = products.map((product) => (
    <ProductItem
      name={product.name}
      price={product.price}
      image={product.image}
      key={product.id}
    />
  ));
  return <ListWrapper>{productList}</ListWrapper>;
};

export default ProductList;
