<template>
  <AppContainer>
    <Swiper :pagination="true" :autoplay="{
      delay: 4500,
      disableOnInteraction: false,
    }" :modules="swiperModules" class="rounded-md aspect-[830/390] bg-gray-100">
      <SwiperSlide v-for="(i, idx) in 14" :key="idx">
        <span>Толстый №{{ i }}</span>
      </SwiperSlide>
    </Swiper>
    <div v-if="fetching">
      Loading...
    </div>
    <div v-else-if="error">
      Oh no... {{ error }}
    </div>
    <div v-else>
      <span v-if="data.user">
        {{data.user.name}}
      </span>
    </div>
  </AppContainer>
</template>

<script>
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useQuery } from '@urql/vue';
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
  async setup() {
    const { data, fetching } = await useQuery({
      query: `
        
          query ($id: ID!) {
            user(id: $id) {
              id
              name
            }
          } 
        
      `,
      variables: { id: 18 },
    });
    return {
      fetching,
      data,
      error: data.error,
      swiperModules: [Pagination, Autoplay],
    };
  },
};
</script>

<style scoped>
:deep(.swiper) {
  @apply flex justify-center;
}

:deep(.swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction) {
  @apply flex items-center w-auto mx-auto left-auto py-1 px-2 rounded-full bg-white drop-shadow;
}

:deep(.swiper-pagination-bullet) {
  @apply w-1.5 h-1.5;
}
</style>