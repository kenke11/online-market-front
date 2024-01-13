<template>
  <div
    class="hidden h-fit border lg:block rounded-xl border-gray-200 px-4 py-6 md:w-64 lg:shrink-0"
  >
    <nav>
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <li v-for="(filter, index) in filters" :key="index">
          <Disclosure as="div" v-slot="{ open }">
            <DisclosureButton
              class="flex hover:bg-gray-50 items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700"
            >
              <ChevronRightIcon
                :class="[
                  open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                  'h-5 w-5 shrink-0',
                ]"
                aria-hidden="true"
              />
              {{ filter.name[$i18n.locale] }}
            </DisclosureButton>
            <DisclosurePanel as="ul" class="mt-1 px-2 text-sm">
              <li
                v-for="(specification, indexSpec) in filter?.specifications"
                :key="indexSpec"
                class="my-2"
              >
                <label
                  :for="`${indexSpec}_${index}_specification`"
                  class="flex items-center justify-start hover:bg-gray-50 rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    :id="`${indexSpec}_${index}_specification`"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    @click="
                      filtersChecked(
                        specification.specification_description[$i18n.locale] ||
                          specification.color_value
                      )
                    "
                  />
                  <div v-if="!specification.is_color">
                    {{ specification.specification_description[$i18n.locale] }}
                  </div>
                  <div
                    v-else
                    class="w-6 h-6 rounded-full border border-black"
                    :style="`background-color: ${specification.color_value}`"
                  ></div>
                </label>
              </li>
            </DisclosurePanel>
          </Disclosure>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { useProductStore } from "@/store/Product";
import { ref, watch } from "vue";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";

const productStore = useProductStore();

const filters = ref(productStore.filters);

const filtersChecked = (value) => {
  console.log(value);
};

watch(
  () => productStore.filters,
  (newValue) => {
    filters.value = newValue;
  }
);
</script>
