<template>
  <DisclosurePanel class="lg:hidden">
    <div class="space-y-1 pb-3 pt-2">
      <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" -->
      <DisclosureButton
        as="a"
        href="#"
        class="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
        >Dashboard</DisclosureButton
      >
    </div>
    <div class="border-t border-gray-200 pb-3 pt-4">
      <div class="mt-3 space-y-1">
        <DisclosureButton
          as="a"
          href="#"
          class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          >Your Profile</DisclosureButton
        >
      </div>
    </div>
  </DisclosurePanel>
</template>
<script setup>
import { DisclosureButton, DisclosurePanel } from "@headlessui/vue";
</script>
