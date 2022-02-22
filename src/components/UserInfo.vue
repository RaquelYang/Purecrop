<template>
  <div id="userinfo">
    <v-form v-model="valid">
      <v-dialog v-model="parentdialog" persistent class="dialog" max-width="500px">
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

                          <v-col cols="12" class="text-h3 font-weight-bold light-green--text text--darken-3" >寄送資訊</v-col>
                          <v-col
                            cols="12"
                            md="12"
                            xl="12"
                          >

                            <v-text-field
                              v-model="form.name"
                              :rules="[rules.required]"
                              label="姓名"
                              type="string"
                              required
                            ></v-text-field>
                            <v-text-field
                              v-model="form.phone"
                              :rules="[rules.required,rules.phoneValidator]"
                              label="電話"
                              type="string"
                              required
                            ></v-text-field>
                            <v-text-field
                              v-model="form.address"
                              :rules="[rules.required]"
                              label="地址"
                              type="string"
                              required
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
                        color="red darken-1"
                        @click="cancelForm"
                      >
                        取消
                      </v-btn>
                      <v-btn
                        class="text-h5 px-5 mx-5 my-5"
                        large
                        color="success darken-1"
                        @click="submitForm"
                        :disabled="!valid"
                      >
                        送出
                      </v-btn>
                    </v-card-actions>
                  </v-card>
              </v-col>
            </v-row>
          </v-container>
        </section>
      </v-dialog>
    </v-form>

  </div>
</template>
<style lang="scss">
@import "../scss/variable.scss";
@import "../scss/mixins/rwd.scss";

@include lg{
#userinfo{
    .v-dialog{
      width: 50%;
    }
  }
}
@include xl{
#userinfo{
    .v-dialog{
      width: 50%;
    }
  }
}
#userinfo{
    .v-dialog{
      width: 50%;
    }
  }
</style>
<script>
import validator from 'validator'
export default {
  data () {
    return {
      form: {
        name: '',
        address: '',
        phone: ''
      },
      valid: true,
      rules: {
        required: value => !!value || '此為必填欄位',
        phoneValidator: value => this.form.phone.length === 0 ? '' : validator.isMobilePhone(this.form.phone, 'zh-TW') || '行動電話格式錯誤'
      }
    }
  },
  methods: {
    cancelForm (event) {
      this.form = {
        name: '',
        address: '',
        phone: null
      }
      this.$emit('closedialog')
    },
    async submitForm (event) {
      event.preventDefault()
      if (!this.form.name || !this.form.address || !this.form.phone) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '缺少必填欄位'
        })
        return
      }
      this.$emit('changetable', this.form)
      this.$swal({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
      this.$emit('closedialog')
    }
  },
  props: ['parentdialog'],
  emits: ['closedialog', 'changetable']
}
</script>
