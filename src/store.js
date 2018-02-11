import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'production',
  state: {
    navs: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'About',
        link: '/about'
      }
    ],
    links: [
      {
        name: 'Github',
        url: 'https://github.com/ruchern'
      },
      {
        name: 'Stack Overflow',
        url: 'https://stackoverflow.com/users/4031163/ru-chern-chong'
      }
  },
  mutations: {},
  actions: {}
})
