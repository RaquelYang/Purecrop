<template>
<div id="newshome" >
  <v-container class="home mt-8 mt-md-16">
      <h3 class="text-center text-lg-h2 text-md-h3 text-h3 light-green--text text--darken-1 font-weight-bold bottomline">最新消息</h3>
      <p class="text-center mt-6 mt-lg-10">搶先消息 x 小農活動</p>
      <v-row class="mt-4 mt-sm-16">
        <v-col></v-col>
        <v-col cols="12">
          <v-row>
          <v-col cols="12" xl="3" md="4" sm="6">
          <v-card :ripple="false">
            <v-img height="200" class="imgscale" src="https://i.imgur.com/cwfWaCOh.jpg">
            </v-img>
            <v-card-title>春日野餐 x 食物戀</v-card-title>
            <v-card-text>
              <div class="pb-2">2022/03/01</div>
              <p class="ellipsis mb-0">我們從台大學生創業起家，已經四年了！由營養師設計的菜單，專為忙碌的上班族與學生，提供健康的外送午餐！使用在地有機、履歷食材，甚至與玉里小農契作無毒米</p>
            </v-card-text>
            <v-card-actions class="justify-end px-4 pb-4" >
              <v-btn to="/news/pages" text :ripple="false" class="light-green darken-1 white--text">read more</v-btn>
            </v-card-actions>
          </v-card>
          </v-col>
          <v-col cols="12" xl="3" md="4" sm="6">
          <v-card :ripple="false">
            <v-img height="200" class="imgscale" src="https://www.newsmarket.com.tw/files/2016/12/%E6%94%A4%E4%BD%8D%E5%B8%86%E5%B8%832-%E6%94%A4%E4%BD%8D%E5%90%8D-01-02-edm.jpg">
            </v-img>
            <v-card-title>樂土友善小農市集</v-card-title>
            <v-card-text>
              <div class="pb-2">2021/07/22</div>
              <p class="ellipsis mb-0">我們從台大學生創業起家，已經四年了！由營養師設計的菜單，專為忙碌的上班族與學生，提供健康的外送午餐！使用在地有機、履歷食材，甚至與玉里小農契作無毒米</p>
            </v-card-text>
            <v-card-actions class="justify-end px-4 pb-4" >
              <v-btn to="/news/pages" text :ripple="false" class="light-green darken-1 white--text">read more</v-btn>
            </v-card-actions>
          </v-card>
          </v-col>
          <v-col cols="12" xl="3" md="4" sm="6">
          <v-card :ripple="false">
            <v-img height="200" class="imgscale" src="https://static.accupass.com/eventbanner/2110271218561340948097.jpg">
            </v-img>
            <v-card-title>Chill 農遊 x 小農 DIY 體驗活動</v-card-title>
            <v-card-text>
              <div class="pb-2">2021/05/10</div>
              <p class="ellipsis mb-0">我們從台大學生創業起家，已經四年了！由營養師設計的菜單，專為忙碌的上班族與學生，提供健康的外送午餐！使用在地有機、履歷食材，甚至與玉里小農契作無毒米</p>
            </v-card-text>
            <v-card-actions class="justify-end px-4 pb-4" >
              <v-btn to="/news/pages" text :ripple="false" class="light-green darken-1 white--text">read more</v-btn>
            </v-card-actions>
          </v-card>
          </v-col>
          <v-col cols="12" xl="3" md="4" sm="6">
          <v-card :ripple="false">
            <v-img height="200" class="imgscale" src="https://static.accupass.com/userupload/1908260648129407078010.jpg">
            </v-img>
            <v-card-title>小農時光走廊</v-card-title>
            <v-card-text>
              <div class="pb-2">2019/08/25</div>
              <p class="ellipsis mb-0">我們從台大學生創業起家，已經四年了！由營養師設計的菜單，專為忙碌的上班族與學生，提供健康的外送午餐！使用在地有機、履歷食材，甚至與玉里小農契作無毒米</p>
            </v-card-text>
            <v-card-actions class="justify-end px-4 pb-4" >
              <v-btn to="/news/pages" text :ripple="false" class="light-green darken-1 white--text">read more</v-btn>
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
  // margin-top: 10rem;
  .home{
    .v-image__image.v-image__image--cover{
    z-index: 1;
    transition: .5s;
    &:hover{
      transform: scale(1.2);
      }
    }
  }
  .ellipsis{
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
}

</style>
