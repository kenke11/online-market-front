<template>
  <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
    <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
      {{ productName }}
    </h1>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  productName: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
