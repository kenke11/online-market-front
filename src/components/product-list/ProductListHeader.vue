<template>
  <div class="mx-auto w-full max-w-7xl grow py-6">
    <nav>
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
        <li class="text-sm">
          <span class="font-medium text-gray-500 hover:text-gray-600">{{
            routes.directory[$i18n.locale]
          }}</span>
        </li>
      </ol>
    </nav>
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
