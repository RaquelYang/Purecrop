<template>
<div id="navbar">
  <nav>
    <v-app-bar  min-width="100vw" fixed :elevate-on-scroll="true" elevation="5" hide-on-scroll class="justify-end">
      <v-app-bar-nav-icon @click="sidebar=!sidebar" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-row>
        <v-toolbar-title tag="router-link" to="/" class="font-weight-bold light-green--text col-6 col-md-4">
            <span class="mr-2">Purecrop</span>
            <span>無疑農123</span>
            <span class="mx-2 font-weight-light">|</span>
            <span class="font-weight-light light-green--text subtitle-2 leghten-2">產地直送 品質無疑</span>
        </v-toolbar-title>
        <v-toolbar-items class="hidden-sm-and-down col-6 col-md-4 justify-center">
          <v-btn :ripple="false" plain :to="{name:'Home'}" text color="grey" class="text--darken-3 text-subtitle-1 navtitle">首頁</v-btn>
          <v-btn :ripple="false" plain :to="{name:'Brand'}" text color="grey" class="text--darken-3 text-subtitle-1 navtitle">品牌故事</v-btn>
          <v-btn :ripple="false" plain :to="{name:'NewsHome'}" text color="grey" class="text--darken-3 text-subtitle-1 navtitle">最新消息</v-btn>
          <v-btn :ripple="false" plain :to="{name:'ProductsHome'}" text color="grey" class="text--darken-3 text-subtitle-1 navtitle">小農產品</v-btn>
        </v-toolbar-items>
        <v-toolbar-items class="col-6 col-md-4 justify-end">
          <v-btn class="me-2" icon :ripple="false" plain to="/cart">
            <v-icon v-if="user.isLogin" class="light-green--text icon">mdi-account-circle-outline </v-icon>
          </v-btn>
          <v-btn class="me-2" icon :ripple="false" plain to="/cart">
          <v-icon class="light-green--text icon">mdi-cart-arrow-down</v-icon>
          <v-badge color="red" :content="user.cart"
          offset-x="12" offset-y="-3" v-if="user.cart">
          </v-badge>

          </v-btn>
          <v-btn class="me-8" icon :ripple="false" plain>
            <v-icon v-if="!user.isLogin"
              class="light-green--text icon"
              @click="parentdialog=true"
              >mdi-login</v-icon>
            <v-icon v-if="user.isLogin"
              class="light-green--text icon"
              @click="logout"
              >mdi-logout</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer  v-model="sidebar" disable-resize-watcher app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            無疑農
          </v-list-item-title>
          <v-list-item-subtitle>
            產地直送 | 品質無疑
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list flat nav>
        <v-list-item-group>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>
              mdi-view-dashboard
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content class="px-4">
            首頁
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>
              mdi-view-dashboard
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content class="px-4">
            首頁
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>
              mdi-view-dashboard
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content class="px-4">
            首頁
          </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
    <LoginSignup :parentdialog="parentdialog" @closedialog="parentdialog=false"/>
</div>
</template>

<style lang="scss">
#navbar{
  z-index: 99999;
  .navtitle{
    transition: .15s;
    &:hover{
      color: #8BC34A !important;
      // font-size: 600;
      transform: scale(1.05) translateY(-2px);
    }
  }
  .v-btn__content {
  opacity: 1 !important;
  i{
    &:hover{
      transform: scale(1.05) translateY(-2px);
    }
  }
  }
  a{
    text-decoration: none;
  }
}

</style>

<script>
import LoginSignup from '@/components/LoginSignup.vue'
export default {
  data () {
    return {
      sidebar: false,
      parentdialog: false
    }
  },
  components: { LoginSignup },
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
    }
  }
}
</script>
