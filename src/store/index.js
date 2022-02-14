import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/index.js'
import admin from './admin/index.js'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    admin
  },
  plugins: [createPersistedState({
    key: 'purecrop_user',
    paths: ['user.token']
  }), createPersistedState({
    key: 'purecrop_admin',
    paths: ['admin.token']
  })]
})
