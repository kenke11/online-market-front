<template>
  <div class="px-4 h-fit sm:px-6 lg:pl-8 md:flex-1 md:pl-6">
    <div class="bg-white">
      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative"
        >
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              src="https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <div class="text-sm font-medium text-gray-900">
                {{ product.price }}
              </div>
              <h3 class="text-sm text-gray-700">
                <button>
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name[$i18n.locale] }}
                </button>
              </h3>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "@/store/Product";
import { ref, watch } from "vue";

const productStore = useProductStore();

const products = ref(productStore.products);

watch(
  () => productStore.products,
  (newValue) => {
    products.value = newValue;
  }
);
</script>
