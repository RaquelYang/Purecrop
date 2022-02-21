<template>
<div id="footer" class="light-green darken-1">
  <v-container>
    <v-row class="mt-3">
      <v-col></v-col>
      <v-col cols="12" md="11" lg="9">
        <v-row>
          <v-col cols="12" sm="12" md="3" class="white--text">
            <h4 class="white--text text--darken-4 text-center text-md-h6 bottomline2">關於我們</h4>
            <ul class="list">
              <li>
                <v-list-item class="white--text" to="/brand" :ripple="false">
                  品牌故事
                </v-list-item>

              </li>
              <li>
                <v-list-item class="white--text" to="/privacyterm" :ripple="false">
                  隱私權政策
                </v-list-item>
              </li>
              <li>
                <v-list-item class="white--text" to="/termofservice" :ripple="false">
                  使用者條款
                </v-list-item>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" sm="12" md="3" class="white--text">
            <h4 class="white--text text--darken-4 text-center text-md-h6 bottomline2">顧客服務</h4>
            <ul class="list ">
              <li >
                <v-list-item class="white--text"  to="/comstomerfaq" :ripple="false">
                  常見問題
                </v-list-item>
              </li>
              <li>
                <v-list-item class="white--text" to="/shipping" :ripple="false">
                  運送服務方式
                </v-list-item>
              </li>
              <li>
                <v-list-item class="white--text" to="/payment" :ripple="false">
                  付款服務方式
                </v-list-item>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="white--text">
            <h4 class="white--text text--darken-4 text-center text-md-h6 bottomline2">聯絡我們</h4>
            <ul class="list contact ">
              <li>
                <v-list-item class="white--text">
                  聯絡地址：新北市新店區中和路110號
                </v-list-item>
              </li>
              <li>
                <v-list-item  class="white--text ">
                  聯絡電話：02-2485-5242
                </v-list-item>
              </li>
              <li>
                <v-list-item  class="white--text ">
                  電子郵件：lotrhmm@gmail.com
                </v-list-item>
              </li>
              <li>
                <v-list-item class="white--text ">
                  營業時間：10:00-18:00
                </v-list-item>
              </li>
              <li class="mt-2">
                <v-btn icon :ripple="false" plain class="mx-2 p-2">
                  <v-icon large  class="white--text" >
                    mdi-facebook
                  </v-icon>
                </v-btn>
                <v-btn icon :ripple="false" plain class="mx-2 p-2">
                  <v-icon large  class="white--text">
                    mdi-instagram
                  </v-icon>
                </v-btn>
                <v-btn icon :ripple="false" plain class="mx-2 p-2">
                  <v-icon large  class="white--text">
                    mdi-twitter
                  </v-icon>
                </v-btn>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
  <v-container class="mt-8">
    <p class="white--text text-center">&copy; {{this.date}} Raquel  泰山職訓作品集</p>
  </v-container>
</div>
</template>
<style lang="scss">
@import "@/scss/variable.scss";
@import "@/scss/mixins/rwd.scss";
#footer{
  margin-top: 5rem;
  .list{
    padding-top: 2rem;
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start:0;
    width: 100%;
    a{
      justify-content: center;
    }
  }
  .contact{
    text-align: center;
    .v-list-item{
    justify-content: center;
    }
  }
  .v-list-item--link:before{
    background-color: transparent;
  }
  .v-btn__content {
  opacity: 1 !important;
  }
}
@include md{
#footer{
  margin-top: 15rem;
    .contact{
      text-align: start;
      margin-left: 4.5rem;
      .v-list-item{
      justify-content: start;
      }
    }
  }
}
@include lg{
#footer{
    .contact{
      margin-left:5.5rem;
    }
  }
}
@include xl{
#footer{
    .contact{
      margin-left:11rem;
    }
  }
}

</style>
<script>
export default {
  data () {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>
