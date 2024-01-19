<template>
  <div v-if="productImages" class="mx-auto lg:mt-6 max-w-2xl lg:max-w-7xl">
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(image, index) in productImages"
        :key="index"
        class="swiper-slide"
      >
        <img
          :src="image.picture_url"
          alt="Slide Image"
          class="swiper-slide-img max-h-[15rem] sm:max-h-[18.5rem] md:max-h-[23rem] lg:max-h-[26rem]"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const props = defineProps({
  images: {
    type: Array,
    required: false,
    default: null,
  },
});

const modules = ref([Autoplay, Pagination, Navigation]);
const productImages = ref(filterProductImage(props.images));

function filterProductImage(value) {
  if (value && !!value.length) {
    value = value.map((image) => {
      return {
        ...image,
        picture_url: `${process.env.VUE_APP_STORAGE_BACK_URL}${image.picture_url}`,
      };
    });

    return value;
  }

  return null;
}

watch(
  () => props.images,
  (newValue) => {
    productImages.value = filterProductImage(newValue);
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
  background: #fff;
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
