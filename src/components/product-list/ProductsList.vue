<template>
  <div class="flex min-h-full flex-col">
    <ProductListHeader />
    <div class="mx-auto w-full max-w-7xl grow lg:flex lg:px-2">
      <div class="flex-1 lg:flex space-y-6 lg:space-y-0 lg:space-x-4 pb-6">
        <ProductFilter />
        <ProductsContainer />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductFilter from "@/components/product-list/ProductFilter.vue";
import { useProductStore } from "@/store/Product";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import ProductListHeader from "@/components/product-list/ProductListHeader.vue";
import ProductsContainer from "@/components/product-list/ProductsContainer.vue";

const productStore = useProductStore();
const slugs = ref("");
const route = useRoute();
const fetchProducts = (slugs) => {
  if (slugs.categorySlug && slugs.subCategorySlug) {
    productStore.fetchProductsBySubCategory(
      slugs.categorySlug,
      slugs.subCategorySlug
    );
    productStore.fetchProductsFilterBySubCategory(
      slugs.categorySlug,
      slugs.subCategorySlug
    );
  } else {
    productStore.fetchProductsByCategory(slugs.categorySlug);
    productStore.fetchProductsFilterByCategory(slugs.categorySlug);
  }
};

onMounted(() => {
  slugs.value = route.params;
  fetchProducts(slugs.value);
});
</script>
