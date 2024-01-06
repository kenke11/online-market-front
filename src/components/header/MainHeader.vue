<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <div class="flex h-16 justify-between">
        <DesktopNavBar />
        <SearchBar />
        <MobileBurgerBar :open="open" />
        <LanguageBar />
      </div>
    </div>

    <MobileNavBar />
  </Disclosure>
</template>

<script setup>
import { Disclosure } from "@headlessui/vue";
import MobileNavBar from "@/components/header/main-header/MobileNavBar.vue";
import DesktopNavBar from "@/components/header/main-header/DesktopNavBar.vue";
import SearchBar from "@/components/header/main-header/SearchBar.vue";
import MobileBurgerBar from "@/components/header/main-header/MobileBurgerBar.vue";
import LanguageBar from "@/components/header/main-header/LanguageBar.vue";
</script>
