import ProductItem from "./ProductItem";
import { ListWrapper, AiFillPlusCircleStyled } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { observer } from "mobx-react";
import productStore from "../stores/productStore";
import ProductModal from "./modals/ProductModal";

const ProductList = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const filterProducts = productStore.products.filter((product) =>
    product.name.toLowerCase().includes(query.toLocaleLowerCase())
  );

  const productList = filterProducts.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <AiFillPlusCircleStyled size="2em" onClick={openModal} />
      <ProductModal isOpen={isOpen} closeModal={closeModal} />
      <ListWrapper>{productList}</ListWrapper>;
    </div>
  );
};

export default observer(ProductList);
