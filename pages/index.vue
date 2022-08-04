<template>
  <AppContainer>
    <Swiper
      :pagination="true"
      :autoplay="{
        delay: 4500,
        disableOnInteraction: false,
      }"
      :modules="swiperModules"
      class="rounded-md aspect-[830/390] bg-gray-100"
    >
      <SwiperSlide v-for="(i, idx) in 14" :key="idx">
        <span>Толстый №{{ i }}</span>
      </SwiperSlide>
    </Swiper>
  </AppContainer>
</template>

<script>
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
definePageMeta({
  layout: "index",
});
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      swiperModules: [Pagination, Autoplay],
    };
  },
};
</script>

<style scoped>
:deep(.swiper) {
  @apply flex justify-center;
}
:deep(.swiper-horizontal
    > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction) {
  @apply flex items-center w-auto mx-auto left-auto py-1 px-2 rounded-full bg-white drop-shadow;
}

:deep(.swiper-pagination-bullet) {
  @apply w-1.5 h-1.5;
}
</style>