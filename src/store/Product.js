import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("productStore", {
  id: "product",
  state: () => ({
    products: [],
    filters: [],
  }),
  actions: {
    async fetchProductsByCategory(category) {
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_BACK_URL}api/products/${category}`
        );
        this.products = response.data.products;
      } catch (e) {
        this.products = [];
        console.error(e); // Use console.error for errors
      }
    },
    async fetchProductsFilterByCategory(category) {
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_BACK_URL}api/products/filter/${category}`
        );
        this.filters = response.data.filters;
        console.log(this.filters);
      } catch (e) {
        this.filters = [];
        console.error(e); // Use console.error for errors
      }
    },
  },
  getters: {},
});
