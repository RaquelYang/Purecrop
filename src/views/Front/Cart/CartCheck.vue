<template>
  <div id="cartcheck">
    <v-container class="mt-8 mt-md-16">
      <v-row>
        <v-col></v-col>
        <v-col cols="12" md="9">
          <h3 class="text-h3">無疑農｜購物車</h3>
          <div class="d-flex flex-row flex-nowrap justify-center my-15 text-h3 grey lighten-2 py-10"
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
                <th class=" text-h5" ></th>
                <th class=" text-start text-h5">品名</th>
                <th class=" text-h5" width="10%"></th>
                <th class="text-h5" width="10%">單價</th>
                <th class=" text-h5" width="15%">數量</th>
                <th class="text-h5" width="15%">總計</th>
                <th class=" text-h5" width="10%">操作</th>
              </tr>
            </thead>
            <tbody v-for="product in products" :key="product._id">
              <tr>
                <td>
                  <v-checkbox :ripple="false"></v-checkbox>
                </td>
                <td class="text-start">
                  <span class="text-h6">{{product.product.name}}</span>
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
          <div class="d-flex flex-row flex-nowrap justify-end mt-5 grey lighten-4 px-3 py-3">
            <span>總金額 ： {{ new Intl.NumberFormat('en-IN').format(total) }}</span>
          </div>
          <div class="d-flex flex-row flex-nowrap justify-space-between mt-5 grey lighten-4 px-3 py-3"
            v-if="user.cart !== 0">
            <v-checkbox :ripple="false" label="全選"></v-checkbox>
            <v-btn :ripple="false" text large class="primary" to="/cart/cartcheckout"
            @click="checkout"
            >去買單</v-btn>
          </div>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
#cartcheck{
  tr,td,th{
    padding: 0.6rem 0;
    text-align: center;
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
        text: '取得購物車資料'
      })
    }
  },
  methods: {
    async plus (id, quantity) {
      this.idx = this.products.findIndex(product => product.product._id === id)
      this.products[this.idx].quantity++
      try {
        await this.api.patch('/users/me/cart',
          { product: this.products[this.idx].product._id, quantity },
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
        console.log(error)
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
