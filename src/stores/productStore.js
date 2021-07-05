import { makeAutoObservable } from "mobx";
import axios from "axios";
import slugify from "react-slugify";

class ProductStore {
  products = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      this.products = response.data;
    } catch (error) {
      console.error("fetchproducts: ", error);
    }
  };

  productDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      const updatedProducts = this.products.filter(
        (product) => product.id !== productId
      );
      this.products = updatedProducts;
    } catch (error) {
      console.error(error);
    }
  };
  /*
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
*/
  //-----------------------------------------\\
  productCreate = async (newProduct) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/products",
        newProduct
      );
      this.products.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  //-----------------------------------------\\
  productUpdate = async (updateProduct) => {
    try {
      await axios.put(
        `http://localhost:8000/products/${updateProduct.id}`,
        updateProduct
      );
      const product = this.products.find(
        (product) => product.id === updateProduct.id
      );

      for (const key in updateProduct) product[key] = updateProduct[key];
      /*
      product.name = updateProduct.name;
      product.price = updateProduct.price;
      product.description = updateProduct.description;
      product.image = updateProduct.image;
      product.slug = slugify(updateProduct.name); */
    } catch (error) {
      console.error(error);
    }
  };
}

const productStore = new ProductStore();
productStore.fetchProducts();
export default productStore;
