<template>
  <div id="home" >
    <!-- part1 滿版影片 autoplay -->
    <div class="videobox pt-14">
      <video class="video" src="@/assets/video/home_veg.mp4" autoplay loop  muted playsinline webkit-playsinline>
      </video>
      <v-overlay :value="true" :absolute="true" color="rgba(0,0,0,.8)" z-index="1">
        <p class="text-h4 text-sm-h2 pb-md-4 font-weight-light" v-scroll-reveal>在地有機 履歷食材</p>
        <p class="text-center text-h4 hidden-md-and-down" v-scroll-reveal>新鮮健康、食品認證</p>
        <p class="text-center text-h4 mb-0 hidden-md-and-down" v-scroll-reveal>在地有機、品質無疑</p>
      </v-overlay>
      <p class="text-h2 vedioarrowdown white--text hidden-sm-and-down" v-scroll-reveal="{delay:750}">﹀</p>
    </div>
    <!-- 關於無疑農 -->
    <v-container class="about">
      <v-row >
        <v-col></v-col>
        <v-col cols="12" md="11" lg="9">
          <v-row >
            <v-col cols="12" md="6">
              <h3 class="text-center text-h4 text-md-h3 light-green--text text--darken-1 font-weight-bold bottomline1" v-scroll-reveal>關於無疑農</h3>
              <div class="mt-16 text-center text-md-start text-subtitle-1" v-scroll-reveal="{delay:500}">
                <p class="text-xl-h5 text-h6">我們使用土地友善且無農藥方式種植並供蔬果履歷</p>
                <p class="text-xl-h5 text-h6">使用在地有機、履歷食材，讓您吃得更安心</p>
                <p class="text-xl-h5 text-h6">用善待土地而來的食材，善待你的身體</p>
                <p class="text-xl-h5 text-h6">獲得CAS 有機農產品標章，生產過程不使用農藥</p>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="svg" v-scroll-reveal="{delay:250}">
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
    <!-- 品質保證 -->
    <v-container class="qualtity">
      <h3 class="text-center text-lg-h2 text-sm-h3 text-h4 light-green--text text--darken-1 font-weight-bold bottomline">品質保證</h3>
      <p class="text-center mt-6 mt-lg-10">當季蔬果 <span class="font-weight-bold">x</span> 小農新鮮直送</p>
      <v-row class="text-center mt-6 mt-lg-10">
        <v-col></v-col>
        <v-col cols="12" md="11" lg="9">
          <v-row class="qualityicon">
            <v-col cols="12" sm="6" md="3">
              <v-icon class="light-green rounded white--text text-md-h2 text-lg-h1 px-md-8 px-lg-10 py-md-3 px-sm-15 px-15 py-5 text-h1 ">mdi-tree-outline</v-icon>
              <h3 class="text-lg-h4 text-md-h5 text-h4 mt-10">無農藥</h3>
              <h5 class="text-h6 text-lg-h6 text-md-subtitle-1 mt-2">天然植栽 有保障</h5>
            </v-col>
            <v-col cols="12" sm="6" md="3" class="mt-5 mt-sm-0">
              <v-icon class="light-green rounded white--text text-md-h2 text-lg-h1 px-md-8 px-lg-10 py-md-3 px-sm-15 px-15 py-5 text-h1 ">mdi-credit-card-check-outline</v-icon>
              <h3 class="text-lg-h4 text-md-h5 text-h4 mt-10">線上結帳</h3>
              <h5 class="text-h6 text-lg-h6 text-md-subtitle-1 mt-2">多元結帳 結帳方便</h5>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-icon class="light-green rounded white--text text-md-h2 text-lg-h1 px-md-8 px-lg-10 py-md-3 px-sm-15 px-15 py-5 text-h1 ">mdi-package-variant-closed</v-icon>
              <h3 class="text-lg-h4 text-md-h5 text-h4 mt-10">快速包裝</h3>
              <h5 class="text-h6 text-lg-h6 text-md-subtitle-1 mt-2">迅速包裝 無外露</h5>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-icon class="light-green rounded white--text text-md-h2 text-lg-h1 px-md-8 px-lg-10 py-md-3 px-sm-15 px-15 py-5 text-h1 ">mdi-truck-delivery-outline</v-icon>
              <h3 class="text-lg-h4 text-md-h5 text-h4 mt-10">出貨迅速</h3>
              <h5 class="text-h6 text-lg-h6 text-md-subtitle-1 mt-2">快速出貨無煩惱</h5>
            </v-col>
          </v-row>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
    <!-- 新鮮直送 -->
    <Delivery class="delivery"/>
  </div>
</template>
<style lang="scss">
@import "@/scss/variable.scss";
@import "@/scss/mixins/rwd.scss";
#home{
  .v-overlay__content{
    top:10%
  }
  .about{
    margin-top: 1rem;
  }
  .qualtity{
    margin-top: 2rem !important;
  }
  .qualityicon{
    margin-top: 1rem;
  }
  .vedioarrowdown{
    position: absolute;
    bottom:5%;
    left: 50%;
    transform:translateX(-50%);
    z-index: 100;
    border-radius: 50%;
    padding: 5px 15px;
  }
  .svg{
    background: url('../../assets/images/undraw_blooming_jtv6.svg') no-repeat center/contain;
    width: auto;
    height: 250px;
  }
  .deliverycontent{
    .col-12{
      background: transparent !important;
    }
  }
}
@include sm{
  #home{
    .v-overlay__content{
    top:0%
    }
    .about {
      margin-top: 5rem;
      .abouttxt{
      margin-left: 0rem;
      }
    }
    .qualtity {
    margin-top: 5rem !important;
    }
    .delivery {
      margin-top: 5rem !important;
    }
    .qualityicon {
      margin-top: 3rem;
    }
    .svg{
      height: 400px;
    }
    .deliverycontent{
    .col-12:nth-child(2),.col-12:nth-child(5),.col-12:nth-child(6),.col-12:nth-child(1){
      background: #EEEEEE !important;
    }
  }
  }
}
@include md{
  #home{
    .about {
      margin-top: 10rem;
    }
    .qualtity {
    margin-top: 15rem !important;
    }
    .delivery {
      margin-top: 15rem !important;
    }
    .qualityicon {
      margin-top: 3rem;
    }
  }
}

</style>
<script>
import Delivery from '@/components/Delivery.vue'
export default {
  components: { Delivery }
}
</script>
