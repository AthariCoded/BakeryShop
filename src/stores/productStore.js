import products from "../products";
import { makeAutoObservable } from "mobx";

class ProductStore {
  products = products;

  constructor() {
    makeAutoObservable(this);
  }

  productDelete = (productId) => {
    const updatedProducts = this.products.filter(
      (product) => product.id !== productId
    );
    this.products = updatedProducts;
  };
}

const productStore = new ProductStore();
export default productStore;
