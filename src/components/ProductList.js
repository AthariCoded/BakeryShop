import ProductItem from "./ProductItem";
import { ListWrapper, AiFillPlusCircleStyled } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { observer } from "mobx-react";
import ProductModal from "./modals/ProductModal";

const ProductList = ({ products, bakery }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const productList = products
    .filter((product) =>
      product?.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <AiFillPlusCircleStyled size="2em" onClick={openModal} />
      <ProductModal isOpen={isOpen} closeModal={closeModal} bakery={bakery} />
      <ListWrapper>{productList}</ListWrapper>;
    </div>
  );
};

export default observer(ProductList);
