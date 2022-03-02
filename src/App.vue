<template>
  <v-app id="app">
    <v-main>
      <router-view :key='$route.fullPath'/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      sidebar: false
    }
  },
  async created () {
    this.$store.dispatch('user/getInfo')
    this.$store.dispatch('admin/getInfo')
  }
}
</script>
