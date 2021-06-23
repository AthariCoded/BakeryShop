//import products from "../products";
import ProductItem from "./ProductItem";
import { ListWrapper } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { observer } from "mobx-react";
import productStore from "../stores/productStore";

const ProductList = () => {
  const [query, setQuery] = useState("");

  const filterProducts = productStore.products.filter((product) =>
    product.name.toLowerCase().includes(query.toLocaleLowerCase())
  );

  const productList = filterProducts.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>;
    </div>
  );
};

export default observer(ProductList);
