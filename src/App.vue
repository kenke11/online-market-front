<template>
  <MainHeader />
  <router-view />
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
<script setup>
import MainHeader from "@/components/header/MainHeader.vue";
import { onMounted } from "vue";
import { useLocaleStore } from "@/store/Locale";
import { useCategoryStore } from "@/store/Category";

const localeStore = useLocaleStore();
const categoryStore = useCategoryStore();

onMounted(() => {
  localeStore.fetchLocales();
  categoryStore.fetchCategories();
});
</script>
