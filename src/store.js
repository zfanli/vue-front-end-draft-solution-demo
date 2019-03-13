import Vue from 'vue'
import Vuex from 'vuex'
// import { api } from './App.config'
// import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: false,
    message: '',
    form: '',
    vendorOptions: [],
    payStatusOptions: [
      {
        label: 'Unpaid',
        value: '0',
      },
      {
        label: 'Paid',
        value: '1',
      },
    ],
    loading: false,
    paymentData: [],
  },
  mutations: {
    // for test error box,
    // trigger display of error box
    error(state, message) {
      if (state.error) {
        state.error = false
      } else {
        state.error = true
        state.message = message
      }
    },
    paymentData(state, pd) {
      state.paymentData = pd
    },
    loading(state, flag) {
      state.loading = flag
    },
  },
  actions: {
    getPaymentData({ commit }, filter) {
      // Axios.get(api.paymentData, {
      //   params: filter,
      // }).then(({ data }) => {
      //   const result = {}
      //   data.map((t, i) => (result[i] = t))
      //   commit('paymentData', result)
      //   commit('loading', false)
      // })
      const data = require('./assets/data.json')
      const result = {}

      console.log(filter)

      data.map((t, i) => (result[i] = t))
      commit('paymentData', result)
      commit('loading', false)
    },
  },
})
