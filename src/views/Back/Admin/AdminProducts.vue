<template>
<div id="AdminProducts">
  <h2 class="py-10 text-center text-h2 font-weight-medium text--darken-2 light-green--text">商品管理</h2>
  <v-container>
    <v-row>
      <v-col cols="10" class="px-0 mx-auto">
        <v-data-table
          :headers="headers"
          :items="products"
        >
          <template v-slot:top>
            <v-btn large @click="addproduct"  color="light-green darken-2" class="font-weight-medium white--text text-h5 mb-8">新增商品</v-btn>
          </template>
          <template v-slot:item.image="{ item }">
          <img v-if="item.image" :src="item.image"/>
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
              <v-btn color="light-green darken-2 white--text" class="mr-md-2"
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
  @products='product' ref="AddProduct" @changetable="changetable"/>
</div>
</template>
<style lang="scss">
#AdminProducts{
  img{
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: middle;
    padding: 10px 0;
  }
  thead span{
    font-size: 2rem;
  }
  tbody td{
    font-size: 1.4rem;
  }
}
</style>
<script>
import AddProduct from '@/components/AddProduct.vue'
export default {
  data () {
    return {
      parentdialog: false,
      products: [],
      idx: -1,
      headers: [
        {
          text: '產品名稱', align: 'start', value: 'name', width: '30%'
        },
        { text: '商品圖片', value: 'image', align: 'center', sortable: false, width: '15%' },
        { text: '價格', value: 'price', align: 'center', width: '20%' },
        { text: '是否上架', value: 'sell', width: '15%' },
        { text: '操作', value: 'action', align: 'center', width: '20%', sortable: false }
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
    async deleteProduct (id) {
      this.idx = this.products.findIndex(product => product._id === id)
      try {
        await this.api.delete('/products/' + this.products[this.idx]._id, {
          headers: {
            authorization: 'Bearer ' + this.admin.token
          }
        })
        this.products.splice(this.idx, 1)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '刪除成功'
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    },
    async switchbtn (id) {
      this.idx = this.products.findIndex(product => product._id === id)
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
    },
    changetable (data) {
      console.log(data)
      const idx = this.products.findIndex(product => product._id === data._id)
      this.products[idx] = data
      this.products.push({})
      this.products.pop()
    }
  },
  components: { AddProduct }
}
</script>
