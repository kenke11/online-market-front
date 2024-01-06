<template>
  <div class="flex px-2 lg:px-0">
    <div class="flex flex-shrink-0 items-center">
      <img
        class="h-8 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
    </div>
    <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
        >Dashboard</router-link
      >
    </div>
  </div>
</template>
