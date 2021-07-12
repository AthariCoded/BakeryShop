import { useParams } from "react-router";
import bakeryStore from "../stores/bakeryStore";
import productStore from "../stores/productStore";
import { DetailWrapper } from "../styles";
import ProductList from "./ProductList";
import { observer } from "mobx-react";

const BakeryDetail = () => {
  const { bakerySlug } = useParams();
  const bakery = bakeryStore.bakeries.find(
    (bakery) => bakery.slug === bakerySlug
  );
  const products = bakery.products.map((product) =>
    productStore.getProductById(product.id)
  );
  return (
    <>
      <DetailWrapper>
        <h4>{bakery.name}</h4>
        <img src={bakery.image} alt={bakery.name} />
      </DetailWrapper>
      <ProductList products={products} bakery={bakery} />
    </>
  );
};

export default observer(BakeryDetail);
