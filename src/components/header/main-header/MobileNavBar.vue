<template>
  <DisclosurePanel class="lg:hidden absolute bg-white w-full z-50">
    <NavMenu />
  </DisclosurePanel>
</template>

<script setup>
import { DisclosurePanel } from "@headlessui/vue";
import NavMenu from "@/components/navigation/NavMenu.vue";
</script>
