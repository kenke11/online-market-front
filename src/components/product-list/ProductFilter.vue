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
                        filter.name['en'],
                        specification.specification_description['en'] ||
                          specification.color_value,
                        $event.target.checked
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
import { ref, watch, defineEmits } from "vue";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
import { useRoute } from "vue-router";

const emit = defineEmits(["fetchProducts"]);

const route = useRoute();

const productStore = useProductStore();

const filters = ref(productStore.filters);
const qp = ref("");

const filtersChecked = (key, value, target) => {
  const queryParams = new URLSearchParams(qp.value);

  if (target) {
    addValueToQueryParam(queryParams, key, value);
  } else {
    removeValueFromQueryParam(queryParams, key, value);
  }

  updateQueryParam(qp, queryParams);
};

const addValueToQueryParam = (queryParams, key, value) => {
  const currentValues = queryParams.getAll(key);
  currentValues.push(value);
  queryParams.set(key, currentValues);
};

const removeValueFromQueryParam = (queryParams, key, value) => {
  const currentValues = queryParams.getAll(key);

  if (currentValues.length === 0) {
    return;
  }

  const updatedValues = currentValues
    .flatMap((val) => val.split(","))
    .filter((v) => v !== value);

  if (updatedValues.length > 0) {
    queryParams.set(key, updatedValues.join(","));
  } else {
    queryParams.delete(key);
  }
};

const updateQueryParam = (qp, queryParams) => {
  qp.value = "?" + queryParams.toString();
  fetchProducts(qp.value);
};

const fetchProducts = (qp) => {
  emit("fetchProducts", route.params, qp);
};

watch(
  () => productStore.filters,
  (newValue) => {
    filters.value = newValue;
  }
);
</script>
