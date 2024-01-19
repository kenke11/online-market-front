<template>
  <div class="bg-white">
    <div class="pt-6">
      <ProductNavHeader :category="category" :productName="product?.name" />

      <!-- Product info -->
      <div
        class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-5 lg:pt-16"
      >
        <div
          class="lg:hidden pb-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6"
        >
          <ProductImages :images="product?.product_pictures" />
        </div>

        <ProductName :productName="product?.name[$i18n.locale]" />

        <ProductInformation :product="product" />

        <div
          class="hidden lg:block pt-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6"
        >
          <ProductImages :images="product?.product_pictures" />
        </div>
      </div>
      <div
        class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-5"
      >
        <SpecificationList
          :specificationGroups="product?.product_specifications"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useProductStore } from "@/store/Product";
import { useRoute } from "vue-router";

import ProductNavHeader from "@/components/product/ProductNavHeader.vue";
import ProductName from "@/components/product/ProductName.vue";
import ProductInformation from "@/components/product/ProductInformation.vue";
import ProductImages from "@/components/product/ProductImages.vue";
import SpecificationList from "@/components/product/specification/SpecificationList.vue";

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
