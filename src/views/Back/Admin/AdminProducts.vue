<template>
<div id="AdminProducts">
  <h2 class="pt-5 pb-3 text-center">商品管理123</h2>
  <v-container>
    <v-row>
      <v-col cols="10" class="px-0 mx-auto">
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="products"

        >
          <template v-slot:top>
            <v-btn large @click="addproduct"  color="success darken-1" class="text-h5 mb-8">新增商品</v-btn>
          </template>
          <template v-slot:item.image="{ item }">
          <img v-if="item.image" :src="item.image" style="height: 100px" />
          </template>
          <template v-slot:item.price="{ item }">
          <div class="text-center">
            $&nbsp;{{ new Intl.NumberFormat('en-IN').format(item.price) }}
          </div>
          </template>
          <template v-slot:item.sell="{item}">
            <v-switch v-model="item.sell" @change="switchbtn(item._id)"></v-switch>
          </template>
          <template v-slot:item.action="{ item }">
              <v-btn color="light-green darken-2 white--text" class="mr-2"
              @click="editProduct(item._id)"
              >
                <v-icon>mdi-lead-pencil</v-icon>
              </v-btn>
              <v-btn color="red darken-1 white--text" @click="deleteProduct(item._id)">
                <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
  <AddProduct :parentdialog="parentdialog" @closedialog="parentdialog=false"
  @products='product' ref="AddProduct" />
</div>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue'
export default {
  data () {
    return {
      parentdialog: false,
      products: [],
      selected: [],
      idx: -1,
      headers: [
        {
          text: '產品名稱', align: 'start', sortable: false, value: 'name', width: '30%'
        },
        { text: '商品圖片', value: 'image', align: 'center', sortable: false, width: '15%' },
        { text: '價格', value: 'price', align: 'center', width: '20%' },
        { text: '是否上架', value: 'sell', width: '15%' },
        { text: '操作', value: 'action', align: 'center', width: '20%' }
      ]

    }
  },
  methods: {
    product (data) {
      this.products = data
    },
    addproduct () {
      this.parentdialog = true
      this.$refs.AddProduct.openform()
    },
    editProduct (id) {
      this.parentdialog = true
      this.$refs.AddProduct.editform(id)
      this.idx = this.products.findIndex(product => product._id === id)
    },
    deleteProduct (id) {

    },
    async switchbtn (id) {
      this.idx = this.products.findIndex(product => product._id === id)
      console.log(this.idx)
      try {
        await this.api.post('/products/update', { id: this.products[this.idx]._id, sell: this.products[this.idx].sell }
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
  },
  components: { AddProduct }
}
</script>
