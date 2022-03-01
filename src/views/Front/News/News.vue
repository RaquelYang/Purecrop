<template>
  <div id="news">
    <v-overlay :value="init">
      <div class="mask white d-flex justify-center align-center">
        <v-progress-circular
          :size="70"
          :width="7"
          indeterminate
          color="green"
        ></v-progress-circular>
      </div>
    </v-overlay>
    <v-carousel height="auto"  class="mt-14 mt-sm-16" cycle hide-delimiters progress interval="2500" :show-arrows="false">
      <v-carousel-item
        v-for="newcarousel in newscarousel" :key="newcarousel._id"
        :src="newcarousel.file"
      ></v-carousel-item>
    </v-carousel>
      <router-view/>
  </div>
</template>
<style lang="scss">
#news{
  .mask{
    width: 100vw;
    height: 100vh;
    text-align: center;
  }
  .swiper-pagination-bullet-active{
  background-color:#8BC34A !important;
  }
  .v-carousel__item{
    height: auto;
  }
}
</style>
<script>

export default {
  data () {
    return {
      products: [],
      newscarousel: [],
      init: true
    }
  },
  async created () {
    try {
      this.getProduct()
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '商品取得失敗'
      })
    }
  },
  mounted () {
    this.init = false
  },
  methods: {
    async getProduct () {
      try {
        const { data } = await this.api.get('/images')
        this.newscarousel = data.result[0].newsswiper
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '取得圖片失敗'
        })
      }
    }
  }
}
</script>
