<template>
<div id="newspages">

  <v-container class="mt-8 mt-md-8">
    <v-row>
      <v-col></v-col>
      <v-col cols="12" md="9" class="relative">
        <v-btn text :ripple="false" plain icon class="light-green darken-1 white--text font-weight-black" to="/news">
        <v-icon class="text-h3">mdi-arrow-left-bold</v-icon>
        </v-btn>

        <h3 class="text-center text-lg-h3 text-md-h3 text-h3 light-green--text text--darken-1 font-weight-bold bottomline4 pt-16">四四南村活動</h3>
        <v-row class="mt-8 mt-md-16">
          <v-col cols="12" lg="6" order="2" order-lg="1">
            <div class="txt">
              <p>我們從台大學生創業起家，已經四年了！</p>
              <p>由營養師設計的菜單，專為忙碌的上班族與學生，提供健康的外送午餐！</p>
              <p>使用在地有機、履歷食材，甚至與玉里小農契作無毒米</p>
              <p>為了讓吃得安心，更請符合國際食品安全認證的食品廠生產。</p>
              <p>用善待土地而來的食材，善待你的身體。</p>
              <p>從產地到廚房，再到你手上，每一步都為了更好的環境謹慎用心。</p>
              <v-divider class="mt-10"></v-divider>
              <ul class="mt-10">
                <li class="font-weight-bold text-h6">注意事項</li>
              </ul>
              <ul class="mt-3">
                <li>▹ 活動日期：2021/10/15（五）- 10/17（日）</li>
                <li>▹ 活動時間：10/15｜13:00 - 19:00 10/16.17｜13:00 - 20:00</li>
                <li>▹ 活動地點：台北市信義區 四四南村</li>
                <li>▹ 現場須配合防疫規定全程配戴</li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" lg="6" order="1" order-lg="2">
            <v-img src="https://picsum.photos/1200/800/?random=10" width="100%" height="100%"></v-img>
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
#newspages{
  .relative{
    position: relative;
  }
  p{
    margin-bottom: 0;
    line-height: 1.4rem;
    letter-spacing: 2px;
    &:nth-child(2n+1){
      padding-bottom: 1.5rem;
    }
  }
  ul{
    padding: 0;
  }
  li{
    list-style: none;
    line-height: 1.6rem;
  }
  .v-btn__content {
    opacity: 1 !important;
    font-size: 40px;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .v-btn--icon{
    width: 60px;
    height: 60px;
    position: absolute;
    top:-2rem;
    left: 1rem;
  }
}
@include sm{
  #newspages{
    .v-btn--icon{
    top:0rem;
    left: 0rem;
  }
  }
}
@keyframes leftright{
  0%{
    left: 55%;
  }
  100%{
    left: 45%;
  }
}
</style>
<script>

</script>
