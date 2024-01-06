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
</script>
