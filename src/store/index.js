import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

import { readCarData } from 'common/saveLocal'

Vue.use(Vuex)

const state = {
  cartList: readCarData() // 读取本地购物车信息
}

const store =  new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store
