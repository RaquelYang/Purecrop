<template>
  <div id="news">
    <Swiper/>
      <router-view/>
  </div>
</template>
<script>
import Swiper from '@/components/Swiper.vue'

export default {
  components: {
    Swiper
  }
}
</script>
