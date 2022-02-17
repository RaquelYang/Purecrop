<template>
<div id="orders">
  <v-container class="mt-8 mt-md-16">
    <v-row>
      <v-col></v-col>
      <v-col cols="12" md="9">
        <h3 class="text-h3">無疑農｜訂單</h3>
        <v-simple-table class="mt-10 grey lighten-4 px-3 py-3">
          <thead>
            <tr>
              <th colspan="6">
                <p class="text-start text-h6">訂單商品</p>
                </th>
            </tr>
            <tr>
              <th class=" text-start px-5 text-h5">單號</th>
              <th class=" text-h5">日期</th>
              <th class="text-h5">商品</th>
            </tr>
          </thead>
          <tbody v-for="order in orders" :key="order._id">
            <tr>
              <td class="text-start px-5">
                <span class="text-h6">{{order._id}}</span>
              </td>
              <td>
                {{new Date(order.date).toLocaleString('zh-TW')}}
              </td>
              <td>
                <ul>
                  <li v-for="product in order.products" :key="product._id">
                  {{product.product.name}} * {{product.quantity}}
                  </li>
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
#orders{
  tr,td,th{
    padding: 1rem;
    text-align: center;
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
}
</style>
<script>
export default {
  data () {
    return {
      orders: [],
      products: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/orders/me/', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.orders = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得訂單資料失敗'
      })
    }
  }

}
</script>
