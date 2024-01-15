import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("productStore", {
  id: "product",
  state: () => ({
    products: [],
    filters: [],
  }),
  actions: {
    async fetchProductsByCategory(category, qs) {
      this.products = [];
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_BACK_URL}api/products/category/${category}${qs}`
        );
        this.products = response.data.products;
      } catch (e) {
        this.products = [];
        console.error(e); // Use console.error for errors
      }
    },
    async fetchProductsFilterByCategory(category) {
      this.filters = [];
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_BACK_URL}api/products/filter/category/${category}`
        );
        this.filters = response.data.filters;
      } catch (e) {
        this.filters = [];
        console.error(e); // Use console.error for errors
      }
    },
    async fetchProductsBySubCategory(category, subCategory, qs) {
      this.products = [];
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_BACK_URL}api/products/category/${category}/sub-category/${subCategory}${qs}`
        );
        this.products = response.data.products;
      } catch (e) {
        this.products = [];
        console.error(e); // Use console.error for errors
      }
    },
    async fetchProductsFilterBySubCategory(category, subCategory) {
      this.filters = [];
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_BACK_URL}api/products/filter/category/${category}/sub-category/${subCategory}`
        );
        this.filters = response.data.filters;
      } catch (e) {
        this.filters = [];
        console.error(e); // Use console.error for errors
      }
    },
  },
  getters: {},
});
