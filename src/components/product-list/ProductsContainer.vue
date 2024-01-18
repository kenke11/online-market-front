<template>
  <div class="px-4 h-fit sm:px-6 lg:pl-8 md:flex-1 md:pl-6">
    <div class="bg-white">
      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative"
        >
          <router-link
            :to="{
              name: 'product',
              params: {
                categorySlug: categorySlug,
                productSlug: product.slug,
              },
            }"
            class="w-fit h-fit bg-red-700"
          >
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
            >
              <img
                :src="product?.picture_url"
                class="w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
          </router-link>

          <div class="mt-4 flex justify-between">
            <div>
              <div class="text-sm font-medium text-gray-900">
                {{ product.price }}
              </div>
              <h3 class="text-sm text-gray-700">
                <button>
                  <span aria-hidden="true" class="inset-0" />
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
import { ref, watch, defineProps } from "vue";

defineProps({
  categorySlug: {
    type: String,
    required: true,
  },
});

const productStore = useProductStore();

const productsWithMainPicture = (item) => {
  let mainPicture = null;
  if (item.product_pictures) {
    mainPicture = item.product_pictures.filter(
      (picture) => picture.is_main === 1
    )[0];
  }

  return {
    ...item,
    picture_url: `${process.env.VUE_APP_STORAGE_BACK_URL}${mainPicture?.picture_url}`,
  };
};

const products = ref(productStore.products.map(productsWithMainPicture));

watch(
  () => productStore.products,
  (newValue) => {
    products.value = newValue.map(productsWithMainPicture);
  }
);
</script>
