<template>
  <div v-if="details && JSON.parse(details[$i18n.locale]).length">
    <h3 class="text-sm font-medium text-gray-900">Details</h3>
    <div class="w-full mt-4 flex flex-col space-y-4">
      <div
        v-for="(detail, index) in JSON.parse(details[$i18n.locale])"
        :key="index"
        class="flex justify-between items-start text-xs md:text-sm"
      >
        <div class="w-1/2 text-gray-500">{{ detail.title }}:</div>
        <div class="w-1/2 font-semibold">
          {{ detail.desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  details: {
    type: Array,
    require: false,
    default: null,
  },
});
</script>
