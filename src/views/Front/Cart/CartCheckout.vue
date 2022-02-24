<template>
  <div id="cartcheckout">
    <v-container class="mt-8 mt-md-16">
      <v-row>
        <v-col></v-col>
        <v-col cols="12" md="9">
          <v-dialog v-model="dialog"
            width="600"
          >
          <v-card class="px-10 py-5">
            <v-card-title class="py-5 font-weight-bold text-h6 text-md-h4">
              輸入信用卡卡號
            </v-card-title>
            <vue-paycard :value-fields="valueFields" />
            <v-row>
              <v-cols cols="12"></v-cols>
              <v-cols cols="4"></v-cols>
              <v-cols cols="4"></v-cols>
              <v-cols cols="4"></v-cols>
            </v-row>
            <v-card-text class="pt-10 pb-0">
              <v-text-field
              label="請輸入卡號"
              hide-spin-buttons
              outlined
              type="number"
              v-model.number="valueFields.cardNumber"
            >
            </v-text-field>
            <v-text-field
              label="請輸入年"
              hide-spin-buttons
              outlined
              type="number"
              v-model.number="valueFields.cardYear"
            >
            </v-text-field>
            <v-text-field
              label="請輸入月"
              hide-spin-buttons
              outlined
              type="number"
              v-model.number="valueFields.cardMonth"
            >
            </v-text-field>
            <v-text-field
              label="請輸入安全碼"
              hide-spin-buttons
              outlined
              type="number"
              v-model.number="valueFields.cardCvv"
            >
            </v-text-field>
            </v-card-text>
            <v-card-actions class="py-0">
              <v-spacer></v-spacer>
              <v-btn
                class="text-h5 white--text px-5 mx-5 my-5"
                large
                color="red darken-1"
                @click="credit"
              >
                取消
              </v-btn>
              <v-btn
                class="text-h5 px-5 mx-5 my-5"
                large
                color="success darken-1"
                @click="credit"
              >
                送出
              </v-btn>
            </v-card-actions>
          </v-card>
          </v-dialog>
          <h3 class="text-lg-h2 text-md-h3 text-h3 light-green--text text--darken-2 font-weight-bold">無疑農｜結帳</h3>
          <v-simple-table class="mt-10 grey lighten-4 px-3 py-3">
            <thead>
              <tr>
                <th colspan="6">
                  <p class="text-start text-h6">訂單商品</p>
                  </th>
              </tr>
              <tr>
                <th class=" text-start px-5 text-h5">品名</th>
                <th class=" text-h5" width="10%">商品</th>
                <th class="text-h5" width="10%">單價</th>
                <th class=" text-h5" width="20%">數量</th>
                <th class="text-h5" width="15%">總計</th>
              </tr>
            </thead>
            <tbody v-for="product in products" :key="product._id">
              <tr>
                <td class="text-start px-5">
                  <span class="text-h6">{{product.product.name}}</span>
                </td>
                <td>
                  <img :src="product.product.image" height="80px">
                </td>
                <td>$&nbsp;{{ new Intl.NumberFormat('en-IN').format(product.product.price) }}</td>
                <td>
                  <v-text-field
                    background-color="transparent"
                    hide-spin-buttons
                    readonly
                    flat
                    solo
                    type="number"
                    value="product.quantity"
                    v-model.number="product.quantity"
                  >
                  </v-text-field>
                </td>
                <td>$&nbsp;{{ new Intl.NumberFormat('en-IN').format(product.product.price * product.quantity) }}</td>
              </tr>
            </tbody>
          </v-simple-table>
          <v-simple-table class="grey lighten-4 px-3 py-3">
            <tbody>
              <tr>
                <td colspan="2" class="text-start">
                  <form class=" align-center pt-3">
                    <label class="px-2 text-h5">留言：</label>
                    <v-textarea
                    class="message py-2 text-start"
                      outlined
                      placeholder="統一編號/警衛代收/電話聯絡時間..."
                      v-model="message"
                    ></v-textarea>
                  </form>
                </td>
                <td colspan="4" class="text-start text-subtitle-1">
                  <tr>
                    <td class="text-start ps-3 text-h5" width="30%">賣家資訊</td>
                    <td width="30%"></td>
                    <td class="text-end pe-3 text-h6" width="30%" >快遞：
                      <span class="text-h5 pr-2 orange--text text--darken-4">$ 60</span>
                      </td>
                  </tr>
                  <tr>
                    <td class="text-start ps-3 text-h5">賣家宅配</td>
                    <td>
                      <v-btn :ripple="false" plain text outlined @click="parentdialog=true"
                      :class="{payselect:addresscolor}"
                      >
                        ＋新增收件人地址
                      </v-btn>
                    </td>
                  </tr>
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <div class="d-flex align-center justify-end">
                    <span class="text-subtitle-1 pr-2 orderprice">訂單金額(<span>{{this.products.length}}</span>商品)：</span>
                    <span class="text-h4 pr-2 orange--text text--darken-4">{{ new Intl.NumberFormat('en-IN').format(total) }}</span>
                    <span class="text-subtitle-1">元</span>
                  </div>
                </td>
              </tr>
              <tr class="border">
                <td width="20%">付款方式</td>
                <td class="text-start">
                  <v-btn v-for="payselect in payselects" :key="payselect" :ripple="false"
                  plain text outlined
                  :class="{payselect:payselect===selected}" class="me-4"
                  @click="payselected(payselect)"
                  >
                  {{payselect}}
                  </v-btn>

                </td>
                <td></td>
              </tr>
              <tr v-if="selected === '信用卡/金融卡'" class="border">
                <td>選擇帳戶</td>
                <td class="text-start">
                  <v-btn  :ripple="false" plain text outlined @click="dialog=true">
                  ＋新增信用卡付款
                  </v-btn>
                </td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <v-row class="justify-center align-center">
                    <v-col class="text-subtitle-1">商品總金額</v-col>
                    <v-col class="text-end">
                      <span class="text-h6 pr-2 orange--text text--darken-4">
                        $&nbsp;{{ new Intl.NumberFormat('en-IN').format(total) }}
                      </span>
                    </v-col>
                  </v-row>
                  <v-row class="justify-center align-center">
                    <v-col class="text-subtitle-1">運費總金額</v-col>
                    <v-col class="text-end">
                      <span class="text-h6 pr-2 orange--text text--darken-4">
                        $&nbsp;60
                      </span>
                    </v-col>
                  </v-row>
                  <v-row class="justify-center align-center">
                    <v-col class="text-subtitle-1">總付款金額</v-col>
                    <v-col class="text-end">
                      <span class="text-h4 pr-2 orange--text text--darken-4">
                        $&nbsp;{{ new Intl.NumberFormat('en-IN').format(total+60) }}
                      </span>
                    </v-col>
                  </v-row>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td class="text-end pb-1">
                  <v-btn :ripple="false" plain text outlined large class="changebtn light-green  darken-2 white--text font-weight-bold text-h6"
                  @click="checkOut()">
                    下訂單
                  </v-btn>
                  <UserInfo :products='products' :parentdialog="parentdialog" @closedialog="parentdialog=false" @changetable='adddelivey'/>
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
#cartcheckout{
  tr,td,th{
    padding: 1rem;
    text-align: center;
    vertical-align: middle;
  }
  tr:hover{
    background-color: transparent !important;
  }
  .v-text-field.message input{
    text-align: left;
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
  .v-input--selection-controls{
    padding: 0;
    margin: 0;
  }
  .v-text-field input{
    text-align: center;
  }
  .v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover).changebtn .v-btn__content {
    opacity: 1;
  }
  .orderprice{
    letter-spacing: 1px !important;
  }
  .payselect{
    border:1px solid #7CB342;
    color:#33691E;
  }
  .border{
    td{
      border:none
    }
  }
}
</style>
<script>
import UserInfo from '@/components/UserInfo.vue'
export default {
  data () {
    return {
      valueFields: {
        cardName: '',
        cardNumber: '',
        cardMonth: '',
        cardYear: '',
        cardCvv: ''
      },
      dialog: false,
      parentdialog: false,
      products: [],
      selected: false,
      message: '',
      name: '',
      phone: null,
      address: '',
      pay: '',
      payselects: [
        '信用卡/金融卡',
        '貨到付款'
      ],
      addresscolor: false
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/users/me/cart', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.products = data.result
    } catch (error) {
      console.log(error)
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得購物車資料失敗'
      })
    }
  },
  methods: {
    async checkOut () {
      try {
        await this.api.post('/orders', { message: this.message, name: this.name, phone: this.phone, address: this.address, pay: this.pay }, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '結帳成功'
        })
        this.$store.dispatch('user/orderCart')
        this.$router.push('/orders')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '資料填寫未完全'
        })
      }
    },
    payselected (option) {
      this.selected = option
      this.pay = option
    },
    adddelivey (data) {
      this.name = data.name
      this.phone = data.phone
      this.address = data.address
      this.addresscolor = true
    },
    credit () {
      this.dialog = false
    }
  },
  computed: {
    total () {
      return this.products.reduce((accu, curr) => {
        return accu + curr.quantity * curr.product.price
      }, 0)
    }
  },
  components: { UserInfo }
}
</script>
