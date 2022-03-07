<template>
  <div id="addproduct">
    <v-dialog v-model="parentdialog" persistent >
      <section class="grey lighten-4 py-8">
        <div class="d-flex justify-end pe-6 pb-2">
          <v-btn icon>
            <v-icon large @click="$emit('closedialog')">mdi-close</v-icon>
          </v-btn>
        </div>
        <v-container>
          <v-row class="justify-center">
            <v-col cols="12">
                <v-card>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="6" class="text-h3 text--darken-3 light-green--text font-weight-bold" >{{form._id.length > 0 ? '編輯最新消息' : '新增最新消息'}}</v-col>
                        <v-col cols="6">
                          <v-switch
                            v-model="form.show"
                            label="最新消息是否上架"
                          ></v-switch>
                        </v-col>
                        <v-col
                          cols="12"
                        >
                          <v-text-field
                            :rules="[rules.required]"
                            v-model="form.name"
                            label="請輸入標題"
                            type="string"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          md="6"
                        >
                          <span class="text-h5 font-weight-bold light-green--text text--darken-3">最新消息內文</span>
                          <v-textarea
                            v-model="form.content"
                            class="mt-6"
                            rows="8"
                            outlined
                            placeholder="請輸入最新消息內文"
                            :rules="[rules.required]"
                            name="input-7-4"
                            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                          ></v-textarea>
                          <v-card-subtitle>＊最新消息內文使用分行分隔</v-card-subtitle>
                        </v-col>
                        <v-col
                          cols="12"
                          md="6"
                        >
                          <span class="text-h5 font-weight-bold light-green--text text--darken-3">最新消息注意事項</span>
                          <v-textarea
                            v-model="form.notice"
                            class="mt-6"
                            rows="8"
                            outlined
                            placeholder="請輸入最新消息注意事項"
                            name="input-7-4"
                            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                          ></v-textarea>
                          <v-card-subtitle>＊最新消息注意事項使用分行分隔</v-card-subtitle>
                        </v-col>
                        <v-col cols="12">
                          <p class="text-h5 font-weight-bold light-green--text text--darken-3">圖片上傳</p>
                          <img-inputer v-model="form.image"
                          accept="image/*"
                          bottom-text="點選或拖曳圖片修改"
                          hover-text="點選或拖曳圖片修改"
                          placeholder="點選或拖曳圖片修改"
                          exceed-size-text="檔案大小不能超過"
                          :maxSize = " 1024"
                          ></img-inputer>
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
<script>
export default {
  data () {
    return {
      submitBtnDisabled: false,
      cancelBtnDisabled: false,
      news: [],
      form: {
        name: '',
        content: '',
        notice: '',
        image: null,
        show: false,
        _id: ''
      },
      rules: {
        required: value => !!value || '此為必填欄位'
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
        content: '',
        notice: '',
        image: null,
        show: false,
        _id: ''
      }
      this.$emit('closedialog')
    },
    async submitForm (event) {
      event.preventDefault()
      if (!this.form.name || !this.form.content) {
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
      try {
        if (this.form._id.length === 0) {
          const { data } = await this.api.post('/news', fd, {
            headers: {
              authorization: 'Bearer ' + this.admin.token
            }
          })
          this.news.push(data.result)
        } else {
          const { data } = await this.api.patch('/news/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.admin.token
            }
          })
          this.news[this.form.idx] = { ...this.form, image: data.result.image }
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
        name: '',
        content: '',
        notice: '',
        image: null,
        show: false,
        _id: ''
      }
    },
    editform (id) {
      const idx = this.news.findIndex(newsdata => newsdata._id === id)
      this.form = { ...this.news[idx], image: null }
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/news/all', {
        headers: {
          authorization: 'Bearer ' + this.admin.token
        }
      })
      this.news = data.result
      this.$emit('news', this.news)
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
