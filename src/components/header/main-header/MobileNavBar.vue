<template>
  <DisclosurePanel class="lg:hidden absolute bg-white w-full">
    <NavMenu />
  </DisclosurePanel>
</template>

<script setup>
import { DisclosurePanel } from "@headlessui/vue";
import NavMenu from "@/components/navigation/NavMenu.vue";
</script>
