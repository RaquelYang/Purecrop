<template>
<div id="orders">
  <v-container class="mt-8 mt-md-16">
    <v-row>
      <v-col></v-col>
      <v-col cols="12" md="11" lg="9">
        <h3 class="text-lg-h2 text-sm-h3 text-h4 light-green--text text--darken-2 font-weight-bold text-center text-md-start">無疑農｜訂單</h3>
        <v-simple-table class="mt-10 grey lighten-4 px-3 py-3">
          <thead>
            <tr>
              <th colspan="6">
                <p class="text-center text-md-h3 text-h5">訂單商品</p>
                </th>
            </tr>
            <tr>
              <th class="text-subtitle-1 text-sm-h5" width="30%">日期</th>
              <th class="text-subtitle-1 text-sm-h5" width="50%">商品</th>
              <th class="text-subtitle-1 text-sm-h5" width="20%">狀態</th>
            </tr>
          </thead>
          <tbody  >
            <tr v-for="order in orders" :key="order._id">
              <td class="text-subtitle-2 text-sm-subtitle-1">
                {{new Date(order.date).toLocaleString('zh-TW')}}
              </td>
              <td>
                <v-row v-for="product in order.products" :key="product._id">
                  <v-col cols="6 py-0 px-0">
                    <img :src="product.product.image" class="productimg">
                  </v-col>
                  <v-col cols="6 py-0 px-0" class="text-start">
                    <p class="text-subtitle-1 text-sm-h6 mb-0">{{product.product.name}}</p>
                    <p class="text-body-2 text-sm-subtitle-1 mb-0">數量：{{product.quantity}}</p>
                  </v-col>
                </v-row>
                <!-- <v-list-item  v-for="product in order.products" :key="product._id">
                <v-img :src="product.product.image" width="20px"/>
                  <v-list-item-content >
                    <v-list-title class="text-subtitle-2 text-sm-subtitle-1">
                      {{product.product.name}} <span>x</span> {{product.quantity}} 個
                    </v-list-title>
                  </v-list-item-content>
                </v-list-item> -->
              </td>
              <td class="text-subtitle-1 text-sm-h6">{{order.state}}</td>
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
#orders{
  .productimg{
    width: 50px;
  }
  tr,td,th{
    padding: 1rem 0;
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
@include sm{
  #orders{
  .productimg{
    width: 100px;
    }
  }
  tr,td,th{
    padding: 1rem;
  }
}
</style>
<script>
export default {
  data () {
    return {
      orders: []

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
