import * as types from './mutations-types'

import { saveCarData } from 'common/saveLocal'

const actions = {
  addToCart({ state, commit }, info) {
    // 购物车是否存在当前商品
    const index = state.cartList.findIndex(item => item.id === info.id)
    if (index !== -1) {
      commit(types.INCREMENT_COUNT, index)
    } else {
      info.count = 1
      info.checked = true
      commit(types.ADD_TO_CART, info)
    }
    saveCarData(state.cartList)
  }
}

export default actions
