<template>
  <div class="flex min-h-full flex-col">
    <ProductListHeader />
    <div class="mx-auto w-full max-w-7xl grow lg:flex md:px-2">
      <div class="flex-1 lg:flex space-y-6 lg:space-y-0 lg:space-x-4 pb-6">
        <ProductFilter />
        <div
          class="bg-red-700 px-4 h-fit py-6 sm:px-6 lg:pl-8 md:flex-1 md:pl-6"
        ></div>
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

const productStore = useProductStore();
const slugs = ref("");
const route = useRoute();
const fetchProducts = (slugs) => {
  if (slugs.categorySlug && slugs.subCategorySlug) {
    console.log("method not definded");
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
