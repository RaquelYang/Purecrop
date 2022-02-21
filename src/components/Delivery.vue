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
      <v-col cols="12" sm="6" class="px-0 imgline">
        <img src="../assets/images/anisa-wulan-asri-dSb8R7QAeLM-unsplash.jpg" />
      </v-col>

      <v-col cols="12" sm="6" class="text">
        <div class="text-md-h4 text-h5 text-center mt-8 mt-sm-0 mb-8 mb-sm-0">
          <p>
            雲林在地芭樂
          </p>
          <p>
            新鮮芭樂再製成芭樂乾
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="6" order="1" order-sm="2" class="px-0 imgline">
        <img src="../assets/images/john-cameron-vtP7PpYlzzQ-unsplash.jpg" />
      </v-col>
      <v-col cols="12" sm="6" class="text" order="2" order-sm="1">
        <div class="text-md-h4 text-h5 text-center mt-8 mt-sm-0 mb-8 mb-sm-0">
          <p>
            使用古傳天然烘乾法
          </p>
          <p>
            將無花果曬成乾
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="6" order="3" order-sm="3" class="px-0 imgline">
        <img src="../assets/images/chuttersnap-rX0nFrnSikU-unsplash.jpg" />
      </v-col>
      <v-col cols="12" sm="6" class="text" order="4" order-sm="4">
        <div class="text-md-h4 text-h5 text-center mt-8 mt-sm-0 mb-8 mb-sm-0">
          <p>
            天然香茅再製香茅油
          </p>
          <p>
            天然驅蚊無負擔
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="6" order="5" order-sm="6" class="px-0 imgline">
        <img src="../assets/images/harvest_veg.jpg" />
      </v-col>
      <v-col cols="12" sm="6" class="text" order="6" order-sm="5">
        <div class="text-md-h4 text-h5 text-center mt-8 mt-sm-0 mb-8 mb-sm-0">
          <p>
            當季野菜
          </p>
          <p>
            無農藥植栽ㄉ
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
  .imgline {
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 1px;
    display: block;
    border-bottom: 2px solid #33333333;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
}
}
@include sm {
  #delivery {
    .deliverycontent {
      margin-left: 0;
      margin-right: 0;
    }
    .imgline{
      &::before{
        display: none;
      }
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
