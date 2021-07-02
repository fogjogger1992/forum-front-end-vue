import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

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
  // 用來修改 state 的方法，用 commit 發動
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
  // 透過 API 請求資料，用 dispatch 發動
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        const { id, name, email, image, isAdmin } = data

        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin,
        })
      } catch (error) {
        console.error(error)
      }
    },
  },
  // 拆檔
  modules: {},
})
