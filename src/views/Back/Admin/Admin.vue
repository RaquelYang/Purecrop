<template>
  <div id="admin">
  <v-row>
    <v-col cols="2" class="px-0">
      <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 text-center light-green--text text--darken-2">
            無疑農 | 管理員
            <v-btn large icon @click="logout">
              <v-icon right large class="light-green--text text--darken-2">mdi-logout</v-icon>
            </v-btn>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon >
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
    </v-col>
    <v-col cols="10">
      <router-view/>
    </v-col>
  </v-row>

</div>
</template>

<script>
export default {
  data () {
    return {
      // { title: '最新消息管理', icon: 'mdi-newspaper-variant-outline', to: '/admin' },
      //  { title: '會員管理', icon: 'mdi-account-outline ', to: '/admin' }
      items: [
        { title: '商品管理', icon: 'mdi-corn', to: '/admin' },
        { title: '訂單管理', icon: 'mdi-clipboard-list-outline ', to: '/admin/orders' },
        { title: '輪播圖管理', icon: 'mdi-file-image-outline ', to: '/admin/swipers' }
      ],
      right: null
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('admin/logout')
    }
  }
}
</script>
