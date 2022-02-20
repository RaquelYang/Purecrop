<template>
  <div id="loginsignup">
    <v-dialog v-model="parentdialog" persistent max-width="600px">
      <section class="grey lighten-4 py-8 modalheight">
        <div class="d-flex justify-end pe-6 pb-2">
          <v-btn icon>
            <v-icon large @click="$emit('closedialog')">mdi-close</v-icon>
          </v-btn>
        </div>
        <v-container>
          <v-row class="justify-center">
            <v-col cols="10" lg="10">
              <v-card flat outlined>
                <v-tabs v-model="tab" active-class="white" height="40" background-color="grey lighten-2" fixed-tabs hide-slider>
                <v-tab class="text-h6">登入</v-tab>
                <v-tab class="text-h6">註冊</v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                  <!-- 登入 -->
                  <v-tab-item :value="0" style="height:350px">
                    <v-card-text>
                      <v-form @submit.prevent="login" v-model="valid">
                        <v-text-field
                          dense outlined label="請輸入電子郵件" type="email"
                          v-model="loginform.email" clearable prepend-icon="mdi-email"
                          :rules="[rules.required,rules.loginemailValidator]"
                          required/>
                        <v-text-field
                          prepend-icon="mdi-lock" dense outlined
                          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min,rules.max]"
                          :type="show2 ? 'text' : 'password'"
                          hint="密碼為 4 - 20 個字"
                          v-model="loginform.password" label="請輸入密碼"
                          @click:append="show2 = !show2"
                          required />
                        <v-simple-table>
                          <tbody>
                            <tr>
                              <td width="33%">
                              </td>
                              <td width="33%" class="text-center">
                                <v-btn :ripple="false" class="light-green darken-3 white--text"
                                type="submit" :disabled="!valid">登入</v-btn>
                              </td>
                              <td width="33%" class="forgetpassword">
                                <v-btn :ripple="false" text class="light-green--text text--darken-3 text-overline">忘記密碼?</v-btn>
                              </td>
                            </tr>
                          </tbody>
                        </v-simple-table>
                      </v-form>
                    </v-card-text>
                  </v-tab-item>
                  <!-- 註冊 -->
                  <v-tab-item :value="1" style="height:350px">
                    <v-card-text>
                      <v-form @submit.prevent="register" v-model="valid">
                        <v-text-field
                          dense outlined label="請輸入電子郵件" type="email"
                          v-model="form.email" clearable prepend-icon="mdi-email"
                          :rules="[rules.required,rules.emailValidator]"
                          required/>
                        <v-text-field
                          prepend-icon="mdi-lock" dense outlined
                          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min,rules.max]"
                          :type="show2 ? 'text' : 'password'"
                          hint="密碼為 4 - 20 個字"
                          v-model="form.password" label="請輸入密碼"
                          @click:append="show2 = !show2"
                          required />
                        <v-text-field
                          prepend-icon="mdi-lock" dense outlined
                          :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show3 ? 'text' : 'password'"
                          v-model="form.newPassword" label="請再次輸入密碼"
                          @click:append="show3 = !show3"
                          :rules="[rules.required,rules.passwordConfirmation]"
                          required />
                        <v-row class="justify-center py-5">

                          <v-btn :ripple="false" class="light-green darken-3 white--text"
                          type="submit" :disabled="!valid"
                          >註冊</v-btn>
                        </v-row>
                      </v-form>
                    </v-card-text>
                  </v-tab-item>
                </v-tabs-items>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-dialog>
  </div>
</template>
<style lang="scss">
  #loginsignup{
    .v-application .text-overline{
      letter-spacing: 0px !important;
    }
    .v-dialog{
      .container{
        height: 500px !important;
      }
    }
    .theme--light.v-data-table{
      background-color: transparent !important;
    }
  }
</style>
<script>
import validator from 'validator'
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        newPassword: ''
      },
      loginform: {
        email: '',
        password: ''
      },
      tab: 0,
      valid: true,
      show1: false,
      show2: false,
      show3: false,
      rules: {
        required: value => !!value || '此為必填欄位',
        min: v => v.length >= 4 || '最少須 4 個字',
        max: v => v.length <= 16 || '最多為 16 個字',
        passwordConfirmation: v => v === this.form.password || '密碼不一致',
        emailValidator: v => this.form.email.length === 0 ? '' : validator.isEmail(this.form.email) || '電子郵件格式錯誤',
        loginemailValidator: v => this.loginform.email.length === 0 ? '' : validator.isEmail(this.loginform.email) || '電子郵件格式錯誤'
      }
    }
  },
  props: ['parentdialog'],
  emits: ['closedialog'],
  methods: {
    async register () {
      try {
        await this.api.post('/users', this.form)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '註冊成功'
        })
        this.$emit('closedialog')
        // this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    },
    login () {
      this.$store.dispatch('user/login', this.loginform).then(() => {
        this.$emit('closedialog')
      })
    }
  }
}
</script>
