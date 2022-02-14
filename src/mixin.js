export default {
  computed: {
    user () {
      return this.$store.getters['user/user']
    },
    admin () {
      return this.$store.getters['admin/admin']
    }
  }
}
