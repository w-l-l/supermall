import * as types from './mutations-types'

const mutations = {
  [types.ADD_TO_CART](state, goods) {
    state.cartList.push(goods)
  },
  [types.INCREMENT_COUNT](state, index) {
    state.cartList[index].count +=1
  }
}

export default mutations
