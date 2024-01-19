<template>
  <div class="flex flex-col space-y-5">
    <div>
      <h3 class="font-bold text-sm lg:text-base">{{ headerName }}</h3>
    </div>
    <div class="h-[320px]">
      <swiper
        :slidesPerView="'auto'"
        :spaceBetween="10"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          v-for="product in productList"
          :key="product.id"
          class="rounded-md"
        >
          <div class="flex flex-col w-full h-full space-y-4">
            <div class="h-[150px] w-full">
              <img
                :src="product?.main_picture_url"
                alt=""
                class="w-full h-full bg-cover rounded-md"
              />
            </div>
            <div class="w-full flex flex-col">
              <div
                class="flex flex-col w-full items-start px-2 text-sm lg:text-base"
              >
                <div class="flex items-end space-x-2 font-bold">
                  <span v-if="product.with_sale" class="text-red-600"
                    >{{ product.sale_price }}ლ</span
                  >
                  <span
                    v-if="product.with_sale"
                    class="text-gray-600 text-xs lg:text-sm line-through"
                    >{{ product.price }}ლ</span
                  >
                  <span v-else class="text-red-600">{{ product.price }}ლ</span>
                </div>
                <div class="text-sm font-semibold">
                  {{ product.name[$i18n.locale] }}
                </div>
              </div>
              <div class="w-full flex items-center justify-end space-x-2 mt-4">
                <button
                  class="flex items-center text-sm px-2 py-2 justify-center rounded-md border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  asd
                </button>
                <button
                  class="flex items-center text-sm px-2 py-2 justify-center rounded-md border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  asd
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const props = defineProps({
  headerName: {
    type: String,
    required: false,
    default: "",
  },
  products: {
    type: Array,
    required: false,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: [],
  },
});

const modules = [Pagination];
const productList = ref(filterProductMainImage(props.products));

function filterProductMainImage(products) {
  if (products && products.length) {
    return products.map((product) => {
      const mainPicture = product.product_pictures.find(
        (picture) => picture.is_main === 1
      );

      if (mainPicture) {
        return {
          ...product,
          main_picture_url: `${process.env.VUE_APP_STORAGE_BACK_URL}${mainPicture.picture_url}`,
        };
      }

      // Handle the case where a main picture is not found
      return { ...product, main_picture_url: null };
    });
  }

  return null;
}

watch(
  () => props.products,
  (newValue) => {
    productList.value = filterProductMainImage(newValue);
  }
);
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: white;
  width: 190px;
  height: 283px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
