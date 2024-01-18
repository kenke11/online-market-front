<template>
  <div class="mt-4 lg:row-span-3 lg:mt-0">
    <h2 class="sr-only">Product information</h2>
    <p class="text-3xl tracking-tight text-gray-900">${{ product?.price }}</p>

    <div class="mt-10">
      <ProductDetails :details="product?.details" />

      <div class="flex items-center space-x-4 mt-10">
        <button
          type="button"
          class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          ყიდვა
        </button>
        <button
          type="button"
          class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          დამატება
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import ProductDetails from "@/components/product/productInformation/ProductDetails.vue";

defineProps({
  product: {
    type: Object,
    required: false,
    default: null,
  },
});
</script>
