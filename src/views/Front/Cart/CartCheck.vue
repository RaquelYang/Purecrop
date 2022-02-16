<template>
  <div id="cartcheck">
    <v-container class="mt-8 mt-md-16">
      <v-row>
        <v-col></v-col>
        <v-col cols="12" md="9">
          <h3 class="text-h3">無疑農｜購物車</h3>
          <div class="nocart"
          v-if="user.cart === 0">
          <span>
            目前購物車沒有商品
          </span>
          </div>
          <v-simple-table v-if="user.cart !== 0"
          class="mt-10 grey lighten-4 px-3 py-3"
          >
            <thead>
              <tr>
                <th class=" text-start text-h5 ps-8">品名</th>
                <th class=" text-h5" width="15%">商品</th>
                <th class="text-h5" width="15%">單價</th>
                <th class=" text-h5" width="15%">數量</th>
                <th class="text-h5" width="15%">總計</th>
                <th class=" text-h5" width="10%">操作</th>
              </tr>
            </thead>
            <tbody v-for="product in products" :key="product._id">
              <tr>
                <td class="text-start">
                  <span class="text-h6 ps-8">{{product.product.name}}</span>
                </td>
                <td>
                  <img :src="product.product.image" width="80px">
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
                  <template slot="append">
                    <v-btn text :ripple="false" plain @click="plus(product.product._id)"> + </v-btn>
                  </template>
                  <template slot="prepend-inner">
                    <v-btn text :ripple="false" plain @click="menos(product.product._id)"> - </v-btn>
                  </template>
                  </v-text-field>
                </td>
                <td>$&nbsp;{{ new Intl.NumberFormat('en-IN').format(product.product.price * product.quantity) }}</td>
                <td>
                  <v-icon class="orange--text text--darken-4" @click="plus(product.product._id,0)">
                    mdi-trash-can-outline
                  </v-icon>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
          <v-simple-table class="grey lighten-4 px-3 py-3">
            <tbody>
              <tr v-if="!user.cart !== 0">
                <td colspan="6">
                  <div class="d-flex align-center justify-end pe-5">
                    <p class="pr-2 text-subtitle-1">總金額 ：</p>
                    <p class="text-h4 orange--text text--darken-4 pr-2">{{ new Intl.NumberFormat('en-IN').format(total) }}</p>
                    <p class="text-subtitle-1">元</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="6" >
                  <div class="d-flex justify-end py-5 pe-5">
                    <v-btn :ripple="false" text large
                      class="primary" to="/cart/cartcheckout">
                      <span class="text-h5 px-3">去買單</span>
                    </v-btn>
                  </div>
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
#cartcheck{
  .nocart{
    height: 50vh;
    display: flex;
    justify-content: center;
    font-size: 5rem;
    margin-top: 10rem;
  }
  tr,td,th{
    padding: 0.6rem 0;
    text-align: center;
    vertical-align: center;
  }
  tr:hover{
    background-color: transparent !important;
  }
  .v-input--selection-controls{
    margin: 0;
    padding: 0;
  }
  button{
    font-size: 2rem;
    min-width: auto;
    padding: 0 8px;
    border-radius: 0px;
  }
  .v-text-field input{
    text-align: center;
  }
  .v-text-field__details{
    margin: 0;
  }
  .v-text-field__slot{
    padding: 2px 0;
    border-top:1px solid green;
    border-bottom:1px solid green;
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
  .v-input__control{
    margin: auto;
  }
}
</style>

<script>
export default {
  data () {
    return {
      products: [],
      idx: -1
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
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得購物車資料失敗'
      })
    }
  },
  methods: {
    async plus (id, quantity) {
      this.idx = this.products.findIndex(product => product.product._id === id)
      this.products[this.idx].quantity++
      try {
        await this.api.patch('/users/me/cart',
          { product: this.products[this.idx].product._id, quantity: this.products[this.idx].quantity },
          {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          }
        )
        if (quantity === 0) {
          this.products.splice(this.idx, 1)
          this.$store.commit('user/updateCart', this.user.cart - 1)
          this.$swal({
            icon: 'success',
            title: '成功',
            text: '刪除商品成功'
          })
        }
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '修改購物車失敗'
        })
      }
    },
    async menos (id) {
      this.idx = this.products.findIndex(product => product.product._id === id)
      if (this.products[this.idx].quantity <= 1) {
        return
      }
      this.products[this.idx].quantity--
      try {
        await this.api.patch('/users/me/cart',
          { product: this.products[this.idx].product._id, quantity: this.products[this.idx].quantity },
          {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          }
        )
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '修改購物車失敗'
        })
      }
    }
  },
  computed: {
    total () {
      return this.products.reduce((accu, curr) => {
        return accu + curr.quantity * curr.product.price
      }, 0)
    }
  }
}
</script>
