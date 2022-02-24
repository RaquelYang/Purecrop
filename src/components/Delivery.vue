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
      <v-col cols="12" sm="6" class="px-0">
        <v-img src="../assets/images/5a22fc9aa25020.8918082015122423306648.png" v-scroll-reveal="{delay:500}" />
      </v-col>

      <v-col cols="12" sm="6" class="text">
        <div class="text-md-h4 text-h5 text-center mt-8 mt-sm-0 mb-8 mb-sm-0">
          <h2 class="mb-5">芭樂</h2>
          <p>
            當季水果
          </p>
          <p>
            天然甜味
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="6" order="1" order-sm="2" class="px-0 ">
        <v-img src="../assets/images/5a1c7e70ca3fe7.9399725215118168168284.png" v-scroll-reveal="{delay:1000}"/>
      </v-col>
      <v-col cols="12" sm="6" class="text" order="2" order-sm="1">
        <div class="text-md-h4 text-h5 text-center mt-8 mt-sm-0 mb-8 mb-sm-0">
          <h2 class="mb-5">野菜</h2>
          <p>
            無農藥植栽
          </p>
          <p>
            健康無虞
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="6" order="3" order-sm="3" class="px-0 ">
        <v-img src="../assets/images/kisspng-cymbopogon-citratus-asian-cuisine-lemon-stock-phot-garlic-5ab507ce754ed3.5863863715218134544805.png" v-scroll-reveal="{delay:2000}"/>
      </v-col>
      <v-col cols="12" sm="6" class="text" order="4" order-sm="4">
        <div class="text-md-h4 text-h5 text-center mt-8 mt-sm-0 mb-8 mb-sm-0">
          <h2 class="mb-5">香茅</h2>
          <p>
            再製香茅油
          </p>
          <p>
            天然驅蚊
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="6" order="5" order-sm="6" class="px-0 ">
        <v-img src="../assets/images/fig.png" v-scroll-reveal="{delay:3000}"/>
      </v-col>
      <v-col cols="12" sm="6" class="text" order="6" order-sm="5">
        <div class="text-md-h4 text-h5 text-center mt-8 mt-sm-0 mb-8 mb-sm-0">
          <h2 class="mb-5">無花果</h2>
          <p>
            古傳烘乾法
          </p>
          <p>
            製成無花果乾
          </p>
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
  .deliverycontent {
    margin-top: 5rem;
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
