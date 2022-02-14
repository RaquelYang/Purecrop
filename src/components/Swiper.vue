<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
    <swiper-slide>
      <v-img src="https://picsum.photos/1920/600/?random=1"></v-img>
    </swiper-slide>
    <swiper-slide>
      <v-img src="https://picsum.photos/1920/600/?random=2"></v-img>
    </swiper-slide>
    <swiper-slide>
      <v-img src="https://picsum.photos/1920/600/?random=13"></v-img>
    </swiper-slide>
    <swiper-slide>
      <v-img src="https://picsum.photos/1920/600/?random=14"></v-img>
    </swiper-slide>
    <swiper-slide>
      <v-img src="https://picsum.photos/1920/600/?random=15"></v-img>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<style lang="scss">
.swiper-pagination-bullet-active{
  background-color:#8BC34A !important;
  }
</style>
<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOptions: {
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 100500,
          disableOnInteraction: false
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style lang="scss">
.swiper{
  height: 100%;
}
.v-image{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
