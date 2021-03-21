const SHOP_CAR = 'car'

// 保存购物车信息到本地
export function saveCarData(data) {
  localStorage.setItem(SHOP_CAR, JSON.stringify(data))
}

// 读取本地购物车信息
export function readCarData() {
  return JSON.parse(localStorage.getItem(SHOP_CAR)) || []
}
