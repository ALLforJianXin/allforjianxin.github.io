<template>
  <div style="width: 360px; display: block; margin: 0 auto">
    <carousel
      :per-page="1"
      :center-mode="true"
      :paginationActiveColor="paginationActiveColor"
      :paginationColor="paginationColor"
      :navigationEnabled="false"
    >
      <slide v-for="image in images" :key="image">
        <img :src="image" />
      </slide>
    </carousel>
  </div>
</template>

<style scoped>
.VueCarousel-dot:focus {
  outline: none !important;
}
</style>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
  props: {
    images: Array,
    paginationActiveColor: String,
    paginationColor: String,
  },
  /*
  mounted () {
    import('vue-carousel').then(module => {
      // Vue.use(module);
      // Vue.component('carousel', module.Carousel);
    });
  }
   */
};
</script>