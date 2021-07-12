import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProductStore {
  products = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProducts = async () => {
    try {
      const response = await instance.get("/products");
      this.products = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchproducts: ", error);
    }
  };

  productDelete = async (productId) => {
    try {
      await instance.delete(`/products/${productId}`);
      const updatedProducts = this.products.filter(
        (product) => product.id !== productId
      );
      this.products = updatedProducts;
    } catch (error) {
      console.error(error);
    }
  };

  //-----------------------------------------\\
  productCreate = async (newProduct, bakery) => {
    try {
      const formData = new FormData();
      for (const key in newProduct) formData.append(key, newProduct[key]);

      const response = await instance.post(
        `/bakeries/${bakery.id}/products`,
        formData
      );
      this.products.push(response.data);
      bakery.products.push({ id: response.data.id });
    } catch (error) {
      console.error(error);
    }
  };
  //-----------------------------------------\\
  productUpdate = async (updateProduct) => {
    try {
      const formData = new FormData();
      for (const key in updateProduct) formData.append(key, updateProduct[key]);

      const respose = await instance.put(
        `/products/${updateProduct.id}`,
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

  getProductById = (productId) =>
    this.products.find((product) => product.id === productId);
}

const productStore = new ProductStore();
productStore.fetchProducts();
export default productStore;
