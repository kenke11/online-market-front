import { createRouter, createWebHistory } from "vue-router";
import ProductListByCategoryView from "@/views/ProductListByCategoryView.vue";
import HomeView from "@/views/HomeView.vue";
import ProductListBySubCategoryView from "@/views/ProductListBySubCategoryView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:categorySlug",
    name: "category",
    component: ProductListByCategoryView,
    props: true,
  },
  {
    path: "/:categorySlug/:subCategorySlug",
    name: "sub_category",
    component: ProductListBySubCategoryView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
