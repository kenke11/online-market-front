<template>
  <div v-if="groups" class="flex flex-1 flex-col lg:col-span-2 border-t py-10">
    <h2 class="font-semibold">დამატებითი მახასიათებლები</h2>
    <ul role="list" class="flex flex-1 flex-col mt-10">
      <li>
        <ul role="list" class="-mx-2 space-y-1">
          <li v-for="group in groups" :key="group.id">
            <Disclosure
              v-if="group.specifications.length"
              as="div"
              v-slot="{ open }"
            >
              <DisclosureButton
                class="flex justify-between hover:bg-gray-50 items-center w-full text-left rounded-md p-2 text-sm leading-6 font-semibold text-gray-700"
              >
                <span class="font-semibold">{{
                  group.group_name[$i18n.locale]
                }}</span>
                <ChevronRightIcon
                  :class="[
                    open ? 'rotate-90 text-gray-800' : 'text-gray-600',
                    'h-6 w-6 shrink-0',
                  ]"
                  aria-hidden="true"
                />
              </DisclosureButton>
              <DisclosurePanel as="ul" class="mt-1">
                <li
                  v-for="specification in group.specifications"
                  :key="specification.id"
                >
                  <div
                    :class="[
                      'grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 rounded-md py-2 pr-2 pl-2 text-sm leading-6 text-gray-700',
                    ]"
                  >
                    <div class="col-span-1 font-semibold">
                      {{ specification.name[$i18n.locale] }}
                    </div>
                    <div class="col-span-1 lg:col-span-2">
                      {{
                        specification.specification_description[$i18n.locale]
                      }}
                    </div>
                  </div>
                </li>
              </DisclosurePanel>
            </Disclosure>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
import { ref, watch, defineProps } from "vue";

const props = defineProps({
  specificationGroups: {
    type: Object,
    required: false,
    default: null,
  },
});

const groups = ref(props.specificationGroups);

watch(
  () => props.specificationGroups,
  (newValue) => {
    groups.value = newValue;
  }
);
</script>
