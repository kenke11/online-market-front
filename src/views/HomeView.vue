<template>
  <div class="flex min-h-full flex-col py-12">
    <div class="mx-auto w-full max-w-7xl grow lg:flex md:px-2">
      <div class="flex-1 lg:flex lg:space-x-4 pb-6">
        <SideNavigation />
        <div
          class="bg-red-700 px-4 py-6 sm:px-6 lg:pl-8 md:flex-1 md:pl-6"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideNavigation from "@/components/home/SideNavigation.vue";
</script>
