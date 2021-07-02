import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 放置資料，每個 Vue 元件都可以使用
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false,
    },
    isAuthenticated: false,
  },
  // 用來修改 state 的方法
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // Get currentUser from API
        ...currentUser,
      }
      state.isAuthenticated = true
    },
  },
  // 透過 API 請求資料
  actions: {},
  // 拆檔
  modules: {},
})
