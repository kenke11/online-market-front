import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("productStore", {
  id: "product",
  state: () => ({
    product: [],
    saleProducts: [],
    productsByCategories: [],
    products: [],
    filters: [],
  }),
  actions: {
    async fetchProductsBySalesForSlider() {
      this.saleProducts = [];
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_BACK_URL}api/products/sales`
        );
        this.saleProducts = response.data.products;
      } catch (e) {
        this.saleProducts = [];
        console.error(e); // Use console.error for errors
      }
    },
    async fetchProductsByCategoryForSlider() {
      this.productsByCategories = [];
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_BACK_URL}api/products/categories`
        );
        this.productsByCategories = response.data.categories;
      } catch (e) {
        this.productsByCategories = [];
        console.error(e); // Use console.error for errors
      }
    },
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
    async fetchProductWithCategory(categorySlug, productSlug) {
      this.product = [];
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_BACK_URL}api/products/category/${categorySlug}/product/${productSlug}`
        );
        this.product = response.data;
      } catch (e) {
        this.product = [];
        console.error(e); // Use console.error for errors
      }
    },
  },
  getters: {},
});
