import { defineStore } from "pinia";
import axios from "axios";

export const useCategoryStore = defineStore("categoryStore", {
  id: "category",
  state: () => ({
    categories: [],
  }),
  actions: {
    async fetchCategories() {
      try {
        const response = await axios.get(
          `${process.env.VUE_APP_BACK_URL}api/categories`
        );

        this.categories = response.data.categories;
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {},
});
