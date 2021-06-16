import products from "../products";
import ProductItem from "./ProductItem";
import { ListWrapper } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const filterProducts = props.products.filter((product) =>
    product.name.toLowerCase().includes(query.toLocaleLowerCase())
  );

  const productList = filterProducts.map((product) => (
    <ProductItem
      product={product}
      key={product.id}
      setProduct={props.setProduct}
      productDelete={props.productDelete}
    />
  ));
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>;
    </div>
  );
};

export default ProductList;
