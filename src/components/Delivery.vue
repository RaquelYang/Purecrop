<template>
  <div id="delivery">
    <h3
      class="text-center text-lg-h2 text-md-h3 text-h3 light-green--text text--darken-1 font-weight-bold bottomline"
    >
      新鮮直送
    </h3>
    <p class="text-center mt-6 mt-lg-10">
      當季蔬果 <span class="font-weight-bold">x</span> 小農新鮮直送
      <span class="font-weight-bold">x</span> 友善土地植栽
    </p>
    <v-row class="deliverycontent">
      <v-col cols="6">
        <img src="../assets/images/anisa-wulan-asri-dSb8R7QAeLM-unsplash.jpg" />
      </v-col>
      <v-col cols="6" class="text">
        <div class="text-h4 text-center">
          <p>
            雲林在地芭樂
          </p>
          <p>
            當季新鮮蔬果
          </p>
          <p>
            新鮮芭樂再製成芭樂乾
          </p>
        </div>
      </v-col>
      <v-col cols="6" order="2">
        <img src="../assets/images/john-cameron-vtP7PpYlzzQ-unsplash.jpg" />
      </v-col>
      <v-col cols="6" class="text" order="1">
        <div class="text-h4 text-center">
          <p>
            使用古傳天然烘乾法
          </p>
          <p>
            將無花果曬成乾
          </p>
        </div>
      </v-col>
      <v-col cols="6" order="3">
        <img src="../assets/images/chuttersnap-rX0nFrnSikU-unsplash.jpg" />
      </v-col>
      <v-col cols="6" class="text" order="4">
        <div>
          <p class="text-h4 text-center">
            天然香茅再製香茅油
          </p>
          <p>
            天然驅蚊無負擔
          </p>
        </div>
      </v-col>
      <v-col cols="6" order="6">
        <img src="../assets/images/harvest_veg.jpg" />
      </v-col>
      <v-col cols="6" class="text" order="5">
        <div>
          <p class="text-h4 text-center">
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
    .col:not(:first-child):not(:nth-child(2)){
      margin-top: 10rem;
    }
    img {
      width: 100%;
      height: 600px;
      object-fit: cover;
    }
  }
  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@include md {
  #delivery {
    .deliverycontent {
      margin-top: 6rem;
    }
  }
}
</style>
