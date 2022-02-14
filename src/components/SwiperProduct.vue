<template>
  <div class="thumb-example">
    <!-- swiper1 -->
    <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper class="swiper gallery-thumbs py-5" :options="swiperOptionThumbs" ref="swiperThumbs">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
    </swiper>
  </div>

</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'

export default {
  name: 'swiper-example-thumbs-gallery',
  title: 'Thumbs gallery with Two-way control',
  data () {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        // spaceBetween: 10,
        allowSlideNext: false
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        // centeredSlides: true,
        slidesPerView: 5,
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  },
  props: ['parentImage']
}
</script>

<style lang="scss">
  .thumb-example {
    height: 480px;
    // background-color: $black;
  }

  .swiper {
    .swiper-slide {
      background-size: cover;
      background-position: center;

      &.slide-1 {
        background-image:url('https://picsum.photos/300/200/?random=12');
      }
      &.slide-2 {
        background-image:url('https://picsum.photos/300/200/?random=12');
      }
      &.slide-3 {
        background-image:url('https://picsum.photos/300/200/?random=13');
      }
      &.slide-4 {
        background-image:url('https://picsum.photos/300/200/?random=14');
      }
      &.slide-5 {
        background-image:url('https://picsum.photos/300/200/?random=10');
      }
    }

    &.gallery-top {
      height: 75%;
      width: 100%;
    }
    &.gallery-thumbs {
      height: 25%;
      box-sizing: border-box;
      // background-color: #ddd;
    }
    &.gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.6;
    }
    &.gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
  }
</style>
