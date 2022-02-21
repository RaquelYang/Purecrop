<template>
  <div id="news">
    <v-carousel cycle hide-delimiters progress interval="2500" :show-arrows="false">
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
  .swiper-pagination-bullet-active{
  background-color:#8BC34A !important;
  }
  .swiper{
    min-height: 50vh;
    max-height: 80vh;
  }
  img{
    width:100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
<script>

export default {
  data () {
    return {
      products: [],
      newscarousel: []
    }
  },
  async created () {
    try {
      this.getProduct()
    } catch (error) {
      console.log(error)
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '商品取得失敗'
      })
    }
  },
  methods: {
    async getProduct () {
      try {
        const { data } = await this.api.get('/images')
        // console.log(data.result[0].productsiper)
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
