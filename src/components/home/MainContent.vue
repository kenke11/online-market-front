<template>
  <div class="mx-auto w-full max-w-7xl h-fit grow lg:flex">
    <div class="py-6 w-full flex flex-col px-2 space-y-10">
      <ProductSlider
        v-if="saleProducts?.length"
        headerName="Sales"
        :products="saleProducts"
      />
      <div v-for="category in productsCategories" :key="category.id">
        <ProductSlider
          v-if="category.products.length"
          :headerName="category.name[$i18n.locale]"
          :products="category.products"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductSlider from "@/components/home/main-content/ProductSlider.vue";
import { useProductStore } from "@/store/Product";
import { onMounted, ref, watch } from "vue";

const productStore = useProductStore();

const saleProducts = ref(productStore.saleProducts);
const productsCategories = ref(productStore.productsByCategories);

onMounted(() => {
  productStore.fetchProductsByCategoryForSlider();
  productStore.fetchProductsBySalesForSlider();
});

watch(
  () => productStore.saleProducts,
  (newValue) => {
    saleProducts.value = newValue;
  }
);

watch(
  () => productStore.productsByCategories,
  (newValue) => {
    productsCategories.value = newValue;
  }
);
</script>
