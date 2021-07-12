import { Route, Switch } from "react-router";
import productStore from "../stores/productStore";

import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Home from "./Home";

import BakeryList from "./BakeryList";
import BakeryDetail from "./BakeryDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/products/:productSlug">
        <ProductDetail />
      </Route>
      <Route path="/products">
        <ProductList products={productStore.products} />
      </Route>
      <Route path="/bakeries/:bakerySlug">
        <BakeryDetail />
      </Route>
      <Route path="/bakeries">
        <BakeryList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
