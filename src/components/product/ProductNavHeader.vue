<template>
  <nav aria-label="Breadcrumb">
    <ol
      role="list"
      class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <li>
        <div class="flex items-center">
          <router-link
            :to="{ name: 'home' }"
            class="mr-2 text-sm font-medium text-gray-900"
            >Main</router-link
          >
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="currentColor"
            aria-hidden="true"
            class="h-5 w-4 text-gray-300"
          >
            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
          </svg>
        </div>
      </li>
      <li class="text-sm flex items-center">
        <router-link
          :to="{ name: 'category', params: { categorySlug: category?.slug } }"
          class="mr-2 text-sm font-medium text-gray-900"
          >{{ category?.name[$i18n.locale] }}</router-link
        >
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="currentColor"
          aria-hidden="true"
          class="h-5 w-4 text-gray-300"
        >
          <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
        </svg>
      </li>
      <li class="text-sm">
        <span class="font-medium text-gray-500 hover:text-gray-600">{{
          productName[$i18n.locale]
        }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  category: {
    type: Object,
    required: false,
    default: null,
  },
  productName: {
    type: Text,
    required: false,
    default: "",
  },
});
</script>
