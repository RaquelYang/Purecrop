<template>
<div id="newshome" >
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
    <v-carousel height="auto" class="carousel mt-14 mt-sm-16" cycle hide-delimiters progress interval="2500" :show-arrows="false">
      <v-carousel-item class="carousel"
        v-for="newcarousel in newscarousel" :key="newcarousel._id"
        :src="newcarousel.file"
      ></v-carousel-item>
    </v-carousel>
  <v-container class="home mt-8 mt-md-16">
      <h3 class="text-center text-lg-h2 text-md-h3 text-h3 light-green--text text--darken-1 font-weight-bold bottomline">最新消息</h3>
      <p class="text-center mt-6 mt-lg-10">搶先消息 x 小農活動</p>
      <v-row class="mt-4 mt-sm-16">
        <v-col></v-col>
        <v-col cols="12">
          <v-row>
          <v-col cols="12" xl="3" md="4" sm="6" v-for="newsdata in news" :key="newsdata._id">
          <v-card :ripple="false" >
            <v-img height="200" class="imgscale" :src="newsdata.image">
            </v-img>
            <v-card-title>{{newsdata.name}}</v-card-title>
            <v-card-text>
              <div class="pb-2">{{new Date(newsdata.date).toLocaleDateString('zh-tw')}}</div>
              <p class="ellipsis mb-0">{{newsdata.content}}</p>
            </v-card-text>
            <v-card-actions class="justify-end px-4 pb-4" >
              <v-btn :to="'/news/singlenews/'+ newsdata._id"  text :ripple="false" class="light-green darken-1 white--text">read more</v-btn>
            </v-card-actions>
          </v-card>
          </v-col>
        </v-row>
        </v-col>
        <v-col></v-col>
      </v-row>
  </v-container>
</div>
</template>
<style lang="scss">
@import "@/scss/variable.scss";
@import "@/scss/mixins/rwd.scss";
#newshome{
  margin-bottom: 5rem;
  .carousel{
    height: auto !important;
  }
  .mask{
    width: 100vw;
    height: 100vh;
    text-align: center;
  }
  .home{
    .v-image__image.v-image__image--cover{
    z-index: 1;
    transition: .5s;
    &:hover{
      transform: scale(1.2);
      }
    }
  .swiper-pagination-bullet-active{
  background-color:#8BC34A !important;
  }
  .v-carousel__item{
    height: auto;
  }
  }
  .ellipsis{
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
@include sm{
  #newshome{
    margin-bottom: 15rem;
  }
}
</style>
<script>

export default {
  data () {
    return {
      news: [],
      newscarousel: [],
      init: true
    }
  },
  async created () {
    try {
      await this.getCarousel()
      await this.getNews()
      this.init = false
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得失敗'
      })
    }
  },
  methods: {
    async getCarousel () {
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
    },
    async getNews () {
      try {
        const { data } = await this.api.get('/news')
        console.log(data.result)
        this.news = data.result
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '取得最新消息失敗'
        })
      }
    }
  }
}
</script>
