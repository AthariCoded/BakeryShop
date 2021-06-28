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

  productUpdate = (updateProduct) => {
    let product = this.products.find(
      (product) => product.id === updateProduct.id
    );

    product.name = updateProduct.name;
    product.price = updateProduct.price;
    product.description = updateProduct.description;
    product.image = updateProduct.image;
    // ^^^^^^^^^^^^^^

    product.slug = slugify(updateProduct.name);
  };
}

const productStore = new ProductStore();
export default productStore;
