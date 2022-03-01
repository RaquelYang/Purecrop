<template>
  <div id="cartcheck">
    <v-overlay :value="init">
    <div class="mask white d-flex justify-center align-center">
      <v-progress-circular
        :size="70"
        :width="7"
        indeterminate
        color="green"
      ></v-progress-circular>
    </div>
  </v-overlay>
    <v-container class="mt-8 mt-md-16">
      <v-row>
        <v-col></v-col>
        <v-col cols="12" md="11" lg="9">
          <h3 class="text-lg-h2 text-sm-h3 text-h4 light-green--text text--darken-1 font-weight-bold text-center text-sm-start">無疑農｜購物車</h3>
          <div class="nocart"
          v-if="user.cart === 0">
          <span>
            目前購物車沒有商品
          </span>
          </div>
          <!-- hidden-sm-and-down -->
          <v-simple-table v-if="user.cart !== 0"
          class="mt-10 grey lighten-4 px-3 py-3 hidden-sm-and-down"
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
                    <v-btn class="orange--text text--darken-4" text :ripple="false" plain @click="plus(product.product._id)"> + </v-btn>
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
          <v-simple-table v-if="user.cart !== 0"
          class="mt-10 grey lighten-4 px-3 py-3 hidden-md-and-up"
          >
            <thead>
              <tr>
                <th class="text-h4">購物車商品</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product._id">
                <td>
                  <v-row class="align-center justify-center">
                    <v-col cols="4">
                      <img :src="product.product.image" width="100px">
                    </v-col>
                    <v-col cols="5">
                      <p class="text-h6 text-start ellipsis">{{product.product.name}}</p>
                  <p class="text-subtitle-1 text-start">$&nbsp;{{ new Intl.NumberFormat('en-IN').format(product.product.price) }}</p>
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
                    <v-btn class="orange--text text--darken-4" text :ripple="false" plain @click="plus(product.product._id)"> + </v-btn>
                  </template>
                  <template slot="prepend-inner">
                    <v-btn text :ripple="false" plain @click="menos(product.product._id)"> - </v-btn>
                  </template>
                  </v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-icon class="orange--text text--darken-4" @click="plus(product.product._id,0)">
                    mdi-trash-can-outline
                      </v-icon>
                    </v-col>
                  </v-row>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
          <v-simple-table class="grey lighten-4 px-3 py-3" v-if="user.cart !== 0">
            <tbody>
              <tr>
                <td colspan="6">
                  <div class="d-flex align-center justify-end pe-5">
                    <p class="pr-2 text-subtitle-1">總金額 ：</p>
                    <p class="text-h4 orange--text text--darken-4 ">{{ new Intl.NumberFormat('en-IN').format(total) }}</p>
                    <p class="text-subtitle-1">元</p>
                  </div>
                </td>
              </tr>
              <tr >
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
@import "@/scss/variable.scss";
@import "@/scss/mixins/rwd.scss";
#cartcheck{
  .mask{
    width: 100vw;
    height: 100vh;
    text-align: center;
  }
  .ellipsis{
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }
  .nocart{
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
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
  }
  .v-text-field__details,.v-messages{
    min-height: 0px;
  }
  .v-input__slot{
    margin: 0;
  }
  .v-input__prepend-inner,.v-input__append-inner{
    padding: 0px;
  }
  .v-input__control{
    margin: auto;
  }
}
@include sm{
  #cartcheck{
    .nocart{
      font-size: 3rem;
    }
  }
}
@include md{
  #cartcheck{
    .nocart{
      font-size: 5rem;
    }
  }
}

</style>

<script>
export default {
  data () {
    return {
      products: [],
      init: true,
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
      this.init = false
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
      try {
        if (quantity !== 0) {
          this.products[this.idx].quantity++
          await this.api.patch('/users/me/cart',
            { product: this.products[this.idx].product._id, quantity: this.products[this.idx].quantity },
            {
              headers: {
                authorization: 'Bearer ' + this.user.token
              }
            }
          )
        } else if (quantity === 0) {
          await this.api.patch('/users/me/cart',
            { product: this.products[this.idx].product._id, quantity },
            {
              headers: {
                authorization: 'Bearer ' + this.user.token
              }
            }
          )
        }
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
    },
    cart () {
      return this.user.cart
    }
  },
  watch: {
    async cart () {
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
    }
  }
}
</script>
