<template>
<div id="ProductIntroductiom">
  <v-overlay :value="!sell">
    <div class="mask black">
      <p class="text-h1">產品已下架</p>
    </div>
  </v-overlay>
  <v-container class="mt-8 mt-md-16">
  <!-- part1 -->
    <v-row class="mt-5">
      <v-col></v-col>
      <v-col cols="12" md="9">
        <v-row class="mt-5">
          <!-- left -->
          <v-col cols="12" md="5" class="grey lighten-3">
            <v-img :src="this.image"></v-img>
          </v-col>
          <!-- right -->
          <v-col cols="12" md="7" class="grey lighten-3">
            <div class="txt">
              <h3 class="text-h3 font-weight-bold">{{name}}</h3>
              <p class="text-h4 deep-orange--text text--darken-2 font-weight-bold py-4">
                $&nbsp;{{ new Intl.NumberFormat('en-IN').format(price) }}
              </p>
              <v-simple-table class="grey lighten-3">
                <tbody class="lighten-4">
                  <tr>
                    <td width="50%" class="text-h6">運送</td>
                    <td width="50%" class="text-h6">
                      備貨時間約 3 - 5 天
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td class="text-h6">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <span>$60</span>
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
                    <td class="text-h6">數量</td>
                    <td class="text-h6">
                      <v-text-field
                        background-color="transparent"
                        hide-spin-buttons
                        readonly
                        flat
                        solo
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
                <v-btn text :ripple='false' large width="30%" class=" my-10 text-h5 mr-10 addcart"
                  @click="addCart"
                  >加入購物車</v-btn>
                  <v-btn text :ripple='false' large width="30%"
                  class="light-green white--text my-10 text-h5 buynow"
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
    <v-row class="mt-4">
      <v-col></v-col>
      <v-col cols="12" md="9" class="px-0" >
        <v-simple-table class="grey lighten-3">
          <thead>
            <tr>
              <th class="text-h4 py-8">商品規格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="20%">產地</td>
              <td width="50%">{{spec.origin}}</td>
              <!-- <td>台灣</td> -->
            </tr>
            <tr>
              <td>食物種類</td>
              <td>{{spec.type}}</td>
              <!-- <td>季節性</td> -->
            </tr>
            <tr>
              <td>內容物/成分</td>
              <td>{{spec.content}}</td>
              <!-- <td>新鮮芭樂、砂糖、檸檬酸、鹽</td> -->
            </tr>
            <tr>
              <td>出貨地</td>
              <td>{{spec.from}}</td>
              <!-- <td>雲林二頭香</td> -->
            </tr>
          </tbody>
        </v-simple-table>
        <v-simple-table class="py-5 grey lighten-3">
          <thead>
            <tr>
              <th class="text-h4 py-8">商品詳情</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>{{description}}</p>
                <p>選用在地新水果，再經由低溫烘乾而成</p>
                <p>果乾天然 美味 無添加</p>
                <p>產品通過SGS檢驗，無添加防腐劑、糖精、色素</p>
                <p>老少咸宜，越吃越涮嘴</p>
                <p>包裝風格簡約時尚，送禮自用兩相宜</p>
                <ul>
                  <li>挑選台南在地新鮮芭樂</li>
                  <li>採用低溫烘乾製作而成</li>
                  <li>＠商品描述</li>
                  <li>
                    因此特地挑選出品質好的芭樂來製作果乾（非低級加工品），讓顧客彷彿吃得到新鮮芭樂的味道，
                  產品並通過SGS認證，保證無添加防腐劑、色素、糖精。
                  </li>
                  <li>＠商品規格</li>
                  <li>品名：台南芭樂乾
                  淨重：150/ 300/ 600g
                  成分：新鮮芭樂、砂糖、檸檬酸、鹽
                  現貨有效期限：2022/ 7/ 15</li>
                </ul>
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
#ProductIntroductiom{
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
  .addcart{
    border:2px solid #558B2F
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
    border:1px solid green;
  }
  .v-text-field__slot{
    padding: 2px 0;
    border-top:1px solid green;
    border-bottom:1px solid green;
  }
  .v-input__control{
    margin: auto;
  }
  .v-text-field input{
    text-align: center;
  }
}
</style>
<script>
// import SwiperProduct from '@/components/SwiperProduct.vue'
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
      document.title = `${this.name} | 購物網`
    } catch (error) {
      this.$router.push('/')
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
  components: {
    // SwiperProduct
  },
  computed: {
    quantityState () {
      return this.quantity === 0 ? null : this.quantity > 0
    }
  }
}
</script>
