<template>
  <div id="AdminLogin" class="d-flex justify-center align-center">
    <v-col></v-col>
    <v-col cols="12" sm="6">
      <v-card-text>
        <p class="text-h4 text-center pb-5">管理員登入</p>
        <v-form @submit.prevent="adminslogin" v-model="valid">
          <v-text-field
            dense outlined label="請輸入管理員帳號" type="email"
            v-model="adminlogin.account" clearable prepend-icon="mdi-account"
            required/>
          <v-text-field
            prepend-icon="mdi-lock" dense outlined
            :type="show1 ? 'text' : 'password'"
            hint="密碼為 4 - 20 個字"
            v-model="adminlogin.password" label="請輸入密碼"
            @click:append="show1 = !show1"
            required />
            <v-btn block :ripple="false" class="light-green darken-3 white--text"
            type="submit" :disabled="!valid">登入</v-btn>
        </v-form>
    </v-card-text>
    </v-col>
    <v-col></v-col>
  </div>
</template>
<style lang="scss">
#AdminLogin{
  width: 100vw;
  height: 100vh;
}
</style>
<script>
export default {
  data () {
    return {
      adminlogin: {
        account: '',
        password: ''
      },
      valid: true,
      show1: false
    }
  },
  methods: {
    adminslogin () {
      this.$store.dispatch('admin/adminlogin', this.adminlogin)
    }
  }
}
</script>
