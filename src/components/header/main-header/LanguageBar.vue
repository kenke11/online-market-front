<template>
  <div class="mr-4 lg:mr-0 lg:mx-4 flex items-center">
    <Menu as="div" class="relative ml-4 flex-shrink-0">
      <div>
        <MenuButton
          class="relative flex rounded-sm bg-white text-sm focus:outline-none uppercase"
        >
          {{ currentLanguageName }}
        </MenuButton>
      </div>
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <MenuItem v-for="(locale, index) in locales" :key="index">
            <button
              @click="changeLocale(locale.code)"
              class="block px-4 py-2 text-sm text-gray-700 uppercase hover:bg-gray-100"
            >
              {{ locale?.code }}
            </button>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ref, watch } from "vue";
import { useLocaleStore } from "@/store/Locale";

const localeStore = useLocaleStore();
const locales = ref(localeStore.locales);
const currentLanguageName = ref(localeStore.currentLocale);

const changeLocale = (newLocale) => {
  localStorage.setItem("locale", newLocale);
  localeStore.currentLocale = locales.value.find(
    (locale) => locale.code === newLocale
  )?.code;
  localeStore.setLocale();
};

watch(
  () => localeStore.locales,
  (newValue) => {
    locales.value = newValue;
  }
);

watch(
  () => localeStore.currentLocale,
  (newValue) => {
    currentLanguageName.value = newValue;
  }
);
</script>
