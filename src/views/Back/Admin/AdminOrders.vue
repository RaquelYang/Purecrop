
<template>
<div id="AdminOrders">
  <h2 class="py-10 text-center text-h2 font-weight-medium">訂單管理</h2>
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
            multi-sort
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
            <template v-slot:item.time="{item}">
              <td class="text-center">
                {{formatTime(item)}}
              </td>
            </template>
            <template v-slot:item.total="{ item }">
              <td class="text-center">
                $&nbsp;{{ new Intl.NumberFormat('en-IN').format(item.total) }}
              </td>
            </template>
            <template v-slot:item.products="{ item }">
              <td class="me-10">
                <v-list-item  v-for="product in item.products" :key="product._id">
                  <v-list-item-content >
                    <v-list-title>
                      {{product.product.name}} <span>x</span> {{product.quantity}} 個
                    </v-list-title>
                  </v-list-item-content>
                </v-list-item>
                <!-- <ul>
                  <li v-for="product in item.products" :key="product._id">
                    {{product.product.name}} x {{product.quantity}} 個</li>
                </ul> -->
              </td>
            </template>
            <template v-slot:item.action="{item}">
              <v-select
                :items="state"
                @change="statechange(item._id)"
                v-model="item.state"
                dense
              ></v-select>
            </template>
            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length" class="py-5">
              <p>
                <span class="grey--text text--darken-1">姓名：</span>
                {{ item.name }}
              </p>
              <p>
                <span class="grey--text text--darken-1">電話：</span>
                {{ item.phone }}
              </p>
              <p>
                <span class="grey--text text--darken-1">地址：</span>
                {{ item.address }}
              </p>
              <p>
                <span class="grey--text text--darken-1">付款方式：</span>
                {{ item.pay }}
              </p>
              <p>
                <span class="grey--text text--darken-1">留言：</span>
                {{ item.message }}
              </p>
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
  tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, .06) !important;
  }

}
</style>
<script>
export default {
  data () {
    return {
      state: ['待發貨', '已出貨', '待收貨', '已結單'],
      expanded: [],
      orders: [],
      idx: -1,
      headers: [
        { text: '訂單單號', align: 'start', value: 'orders', width: ' 10%' },
        { text: '使用者帳號', value: 'user', align: 'center', sortable: false, width: '10%' },
        { text: '已成立時間', value: 'time', align: 'center', width: '20%' },
        { text: '總金額', value: 'total', align: 'center', width: '15%' },
        { text: '商品', value: 'products', align: 'center', width: '20%' },
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
        order.total = order.products.reduce((accu, curr) => {
          return accu + curr.quantity * curr.product.price
        }, 0)
        return order
      })
    } catch (error) {
      console.log(error)
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得訂單資料失敗'
      })
    }
  },
  methods: {
    formatTime (date) {
      return this.$date.formatDistanceToNow(new Date(date.date), {
        locale: this.$date.locales.zhTW,
        addSuffix: true
      })
    },
    async statechange (id) {
      this.idx = this.orders.findIndex(order => order._id === id)
      try {
        await this.api.post('/orders/update', { id: this.orders[this.idx]._id, state: this.orders[this.idx].state }
          , {
            headers: {
              authorization: 'Bearer ' + this.admin.token
            }
          })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    }
  }
}
</script>
