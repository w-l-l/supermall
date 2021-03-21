import * as types from './mutations-types'

import { saveCarData } from 'common/saveLocal'

const actions = {
  addToCart ({ state, commit }, info) {
    return new Promise(resolve => {
      // 购物车是否存在当前商品
      const index = state.cartList.findIndex(item => item.id === info.id)
      if (index !== -1) {
        commit(types.INCREMENT_COUNT, index)
      } else {
        info.count = 1
        info.checked = true
        commit(types.ADD_TO_CART, info)
      }
      // 将购物车信息保存到本地
      saveCarData(state.cartList)
      resolve()
    })
  }
}

export default actions
