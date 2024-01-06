<template>
  <div class="flex items-center lg:hidden">
    <!-- Mobile menu button -->
    <DisclosureButton
      class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    >
      <span class="absolute -inset-0.5" />
      <span class="sr-only">Open main menu</span>
      <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
      <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
    </DisclosureButton>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { DisclosureButton } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

defineProps({
  open: {
    type: Boolean,
    required: true,
  },
});
</script>
