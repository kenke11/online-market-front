<template>
  <div class="flex min-h-full flex-col py-12">
    <div class="mx-auto w-full max-w-7xl grow lg:flex md:px-2">
      <div class="flex-1 lg:flex lg:space-x-4 pb-6">
        <SideNavigation />
        <MainSlider />
      </div>
    </div>
    <MainContent />
  </div>
</template>

<script setup>
import SideNavigation from "@/components/home/SideNavigation.vue";
import MainSlider from "@/components/home/MainSlider.vue";
import MainContent from "@/components/home/MainContent.vue";
</script>
