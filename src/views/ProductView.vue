<template>
  <pre>{{ product }}</pre>
  <pre>{{ category }}</pre>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useProductStore } from "@/store/Product";
import { useRoute } from "vue-router";

const productStore = useProductStore();
const product = ref(productStore.product?.product);
const category = ref(productStore.product?.category);
const slugs = ref("");
const route = useRoute();

onMounted(() => {
  slugs.value = route.params;
  productStore.fetchProductWithCategory(
    slugs.value.categorySlug,
    slugs.value.productSlug
  );
});

watch(
  () => productStore.product,
  (newValue) => {
    product.value = newValue.product;
    category.value = newValue.category;
  }
);
</script>
