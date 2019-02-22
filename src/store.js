import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const pd = [
  {
    vendor: 'Test Vendor',
    requestStartDate: new Date('2019-01-22'),
    requestEndDate: new Date('2019-01-23'),
    payStatus: '',
    mediaName: 'Test Media Name',
    itemName: 'Test Item',
    channel: '0',
    registeredStartDate: new Date('2019-01-25'),
    registeredEndDate: new Date('2019-01-26'),
    price: 123,
    paidAmount: 109,
  },
]

export default new Vuex.Store({
  state: {
    error: false,
    message: '',
    form: '',
    vendorOptions: [],
    payStatusOptions: [],
    loading: false,
    paymentData: pd,
  },
  mutations: {
    error(state, message) {
      state.error = true
      state.message = message
    },
  },
  actions: {},
})
