import { api } from '@/plugins/axios.js'
import swal from 'sweetalert2'
import router from '@/router'

export const adminlogin = async ({ commit }, adminlogin) => {
  try {
    const { data } = await api.post('/admins/login', adminlogin)
    commit('login', data.result)
    router.push('/admin').catch(() => {})
    swal.fire({
      icon: 'success',
      title: '成功',
      text: '登入成功',
      confirmButtonColor: '#8BC34A'
    })
  } catch (error) {
    swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.response.data.message,
      confirmButtonColor: '#8BC34A'
    })
  }
}

export const adminlogout = async ({ commit, state }) => {
  try {
    await api.delete('admins/logout', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    swal.fire({
      icon: 'success',
      title: '成功',
      text: '登出成功',
      confirmButtonColor: '#8BC34A'
    })
    commit('logout')
    router.push('/').catch(() => {})
  } catch (error) {
    swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.response.data.message,
      confirmButtonColor: '#8BC34A'
    })
  }
}

export const getInfo = async ({ commit, state }) => {
  if (state.token.length === 0) return
  try {
    const { data } = await api.get('/admins/me', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('getInfo', data.result)
  } catch (error) {
    commit('logout')
  }
}

export const logout = async ({ commit, state }) => {
  try {
    await api.delete('admins/logout', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    swal.fire({
      icon: 'success',
      title: '成功',
      text: '登出成功',
      confirmButtonColor: '#8BC34A'
    })
    commit('logout')
    router.push('/')
  } catch (error) {
    swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.response.data.message,
      confirmButtonColor: '#8BC34A'
    })
  }
}
