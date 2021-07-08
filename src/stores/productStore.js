import { makeAutoObservable } from "mobx";
import axios from "axios";

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
      const formData = new FormData();
      for (const key in newProduct) formData.append(key, newProduct[key]);

      const response = await axios.post(
        "http://localhost:8000/products",
        formData
      );
      this.products.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  //-----------------------------------------\\
  productUpdate = async (updateProduct) => {
    try {
      const formData = new FormData();
      for (const key in updateProduct) formData.append(key, updateProduct[key]);

      const respose = await axios.put(
        `http://localhost:8000/products/${updateProduct.id}`,
        formData
      );

      const product = this.products.find(
        (product) => product.id === respose.data.id
      );
      for (const key in product) product[key] = respose.data[key];
    } catch (error) {
      console.error(error);
    }
  };
}

const productStore = new ProductStore();
productStore.fetchProducts();
export default productStore;
