<template>
  <div class="mx-auto w-full max-w-7xl grow lg:flex lg:px-2 py-4">
    <div
      class="p-2 w-full flex items-center justify-start space-x-2 text-xs lg:space-x-4"
    >
      <router-link
        :to="{ name: 'home' }"
        class="px-2 py-1 pr-3 rounded-full hover:bg-gray-100 flex items-center space-x-2 font-bold text-base"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        <span>Main</span>
      </router-link>
      <div class="font-bold text-base py-1 pr-3">
        <span>{{ routes.directory[$i18n.locale] }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
import { useCategoryStore } from "@/store/Category";

const route = useRoute();
const categoryStore = useCategoryStore();
const routes = ref({
  directory: {},
});

const setDirectory = (categories) => {
  const category = categories.filter((category) => {
    return category.slug === route.params.categorySlug;
  })[0];

  routes.value.directory = category.name;

  let subCategory = null;

  if (category?.sub_categories.length && route.params.subCategorySlug) {
    subCategory = category.sub_categories.filter((subCat) => {
      return subCat.slug === route.params.subCategorySlug;
    })[0];

    routes.value.directory = subCategory.name;
  }
};

onMounted(() => {
  if (categoryStore.categories.length) {
    setDirectory(categoryStore.categories);
  }
});

watch(
  () => categoryStore.categories,
  (newValue) => {
    setDirectory(newValue);
  }
);
</script>
