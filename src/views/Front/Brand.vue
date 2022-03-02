<template>
  <div id="brand">
    <v-container>
      <h3 class="text-center text-lg-h2 text-md-h3 text-h3 light-green--text text--darken-1 font-weight-bold bottomline">品牌故事</h3>
      <p class="text-center mt-6 mt-lg-10">
      當季蔬果 <span class="font-weight-bold">x</span> 新鮮直送
    </p>
      <v-row class="brandtext">
        <v-col></v-col>
        <v-col cols="12" md="11" lg="9">
          <v-col md="9" class="mx-auto text-h6">
            <p  class="text-center font-weight-light">一個在台北生活30年的年輕人，看見自己的爺爺一生守護的農園，因為水果盛產季節導致削價競爭的農作，決定用自己的的所長將家鄉的水果進行網路上銷售，避免削價競爭並友善土地種植</p>
          </v-col>
        <div class="timeline hidden-sm-and-down">
          <v-timeline>
            <v-timeline-item fill-dot>
              <div class="svg timelineimg"  v-scroll-reveal="{delay:250}"></div>
              <h4 class="text-h4 grey--text text--darken-1">2019</h4>
              <h4 class="text-h4">初期想法</h4>
              <p class="text-subtitle-1">
              精選小農自家的各種產品，在網路平台中銷售，將小農經營理念，透過銷售網站重建品牌形象包裝，述說農作的豐富性、話題性、獨特性和差異性
              </p>
              </v-timeline-item>
              <v-timeline-item fill-dot class=" text-right">

                <div class="svg1 timelineimg1"  v-scroll-reveal="{delay:250}"></div>
                <h4 class="text-h4 grey--text text--darken-1">2020</h4>
                <h4 class="text-h4">土地友善</h4>
                <p class="text-subtitle-1">
                採用友善土地的「生態農法」取代過去的慣行農法、永續土地環境，在耕種的過程中不用農藥、化學肥料，並且在種植的田地建立生態池與不耕作區域
                </p>
              </v-timeline-item>
              <v-timeline-item fill-dot>

                <div class="svg2 timelineimg"  v-scroll-reveal="{delay:250}"></div>
                <h4 class="text-h4 grey--text text--darken-1">2021</h4>
              <h4 class="text-h4">網上銷售</h4>
              <p class="text-subtitle-1">
              精選小農自家的各種產品，在網路平台中銷售，將小農經營理念，透過銷售網站重建品牌形象包裝，述說小農產品的豐富性、話題性、獨特性和差異性
              </p>
              </v-timeline-item>
              <v-timeline-item fill-dot class=" text-right">

                <div class="svg3 timelineimg1"  v-scroll-reveal="{delay:250}"></div>
                <h4 class="text-h4 grey--text text--darken-1">Now</h4>
              <h4 class="text-h4">內銷全台</h4>
              <p class="text-subtitle-1">
              使用網路平台可以將農產品內銷至全台，只要上網一指下訂想購買的產品，我們會盡快將產品送至您的指定的地點，讓所有人都可以享受健康、無農藥的農作
              </p>
              </v-timeline-item>
          </v-timeline>
        </div>
        <!-- 小板timeline -->
        <div class="timeline hidden-md-and-up mt-16">
          <v-container>
            <v-timeline
              dense
              clipped
            >
              <v-timeline-item
                fill-dot
                class="mb-16"
                color="light-green darken-1"
                large
              >
              <template v-slot:icon>
                  <span class="white--text">2019</span>
                </template>
                <v-row justify="space-between">
                  <v-col cols="12">
                    <h3 class="text-h4 font-weight-bold grey--text text--darken-2" >初期想法</h3>
                    <p>精選小農自家的各種產品，在網路平台中銷售，將小農經營理念，透過銷售網站重建品牌形象包裝，述說農作的豐富性、話題性、獨特性和差異性</p>
                    <div class="svg timelineimg" ></div>
                  </v-col>
                </v-row>
              </v-timeline-item>
              <v-timeline-item
                fill-dot
                class="mb-16"
                color="light-green darken-1"
                large
              >
              <template v-slot:icon>
                  <span class="white--text">2020</span>
                </template>
                <v-row justify="space-between">
                  <v-col cols="12">
                    <h3 class="text-h4 font-weight-bold grey--text text--darken-2">土地友善</h3>
                    <p>採用友善土地的「生態農法」取代過去的慣行農法、永續土地環境，在耕種的過程中不用農藥、化學肥料，並且在種植的田地建立生態池與不耕作區域</p>
                    <div class="svg1 timelineimg"></div>
                  </v-col>
                </v-row>
              </v-timeline-item>
              <v-timeline-item
                fill-dot
                class="mb-16"
                color="light-green darken-1"
                large
              >
              <template v-slot:icon>
                  <span class="white--text">2021</span>
                </template>
                <v-row justify="space-between">
                  <v-col cols="12">
                    <h3 class="text-h4 font-weight-bold grey--text text--darken-2">網上銷售</h3>
                    <p>精選小農自家的各種產品，在網路平台中銷售，將小農經營理念，透過銷售網站重建品牌形象包裝，述說小農產品的豐富性、話題性、獨特性和差異性</p>
                    <div class="svg2 timelineimg"></div>
                  </v-col>
                </v-row>
              </v-timeline-item>
              <v-timeline-item
                fill-dot
                class="mb-16"
                color="light-green darken-1"
                large
              >
              <template v-slot:icon>
                  <span class="white--text">Now</span>
                </template>
                <v-row justify="space-between">
                  <v-col cols="12">
                    <h3 class="text-h4 font-weight-bold grey--text text--darken-2">內銷全台</h3>
                    <p>使用網路平台可以將農產品內銷至全台，只要上網一指下訂想購買的產品，我們會盡快將產品送至您的指定的地點，讓所有人都可以享受健康、無農藥的農作</p>
                    <div class="svg3 timelineimg"></div>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
          </v-container>
        </div>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
    <div class="grey lighten-3 position">
      <v-container class="mt-6 mt-lg-16">
        <h3 class="text-center text-lg-h2 text-md-h3 text-h3 light-green--text text--darken-1 font-weight-bold bottomline mt-8 mt-sm-16">小農位置</h3>
        <v-row class="mt-2 mt-sm-10">
          <v-col></v-col>
          <v-col cols="12" md="11" lg="9">
            <v-row class="mt-6 mt-lg-8 mb-16">
              <v-col  cols="12" xl="6" class="px-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4920.7473390397145!2d120.49337940003704!3d23.73016624863632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346eba2773c7f341%3A0x7ae4c47c03d12a95!2z6Zuy5p6X57ij!5e0!3m2!1szh-TW!2stw!4v1646052257577!5m2!1szh-TW!2stw" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
              </v-col>
              <v-col cols="12" xl="6" class="px-6">
                <h3 class="text-h3 text-sm-h2 font-weight-bold grey--text text--darken-3 mt-4 mt-sm-0 mt-md-10">交通方式</h3>
                <h5 class="text-h4 font-weight-medium pt-5 mt-0 mt-sm-16">汽車</h5>
                <p class="text-sm-subtitle-1 text-h6">國道3號南下至雲林出口後右轉三民路約開10公里</p>
                <h5 class=" mt-5 mt-sm-0 text-h4 font-weight-medium">高鐵</h5>
                <p class="text-sm-subtitle-1 text-h6">搭至雲林高鐵站後轉搭快速公路212號至田寮二路下車</p>
                <h5 class=" mt-5 mt-sm-0 text-h4 font-weight-medium">台鐵</h5>
                <p class="text-sm-subtitle-1 text-h6">搭置台鐵雲林站於台鐵前站搭綠55至田寮仔路下車</p>
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
@import "@/scss/variable.scss";
@import "@/scss/mixins/rwd.scss";
#brand{
  margin-top: 3rem;
  .brandtext{
    margin-top: 1rem;
  }
  .position{
    margin-top: 2rem
  };
  .svg,.svg1,.svg2,.svg3{
    width: auto;
    height: 400px;
  }
  .svg{
    background: url('../../assets/images/undraw_design_thinking_re_644h.svg') no-repeat center/contain;
  }
  .svg1{
    background: url('../../assets/images/undraw_environment_iaus.svg') no-repeat center/contain;
  }
  .svg2{
    background: url('../../assets/images/undraw_software_engineer_re_fyew.svg') no-repeat center/contain;
  }
  .svg3{
    background: url('../../assets/images/undraw_blooming_jtv6.svg') no-repeat center/contain;
  }
  .timelineimg{
    position: absolute;
    height: 240px !important;
    width: 100%;
    left: 0%;
    top: 110%;
  }
  .v-timeline-item{
    padding-bottom:15rem  !important ;
    position: relative;
  }
  .position p,.timeline p{
    padding-top: 1rem;
    font-size: 1.3rem !important;
    letter-spacing: .15rem !important;
    line-height: 2rem;
  }
}
@include sm {
  #brand{
  margin-top: 8rem;
  .brandtext{
    margin-top: 2rem;
  }
  .v-timeline-item{
    position: relative;
    padding: 1rem 0 !important;
  }
  .timelineimg{
    top: 120%;
  }
  .timelineimg1{
    position: absolute;
    height: 400px !important;
    width: 100%;
    left: 100%;
    top:0%
  }
  .timeline{
    margin-top: 8rem;
  }
  .position{
    margin-top: 2rem
  }
  .v-timeline-item{
    padding:2rem 0 15rem 0 !important ;
  }
}
}
@include md {
  #brand{
  .v-timeline-item{
    padding: 8rem 0 !important;
  }
  .timelineimg{
    height: 400px !important;
    left: -130%;
    top:-30%
  }
  .timelineimg1{
    left: 130%;
    top:-40%
  }
  .timeline{
    margin-top: 15rem;
  }
  .position{
    margin-top: 5rem
  };
}
}

@include lg {
  #brand{
  .timelineimg{
      left: -130%;
      top:-40%
    }
    .timelineimg1{
      left: 130%;
      top:-40%
    }
    .position{
      margin-top: 15rem
    };
  }
}
@include xl {
 #brand{
  .timelineimg{
      left: -120%;
      top:-60%
    }
    .timelineimg1{
      left: 110%;
      top:-80%
    }
    .position{
      margin-top: 15rem
    };
  }
}
</style>
