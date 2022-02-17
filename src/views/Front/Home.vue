<template>
  <div id="home" >
    <!-- part1 滿版影片 autoplay -->
    <div class="videobox">
      <video class="video" src="../../assets/video/home_veg.mp4" autoplay loop  muted playsinline webkit-playsinline>
      </video>
      <v-overlay :value="true" :absolute="true" color="rgba(0,0,0,.8)" z-index="1">
        <p class="text-h3">在地有機 履歷食材</p>
        <p class="text-center text-h6 mb-0">在地有機、品質無疑，地有機地有機</p>
        <p class="text-center text-h6 mb-0">在地有機、品質無疑，地有機地有機</p>
      </v-overlay>
      <p class="text-h2 vedioarrowdown white--text hidden-sm-and-down">🡇</p>
    </div>
    <!-- 關於無疑農 -->
    <v-container class="about">
      <v-row >
        <v-col></v-col>
        <v-col cols="12" md="11" lg="9">
          <v-row >
            <v-col cols="12" md="6">
              <h3 class="text-center text-md-h4 text-h3 light-green--text text--darken-1 font-weight-bold bottomline1">關於無疑農</h3>
              <div class="mt-10 text-center text-md-start">
                <p>我們從台大學生創業起家，已經四年了！由營養師設計的菜單，專為忙碌的上班族與學生，提供健康的外送午餐！</p>
                <p>使用在地有機、履歷食材，甚至與玉里小農契作無毒米</p>
                <p>為了讓吃得安心，更請符合國際食品安全認證的食品廠生產。</p>
                <p>用善待土地而來的食材，善待你的身體。</p>
                <p>從產地到廚房，再到你手上，每一步都為了更好的環境謹慎用心。</p>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-img src="../../assets/images/featured products.svg" height="400px" position="top center"></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
    <!-- 品質保證 -->
    <v-container class="mt-8 mt-md-16">
      <h3 class="text-center text-lg-h2 text-md-h3 text-h3 light-green--text text--darken-1 font-weight-bold bottomline">品質保證</h3>
      <v-row class="text-center mt-6 mt-lg-10">
        <v-col></v-col>
        <v-col cols="12" md="11" lg="9">
          <v-row>
            <v-col cols="12" sm="6" md="3">
          <v-icon class="light-green rounded white--text text-md-h2 text-lg-h1 px-md-8 px-lg-10 py-md-3 px-sm-15 px-15 py-5 text-h1 mt-10">mdi-tree-outline</v-icon>
          <h3 class="text-lg-h4 text-md-h5 text-h4 mt-10">無農藥</h3>
          <h5 class="text-h6 text-lg-h6 text-md-subtitle-1 mt-2">天然植栽 有保障</h5>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-icon class="light-green rounded white--text text-md-h2 text-lg-h1 px-md-8 px-lg-10 py-md-3 px-sm-15 px-15 py-5 text-h1 mt-10">mdi-credit-card-check-outline</v-icon>
              <h3 class="text-lg-h4 text-md-h5 text-h4 mt-10">線上結帳</h3>
              <h5 class="text-h6 text-lg-h6 text-md-subtitle-1 mt-2">多元結帳 結帳方便</h5>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-icon class="light-green rounded white--text text-md-h2 text-lg-h1 px-md-8 px-lg-10 py-md-3 px-sm-15 px-15 py-5 text-h1 mt-10">mdi-package-variant-closed</v-icon>
              <h3 class="text-lg-h4 text-md-h5 text-h4 mt-10">快速包裝</h3>
              <h5 class="text-h6 text-lg-h6 text-md-subtitle-1 mt-2">迅速包裝 無外露</h5>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-icon class="light-green rounded white--text text-md-h2 text-lg-h1 px-md-8 px-lg-10 py-md-3 px-sm-15 px-15 py-5 text-h1 mt-10">mdi-truck-delivery-outline</v-icon>
              <h3 class="text-lg-h4 text-md-h5 text-h4 mt-10">出貨迅速</h3>
              <h5 class="text-h6 text-lg-h6 text-md-subtitle-1 mt-2">快速出貨無煩惱</h5>
            </v-col>
          </v-row>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
    <!-- 新鮮直送 -->
    <Delivery />
  </div>
</template>
<style lang="scss">
@import "@/scss/variable.scss";
@import "@/scss/mixins/rwd.scss";
#home{
  .about{
    margin-top: 100px;
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
}
@include md{
  #home{
      .about{
      margin-top: 7rem;
    }
    }
  }

@keyframes upanddown{
  0%,100%{
    bottom:5%
  }
  50%{
    bottom:3%
  }
}
</style>
<script>
import Delivery from '@/components/Delivery.vue'
export default {
  components: { Delivery }
}
</script>
