<template>
<div id="AdminSwipers">
  <v-container class="mb-16">
    <v-row class="justify-center">
      <v-col cols="10" class="text-center">
        <h2 class="text-h3 mb-10">商品輪播圖</h2>
        <v-btn large text @click="openproductcarousel" class="text-h5 light-green darken-2 white--text font-weight-bold">
          新增圖片
        </v-btn>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="text-h5">新增輪播圖圖片</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <img-inputer
                      theme="dark"
                      v-model="productcarousel"
                      accept="image/*"
                      bottom-text="點選或拖曳圖片修改"
                      hover-text="點選或拖曳圖片修改"
                      placeholder="點選或拖曳圖片修改"
                      exceed-size-text="檔案大小不能超過"
                      :maxSize = " 1024"
                    ></img-inputer>
                    <small>圖片尺寸 1920px*900px</small>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="white" class="red text-h5 darken-1 mx-3 my-3" large text
              @click="dialog = false" :disabled="cancelBtnDisabled">
                取消
              </v-btn>
              <v-btn color="white" class="light-green darken-2 text-h5 mx-3 my-3" large text @click="addProductCarousel" :disabled="submitBtnDisabled">
                新增
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col cols="10">
        <v-row>
          <v-col cols="4" v-for="(productcarousel,index) in productscarousel" :key="index">
            <v-card height="300px">
              <v-img :src="productcarousel.file" class="rounded" height="220px"></v-img>
              <v-divider class="mx-2 my-2"></v-divider>
              <v-card-actions class="d-flex justify-center">
                <v-btn icon large class="orange--text text--darken-4 text-center" @click="deleteproductCarousel(productcarousel._id)">
                  <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="10" class="text-center">
        <h2 class="text-h3 mb-10 mt-16">最新消息輪播圖</h2>
        <v-dialog v-model="dialog1" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
              <v-btn @click="newcarousel=''" large text v-bind="attrs" v-on="on" class="text-h5 light-green darken-2 white--text font-weight-bold">
                新增圖片
              </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">新增輪播圖圖片</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <img-inputer
                      theme="dark"
                      v-model="newcarousel"
                      accept="image/*"
                      bottom-text="點選或拖曳圖片修改"
                      hover-text="點選或拖曳圖片修改"
                      placeholder="點選或拖曳圖片修改"
                      exceed-size-text="檔案大小不能超過"
                      :maxSize = " 1024"
                    ></img-inputer>
                    <small>圖片尺寸 1920px*900px</small>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="white" class="red text-h5 darken-1 mx-3 my-3" large text
              @click="dialog1 = false" :disabled="cancelBtnDisabled">
                取消
              </v-btn>
              <v-btn color="white" class="light-green darken-2 text-h5 mx-3 my-3" large text @click="addNewsCarousel" :disabled="submitBtnDisabled">
                新增
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col cols="10">
        <v-row>
          <v-col cols="4" v-for="(newcarousel,index) in newscarousel" :key="index">
            <v-card height="300px">
              <v-img :src="newcarousel.file" class="rounded" height="220px"></v-img>
              <v-divider class="mx-2 my-2"></v-divider>
              <v-card-actions class="d-flex justify-center">
                <v-btn icon large class="orange--text text--darken-4 text-center" @click="deletenewsCarousel(newcarousel._id)">
                  <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>
<script>
export default {
  data () {
    return {
      submitBtnDisabled: false,
      cancelBtnDisabled: false,
      productscarousel: [],
      newscarousel: [],
      productcarousel: '',
      newcarousel: '',
      dialog: false,
      dialog1: false
    }
  },
  async created () {
    this.getProduct()
  },
  methods: {
    async addProductCarousel () {
      const fd = new FormData()
      fd.append('image', this.productcarousel)
      this.submitBtnDisabled = true
      this.cancelBtnDisabled = true
      try {
        await this.api.post('/images/product', fd, {
          headers: {
            authorization: 'Bearer ' + this.admin.token
          }
        })
        this.dialog = false
        this.submitBtnDisabled = false
        this.cancelBtnDisabled = false
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '新增圖片成功'
        })
        this.getProduct()
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '新增圖片失敗'
        })
      }
    },
    async addNewsCarousel () {
      const fd = new FormData()
      fd.append('image', this.newcarousel)
      this.submitBtnDisabled = true
      this.cancelBtnDisabled = true
      try {
        await this.api.post('/images/news', fd, {
          headers: {
            authorization: 'Bearer ' + this.admin.token
          }
        })
        this.dialog1 = false
        this.submitBtnDisabled = false
        this.cancelBtnDisabled = false
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '新增圖片成功'
        })
        this.getProduct()
      } catch (error) {
        console.log(error)
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '新增圖片失敗'
        })
      }
    },
    async getProduct () {
      try {
        const { data } = await this.api.get('/images')
        console.log(data.result[0].productswiper)
        this.productscarousel = data.result[0].productswiper
        this.newscarousel = data.result[0].newsswiper
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '取得圖片失敗'
        })
      }
    },
    async deleteproductCarousel (id) {
      try {
        await this.api.delete('/images/product/' + id, {
          headers: {
            authorization: 'Bearer ' + this.admin.token
          }
        })
        // this.productscarousel.splice(index, 1)
        this.getProduct()
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '刪除圖片成功'
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '刪除圖片失敗'
        })
      }
    },
    async deletenewsCarousel (id) {
      try {
        await this.api.delete('/images/news/' + id, {
          headers: {
            authorization: 'Bearer ' + this.admin.token
          }
        })
        // this.productscarousel.splice(index, 1)
        this.getProduct()
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '刪除圖片成功'
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: '刪除圖片失敗'
        })
      }
    },
    openproductcarousel () {
      this.productcarousel = ''
      this.dialog = true
    }
  }
}
</script>
