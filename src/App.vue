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

const localeStore = useLocaleStore();

onMounted(() => {
  localeStore.fetchLocales();
});
</script>
