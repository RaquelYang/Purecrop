<template>
  <div id="userinfo">
    <v-dialog v-model="parentdialog" persistent >
      <section class="grey lighten-4 py-8">
        <div class="d-flex justify-end pe-6 pb-2">
          <v-btn icon>
            <v-icon large @click="$emit('closedialog')">mdi-close</v-icon>
          </v-btn>
        </div>
        <v-container>
          <v-row class="justify-center">
            <v-col cols="11" lg="11">
                <v-card>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="6" class="text-h3" >{{form._id.length > 0 ? '編輯資料' : '新增資料'}}</v-col>
                        <v-col
                          cols="12"
                          md="12"
                          xl="12"
                        >
                          <span class="text-h5 font-weight-bold light-green--text text--darken-3">商品規格</span>
                          <v-text-field
                            v-model="form.spec.origin"
                            label="產地"
                            type="string"

                          ></v-text-field>
                          <v-text-field
                            v-model="form.spec.type"
                            label="食物種類"
                            type="string"

                          ></v-text-field>
                          <v-text-field
                            v-model="form.spec.content"
                            label="內容物/成分"
                            type="string"

                          ></v-text-field>
                          <v-text-field
                            v-model="form.spec.from"
                            label="出貨地"
                            type="string"

                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          md="6"
                          xl="8"
                        >
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="text-h5 white--text px-5 mx-5 my-5"
                      large
                      :disabled="cancelBtnDisabled"
                      color="red darken-1"
                      @click="cancelForm"
                    >
                      取消
                    </v-btn>
                    <v-btn
                      class="text-h5 px-5 mx-5 my-5"
                      large
                      :disabled="submitBtnDisabled"
                      color="success darken-1"
                      @click="submitForm"
                    >
                      {{form._id.length > 0 ? '編輯' : '新增'}}
                    </v-btn>
                  </v-card-actions>
                </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-dialog>
  </div>
</template>
<style>
/* @import "../scss/variable.scss"; */
/* @import "../scss/mixins/rwd.scss"; */
@include lg{
#footer{
    .contact{
      margin-left:5.5rem;
    }
  }
}
@include xl{
#footer{
    .contact{
      margin-left:11rem;
    }
  }
}
</style>
<script>

export default {
  data () {
    return {
      submitBtnDisabled: false,
      cancelBtnDisabled: false,
      products: [],
      form: {
        name: '',
        price: 0,
        spec: {
          origin: '',
          type: '',
          content: '',
          from: ''
        },
        description: '',
        image: null,
        sell: false,
        _id: ''
      },
      rules: {
        required: value => !!value || '此為必填欄位',
        min: value => value >= 0 || '價格需大於 0 元'
      }
    }
  },
  methods: {
    cancelForm (event) {
      if (this.cancelBtnDisabled) {
        event.preventDefault()
        return
      }
      this.form = {
        name: '',
        price: null,
        spec: {
          origin: '',
          type: '',
          content: '',
          from: ''
        },
        description: '',
        image: null,
        sell: false,
        _id: ''
      }
      this.$emit('closedialog')
    },
    async submitForm (event) {
      event.preventDefault()
      if (!this.form.name || !this.form.price || this.form.price < 0) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '缺少必填欄位'
        })
        return
      }
      this.cancelBtnDisabled = true
      this.submitBtnDisabled = true
      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          fd.append(key, this.form[key])
        }
      }
      for (const key in this.form.spec) {
        fd.append(`spec[${key}]`, this.form.spec[key])
      }

      try {
        if (this.form._id.length === 0) {
          const { data } = await this.api.post('/products', fd, {
            headers: {
              authorization: 'Bearer ' + this.admin.token
            }
          })
          this.products.push(data.result)
        } else {
          const { data } = await this.api.patch('/products/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.admin.token
            }
          })

          this.products[this.form.idx] = { ...this.form, image: data.result.image }
          this.$emit('changetable', data.result)
          this.$swal({
            icon: 'success',
            title: '成功',
            text: '編輯成功'
          })
        }
        this.$emit('closedialog')
        this.cancelBtnDisabled = false
        this.submitBtnDisabled = false
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
      this.submitBtnDisabled = false
    },
    openform () {
      this.form = {
        name: ' ',
        price: 1,
        spec: {
          origin: '',
          type: '',
          content: '',
          from: ''
        },
        description: '',
        image: null,
        sell: false,
        _id: ''
      }
    },
    editform (id) {
      const idx = this.products.findIndex(product => product._id === id)
      this.form = { ...this.products[idx], image: null }
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products/all', {
        headers: {
          authorization: 'Bearer ' + this.admin.token
        }
      })
      this.products = data.result
      this.$emit('products', this.products)
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  },
  props: ['parentdialog'],
  emits: ['closedialog']
}
</script>
