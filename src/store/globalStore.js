import { defineStore } from 'pinia'
import request from '../request'
import createMsg from '@/utils/createMessage'

export const useStore = defineStore('global', {
  state: () => ({
    token: localStorage.getItem('GYM_TOKEN') || undefined,
    isLoading: false,
    isLogin: false
  }),
  actions: {
    /**
     * 登录模块
     * @param {*} username
     * @param {*} password
     */
    async login(username, password) {
      try {
        this.isLoading = true
        const { data } = await request.post({
          url: '/api/login',
          data: {
            username,
            password
          }
        })
        if (data) {
          this.token = data.token
          localStorage.setItem('GYM_TOKEN', data.token)
          this.isLogin = true
          this.isLoading = false
          createMsg('SUCCESS', '登录成功!')
        } else {
          throw new Error('登入失败!')
        }
        return true
      } catch (error) {
        createMsg('ERROR', error.message)
        this.isLoading = false
        return false
      }
    },

    /**
     * 验证token权限
     * @param {*} token
     */
    async authVerify() {
      try {
        const { data } = await request.request({
          url: '/api/login',
          method: 'get',
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
        if (data) {
          this.isLogin = true
        }
      } catch (error) {
        throw new Error(error.message)
      }
    }
  }
})
