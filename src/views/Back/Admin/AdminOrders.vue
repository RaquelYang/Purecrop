
<template>
<div id="AdminOrders">
  <h2 class="pt-5 pb-3 text-center">商品管理123</h2>
  <v-container>
    <v-row>
      <v-col cols="10" class="px-0 mx-auto">
        <template>
          <v-data-table
            :headers="headers"
            :items="orders"
            :expanded.sync="expanded"
            item-key="_id"
            show-expand
            class="elevation-1"
          >
            <template v-slot:item.orders="{ item }">
              <td>
                {{item._id}}
              </td>
            </template>
            <template v-slot:item.user="{ item }">
              <td class="text-center">
                {{item.user.email}}
              </td>
            </template>
            <template v-slot:item.time>
              <td class="text-center">
                {{formatTime}}
              </td>
            </template>
            <template v-slot:item.total="{ item }">
              <td class="text-center">
                $&nbsp;{{ new Intl.NumberFormat('en-IN').format(item.total) }}
              </td>
            </template>
            <template v-slot:item.products="{ item }">
              <td>
                <ul>
                  <li v-for="product in item.products" :key="product._id">{{product.product.name}} x {{product.quantity}} 個</li>
                </ul>
              </td>
            </template>
            <template v-slot:item.action>
              <v-select
                :items="state"
                item-key="item._id"
                dense
              ></v-select>
            </template>
            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length">
                More info about {{ item.name }}
              </td>
            </template>
          </v-data-table>
        </template>
      </v-col>
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
      select: ['待發貨'],
      state: ['待發貨', '待收貨', '已出貨', '已結單'],
      expanded: [],
      orders: [],
      headers: [
        { text: '訂單單號', align: 'start', value: 'orders', width: '20%' },
        { text: '使用者帳號', value: 'user', align: 'center', sortable: false, width: '15%' },
        { text: '已成立時間', value: 'time', align: 'center', sortable: false, width: '15%' },
        { text: '總金額', value: 'total', align: 'center', width: '20%' },
        { text: '商品', value: 'products', align: 'center', width: '15%' },
        { text: '狀態', value: 'action', align: 'center', width: '15%', sortable: false }
      ]
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/orders/all', {
        headers: {
          authorization: 'Bearer ' + this.admin.token
        }
      })
      this.orders = data.result.map((order) => {
        console.log(order)
        order.total = order.products.reduce((accu, curr) => {
          return accu + curr.quantity * curr.product.price
        }, 0)
        return order
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得訂單資料失敗'
      })
    }
  },
  computed: {
    formatTime () {
      return this.$date.formatDistanceToNow(new Date('2022-02-15T01:48:18.518Z'), {
        locale: this.$date.locales.zhTW,
        addSuffix: true
      })
    }
  }
}
</script>
