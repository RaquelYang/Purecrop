<template>
  <div id="brand">
    <v-container>
      <h3 class="text-center text-lg-h2 text-md-h3 text-h3 light-green--text text--darken-1 font-weight-bold bottomline">品牌故事</h3>
      <p class="text-center mt-6 mt-lg-10">雲林土地 x 小農產品</p>
      <v-row class="mt-10">
        <v-col></v-col>
        <v-col cols="12" md="9">
          <p  class="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis dolor voluptas nobis a voluptatem, ex autem architecto quisquam necessitatibus?</p>
          <v-timeline class="mt-10">
            <v-timeline-item class="pt-16 pb-16">
              <v-img height="200px" position="top center" class="timelineimg"  src="../../assets/images/featured products.svg"></v-img>
              <h4 class="text-h4">2014</h4>
              <h4 class="text-h6">初期想法</h4>
              <p class="text-subtitle-1">
              timeline item Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae quis laboriosam, asperiores laborum quos aut quos obcaecati mollitia! Ad magnam laudantium, recusandae facere minima odit illum
              </p>
              </v-timeline-item>
              <v-timeline-item class="pt-16 pb-16 text-right">
                <v-img height="200px" position="top center" class="timelineimg1"  src="../../assets/images/featured products.svg"></v-img>
                <h4 class="text-h4">2014</h4>
                <h4 class="text-h4">初期想法</h4>
                <p class="text-subtitle-1">
                timeline item Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae quis laboriosam, asperiores laborum quos aut quos obcaecati mollitia! Ad magnam laudantium, recusandae facere minima odit illum
                </p>
              </v-timeline-item>
              <v-timeline-item class="pt-16 pb-16">
                <v-img height="200px" position="top center" class="timelineimg"  src="../../assets/images/featured products.svg"></v-img>
                <h4 class="text-h4">2014</h4>
              <h4 class="text-h4">初期想法</h4>
              <p class="text-subtitle-1">
              timeline item Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae quis laboriosam, asperiores laborum quos aut quos obcaecati mollitia! Ad magnam laudantium, recusandae facere minima odit illum
              </p>
              </v-timeline-item>
              <v-timeline-item class="pt-16 pb-16 text-right">
                <v-img height="200px" position="top center" class="timelineimg1"  src="../../assets/images/featured products.svg"></v-img>
                <h4 class="text-h4">2014</h4>
              <h4 class="text-h4">初期想法</h4>
              <p class="text-subtitle-1">
              timeline item Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae quis laboriosam, asperiores laborum quos aut quos obcaecati mollitia! Ad magnam laudantium, recusandae facere minima odit illum
              </p>
              </v-timeline-item>
          </v-timeline>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
    <div class="grey lighten-3 py-1 mt-16">
      <v-container class="mt-6 mt-lg-16">
        <h3 class="text-center text-lg-h2 text-md-h3 text-h3 light-green--text text--darken-1 font-weight-bold bottomline">小農位置</h3>
        <v-row class="mt-10">
          <v-col></v-col>
          <v-col cols="12" md="9">
            <v-row class="mt-6 mt-lg-8">
              <v-col cols="8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2150.0057811743354!2d121.51074905638266!3d25.004726321623014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9dd00233449%3A0x8bb4e2df9d91f723!2z6Ieq55Sx5rqr5a6kIExpYmVyYm94IENvZmZlZQ!5e0!3m2!1szh-TW!2stw!4v1643270427691!5m2!1szh-TW!2stw" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
              </v-col>
              <v-col cols="4">
                <p>交通工具</p>
                <p>汽車</p>
                <p>國道3號南下至雲林出口後右轉三民路約開10公里</p>
                <p>大眾交通工具</p>
                <p>高鐵</p>
                <p>搭至雲林高鐵站後轉搭快速公路212號至田寮二路下車</p>
                <p>台鐵</p>
                <p>台鐵前站搭綠55至田寮仔路下車</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<style lang="scss">
#brand{
  margin-top: 8rem;
  .v-timeline-item{
    position: relative;
  }
  .timelineimg{
    position: absolute;
    height: 300px !important;
    width: 100%;
    left: -120%;
    top:-20%
  }
  .timelineimg1{
    position: absolute;
    height: 300px !important;
    width: 100%;
    left: 120%;
    top:-20%
  }
}
</style>
