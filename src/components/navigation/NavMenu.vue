<template>
  <nav class="flex flex-1 flex-col">
    <ul role="list" class="flex flex-1 flex-col gap-y-7">
      <li>
        <ul role="list" class="-mx-2 space-y-1">
          <li v-for="category in categories" :key="category.id">
            <router-link
              v-if="!category?.sub_categories?.length"
              to="name1"
              :class="[
                'block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-gray-700 hover:bg-gray-50',
              ]"
              >{{ category.name[$i18n.locale] }}</router-link
            >

            <Disclosure as="div" v-else v-slot="{ open }">
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
                {{ category.name[$i18n.locale] }}
              </DisclosureButton>
              <DisclosurePanel as="ul" class="mt-1 px-2">
                <li
                  v-for="subCategory in category?.sub_categories"
                  :key="subCategory.id"
                >
                  <router-link
                    to="name"
                    :class="[
                      'block hover:bg-gray-50 rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700',
                    ]"
                    >{{ subCategory.name[$i18n.locale] }}</router-link
                  >
                </li>
              </DisclosurePanel>
            </Disclosure>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
import { useCategoryStore } from "@/store/Category";
import { ref, watch } from "vue";

const categoryStore = useCategoryStore();
const categories = ref(categoryStore.categories);

watch(
  () => categoryStore.categories,
  (newValue) => {
    categories.value = newValue;
  }
);
</script>
