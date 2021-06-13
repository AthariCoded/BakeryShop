import products from "../products";
import ProductItem from "./ProductItem";
import { ListWrapper } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";

const ProductList = () => {
  const [query, setQuery] = useState();

  const filterProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  const productList = filterProducts.map((product) => (
    <ProductItem
      name={product.name}
      price={product.price}
      image={product.image}
      key={product.id}
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
