<template>
  <div id="delivery">
    <h3
      class="text-center text-lg-h2 text-md-h3 text-h3 light-green--text text--darken-1 font-weight-bold bottomline"
    >
      新鮮直送
    </h3>
    <p class="text-center mt-6 mt-lg-10">
      當季蔬果 <span class="font-weight-bold">x</span> 小農新鮮直送
    </p>
    <v-row class="deliverycontent">
      <v-col cols="12" sm="6" class="px-0 px-md-10 px-lg-16 py-16">
        <v-img src="../assets/images/5a22fc9aa25020.8918082015122423306648.png" v-scroll-reveal="{delay:500}" />
      </v-col>
      <v-col cols="12" sm="6" class="text">
        <div class="text-md-h4 text-h5 text-center mt-8 mt-sm-0 mb-8 mb-sm-0">
          <h2 class="mb-5">紅心芭樂</h2>
          <p>
            富含茄紅素、胡蘿蔔素
          </p>
          <p>
            有助於眼睛健康
          </p>
          <p>
            口感紮實清脆
          </p>
          <p>
            吃得安心健康
          </p>
          <v-btn class="light-green darken-2 white--text text-h6 mt-10" to="/products/productintroduction/6204c718c0b8fe12e8847058" large>立即購買</v-btn>
        </div>
      </v-col>
      <v-col cols="12" sm="6" order="1" order-sm="2" class="px-0 px-md-10 px-lg-16 grey lighten-3 py-16">
        <v-img src="../assets/images/5a1c7e70ca3fe7.9399725215118168168284.png" v-scroll-reveal="{delay:750}"/>
      </v-col>
      <v-col cols="12" sm="6" class="text grey lighten-3" order="2" order-sm="1">
        <div class="text-md-h4 text-h5 text-center mt-8 mt-sm-0 mb-8 mb-sm-0">
          <h2 class="mb-5">有機野菜</h2>
          <p>
            堅持時令栽培旬味
          </p>
          <p>
            嚴選無毒安心蔬菜
          </p>
          <p>
            有機堆肥、純淨水源灌溉
          </p>
          <p>
            不只安心、更多新鮮美味
          </p>
          <v-btn class="light-green darken-2 white--text text-h6 mt-10" to="/products/productintroduction/620f37b796600b7b273c295e" large>立即購買</v-btn>
        </div>
      </v-col>
      <v-col cols="12" sm="6" order="3" order-sm="3" class="px-0 px-md-10 px-lg-16 py-16">
        <v-img src="../assets/images/kisspng-cymbopogon-citratus-asian-cuisine-lemon-stock-phot-garlic-5ab507ce754ed3.5863863715218134544805.png" v-scroll-reveal="{delay:1050}"/>
      </v-col>
      <v-col cols="12" sm="6" class="text" order="4" order-sm="4">
        <div class="text-md-h4 text-h5 text-center mt-8 mt-sm-0 mb-8 mb-sm-0">
          <h2 class="mb-5">香茅</h2>
          <p>
            南洋風味必用香料
          </p>
          <p>
            具檸檬香氣、味道獨特
          </p>
          <p>
            再製香茅油、天然無負擔
          </p>
          <p>
            露營、野餐有效驅蚊
          </p>
          <v-btn class="light-green darken-2 white--text text-h6 mt-10" to="/products/productintroduction/622011e9cf367e8c8a437500" large>立即購買</v-btn>
        </div>
      </v-col>
      <v-col cols="12" sm="6" order="5" order-sm="6" class="px-0 px-md-10 px-lg-16 py-sm-16 grey lighten-3">
        <v-img src="../assets/images/fig.png" v-scroll-reveal="{delay:1500}"/>
      </v-col>
      <v-col cols="12" sm="6" class="text grey lighten-3" order="6" order-sm="5">
        <div class="text-md-h4 text-h5 text-center mt-8 mt-sm-0 mb-8 mb-sm-0 ">
          <h2 class="mb-5">無花果</h2>
          <p>
            口感清爽、滋味甜蜜
          </p>
          <p>
            肉厚柔軟、果蜜潤口
          </p>
          <p>
            富含果膠、維生素B2
          </p>
          <p>
            有機栽培、安心購買
          </p>
          <v-btn class="light-green darken-2 white--text text-h6 mt-10" to="/products/productintroduction/6205f11124897566f8273115" large>立即購買</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss">
@import "@/scss/variable.scss";
@import "@/scss/mixins/rwd.scss";
#delivery {
  margin-top: 4rem !important;
  margin-bottom: 5rem;
  .deliverycontent {
    margin-top: 0rem;
    margin-left: 1rem;
    margin-right: 1rem;
    .col:not(:first-child):not(:nth-child(2)){
      margin-top: 10rem;
    }
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }
  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@include sm {
  #delivery {
    margin-top: 10rem !important;
    margin-bottom: 0rem;
    .deliverycontent {
      margin-left: 0;
      margin-right: 0;
    }
  }
}
@include md {
  #delivery {
    .deliverycontent {
      margin-top: 6rem;
      img {
        width: 100%;
        height: 400px;
        object-fit: cover;
      }
    }
  }
}
</style>
