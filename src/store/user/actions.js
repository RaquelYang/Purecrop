import { api } from '@/plugins/axios.js'
import swal from 'sweetalert2'
import router from '@/router'

export const login = async ({ commit }, loginform) => {
  try {
    const { data } = await api.post('/users/login', loginform)
    commit('login', data.result)
    // router.push('/').catch(() => {})
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

export const logout = async ({ commit, state }) => {
  try {
    await api.delete('users/logout', {
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
    if (router.currentRoute.meta.login) {
      router.push('/').catch(() => {})
    }
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
    const { data } = await api.get('/users/me', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('getInfo', data.result)
  } catch (error) {
    commit('logout')
  }
}

export const addCart = async ({ commit, state }, data) => {
  if (data.quantity <= 0) {
    swal.fire({
      icon: 'error',
      title: '錯誤',
      text: '請輸入正確數量',
      confirmButtonColor: '#8BC34A'
    })
    return
  }
  try {
    const { data: resData } = await api.post('/users/me/cart', data, {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('updateCart', resData.result)
    swal.fire({
      icon: 'success',
      title: '成功',
      text: '加入購物車',
      confirmButtonColor: '#8BC34A'
    })
  } catch (error) {
    swal.fire({
      icon: 'error',
      title: '錯誤',
      text: '加入購物車失敗'
    })
  }
}

export const orderCart = ({ commit, state }) => {
  commit('orderCart')
}
