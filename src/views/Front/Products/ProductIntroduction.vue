<template>
<div id="ProductIntroductiom">
  <v-overlay :value="!sell">
    <div class="mask black">
      <p class="text-h1">產品已下架</p>
    </div>
  </v-overlay>
  <v-container class="mt-8 mt-md-16">
  <!-- part1 -->
    <v-row >
      <v-col></v-col>
      <v-col cols="12" md="11">
        <v-row>
          <!-- left -->
          <v-col cols="12" sm="6" md="5" class="grey lighten-3">
            <v-img :src="this.image"></v-img>
          </v-col>
          <!-- right -->
          <v-col cols="12" sm="6" md="7" class="grey lighten-3">
            <div class="txt">
              <h3 class="py-5 text-h3 font-weight-bold">{{name}}</h3>
              <p class="text-h4 deep-orange--text text--darken-2 font-weight-bold py-15">
                $&nbsp;{{ new Intl.NumberFormat('en-IN').format(price) }}
              </p>
              <v-simple-table class="grey lighten-3 top" >
                <tbody class="lighten-4">
                  <tr>
                    <td class="text-subtitle-1 text-sm-h6" width="25%">運送</td>
                    <td class="text-subtitle-1 text-sm-h6 text-end">
                      備貨時間約 3 - 5 天
                    </td>
                    <td class="hidden-lg-and-down" width="50%"></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td class="text-h6 text-end">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <span >$60</span>
                          <v-icon
                            large
                            color="grey"
                            dark
                            v-bind="attrs"
                            v-on="on"
                          >
                            mdi-chevron-down
                          </v-icon>
                        </template>
                        <div class="tooltiptext pt-4">
                          <div class="d-flex justify-space-between">
                            <p>貨運</p>
                            <p>$60</p>
                          </div>
                          <p>預計到貨時間 2/5 - 2/7</p>
                        </div>
                      </v-tooltip>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-subtitle-1 text-sm-h6">數量</td>
                    <td class="text-subtitle-1 text-sm-h6 quantity">
                      <v-text-field

                        background-color="transparent"
                        hide-spin-buttons
                        readonly
                        flat
                        solo
                        min="1"
                        type="number"
                        value="quantity"
                        v-model.number="quantity"
                        :state="quantityState"
                      >
                      <template slot="append">
                        <v-btn text :ripple="false" plain @click="plus"> + </v-btn>
                      </template>
                      <template slot="prepend-inner">
                        <v-btn text :ripple="false" plain @click="menos"> - </v-btn>
                      </template>
                      </v-text-field>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
              <div class="d-flex">
                <v-btn text :ripple='false' large width="30%" class=" my-10 text-subtitle-1  text-md-h5 mr-10 addcart"
                  @click="addCart"
                  >加入購物車</v-btn>
                  <v-btn text :ripple='false' large width="30%"
                  class="light-green white--text my-10 text-subtitle-1  text-md-h5 buynow"
                  @click="buyNow"
                  >立即購買</v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col></v-col>
    </v-row>
    <!-- bottom -->
    <v-row>
      <v-col></v-col>
      <v-col cols="12" md="11" class="px-0 py-0" >
        <v-simple-table class="grey lighten-3">
          <thead>
            <tr>
              <th colspan="2" class="text-h4 py-8">商品規格</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td class="text-subtitle-1 text-sm-h6" width="20%">產地</td>
              <td class="text-subtitle-1 text-sm-h6" width="50%">{{spec.origin}}</td>
              <!-- <td>台灣</td> -->
            </tr>
            <tr>
              <td class="text-subtitle-1 text-sm-h6">食物種類</td>
              <td class="text-subtitle-1 text-sm-h6">{{spec.type}}</td>
              <!-- <td>季節性</td> -->
            </tr>
            <tr>
              <td class="text-subtitle-1 text-sm-h6">內容物/成分</td>
              <td class="text-subtitle-1 text-sm-h6">{{spec.content}}</td>
              <!-- <td>新鮮芭樂、砂糖、檸檬酸、鹽</td> -->
            </tr>
            <tr>
              <td class="text-subtitle-1 text-sm-h6">出貨地</td>
              <td class="text-subtitle-1 text-sm-h6">{{spec.from}}</td>
              <!-- <td>雲林二頭香</td> -->
            </tr>
          </tbody>
        </v-simple-table>
        <v-simple-table class="py-5 grey lighten-3">
          <thead>
            <tr>
              <th colspan="2" class="text-h4 py-8">商品詳情</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p class="text-subtitle-1 text-sm-h6" v-html="descriptionProduct"></p>
                <!-- <p>選用在地新水果，再經由低溫烘乾而成</p>
                <p>果乾天然 美味 無添加</p>
                <p>產品通過SGS檢驗，無添加防腐劑、糖精、色素</p>
                <p>老少咸宜，越吃越涮嘴</p>
                <p>包裝風格簡約時尚，送禮自用兩相宜</p>
                <ul>
                  <li>挑選台南在地新鮮芭樂</li>
                  <li>採用低溫烘乾製作而成</li>
                  <li>＠商品描述</li> -->
                  <!-- <li>
                    因此特地挑選出品質好的芭樂來製作果乾（非低級加工品），讓顧客彷彿吃得到新鮮芭樂的味道，
                  產品並通過SGS認證，保證無添加防腐劑、色素、糖精。
                  </li>
                  <li>＠商品規格</li>
                  <li>品名：台南芭樂乾
                  淨重：150/ 300/ 600g
                  成分：新鮮芭樂、砂糖、檸檬酸、鹽
                  現貨有效期限：2022/ 7/ 15</li>
                </ul> -->
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>

</div>
</template>
<style lang="scss">
@import "@/scss/variable.scss";
@import "@/scss/mixins/rwd.scss";
#ProductIntroductiom{
  .quantity .v-input{
    max-width: 100% !important;
  }
  .mask{
    width: 100vw;
    height: 100vh;
    text-align: center;
  }
  .v-data-table{
    border-radius: 0px;
  }
  th,td{
    border:none
  }
  tr{
    padding-top: 1rem;
    height: 5rem;
  }
  .addcart{
    border:1px solid #558B2F
  }
  .v-input--selection-controls{
    margin: 0;
    padding: 0;
  }
  button{
    font-size: 2rem;
  }
  .v-text-field__details{
    margin: 0;
  }
  .v-text-field__details,.v-messages{
    min-height: 0px;
  }
  .v-input__slot{
    margin: 0;
  }
  .v-input__prepend-inner,.v-input__append-inner{
    padding: 0px;
    border:1px solid #616161;
  }
  .v-text-field__slot{
    padding: 2px 0;
    border-top:1px solid #616161;
    border-bottom:1px solid #616161;
  }
  .v-input__control{
    margin: auto;
  }
  .v-text-field input{
    text-align: center;
  }
}
@include sm{
  #ProductIntroductiom{
    .quantity .v-input{
    max-width: 90% !important;
    }
    .addcart{
      border:2px solid #558B2F
    }
    .v-text-field__slot,.v-input__prepend-inner,.v-input__append-inner{
      border:none
    }
  }
}
@include md{
  #ProductIntroductiom{
    .quantity .v-input{
    max-width: 300px !important;
    }
    .v-input__prepend-inner,.v-input__append-inner{
    padding: 0px;
    border:1px solid #616161;
    }
  .v-text-field__slot{
    padding: 2px 0;
    border-top:1px solid #616161;
    border-bottom:1px solid #616161;
    }
  }
}
</style>
<script>
export default {
  data () {
    return {
      name: '',
      price: 0,
      description: '',
      image: '',
      sell: '',
      spec: {
        origin: '',
        from: '',
        type: '',
        content: ''
      },
      quantity: 1
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products/' + this.$route.params.id)
      this.name = data.result.name
      this.price = data.result.price
      this.description = data.result.description
      this.image = data.result.image
      this.sell = data.result.sell
      this.spec = {
        origin: data.result.spec.origin,
        from: data.result.spec.from,
        type: data.result.spec.type,
        content: data.result.spec.content
      }
      document.title = ` 無疑農 | ${this.name}`
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品錯誤'
      })
    }
  },
  methods: {
    plus () {
      this.quantity++
    },
    menos () {
      if (this.quantity <= 1) {
        return
      }
      this.quantity--
    },
    addCart () {
      if (!this.user.isLogin) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '請先登入'
        })
        return
      }
      this.$store.dispatch('user/addCart', { product: this.$route.params.id, quantity: this.quantity })
    },
    buyNow () {
      if (!this.user.isLogin) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '請先登入'
        })
        return
      }
      this.$store.dispatch('user/addCart', { product: this.$route.params.id, quantity: this.quantity })
      this.$router.push('/cart')
    }
  },
  computed: {
    quantityState () {
      return this.quantity === 0 ? null : this.quantity > 0
    },
    descriptionProduct () {
      return this.description.replace(/\n/g, '<br /><br />')
    }
  }
}
</script>
