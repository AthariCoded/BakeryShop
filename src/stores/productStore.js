import products from "../products";
import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";

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

  productCreate = (newProduct) => {
    newProduct.id = this.products.length + 1;
    newProduct.slug = slugify(newProduct.name);
    this.products.push(newProduct);
  };
}

const productStore = new ProductStore();
export default productStore;
