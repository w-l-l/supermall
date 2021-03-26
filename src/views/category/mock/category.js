// 模拟商品分类数据
export function getGoodsCategory() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { title: '正在流行' },
        { title: '上衣' },
        { title: '裤子' },
        { title: '裙子' },
        { title: '内衣' },
        { title: '女鞋' },
        { title: '男友' },
        { title: '包包' },
        { title: '运动' },
        { title: '配饰' },
        { title: '美妆' },
        { title: '个护' }
      ])
    }, Math.ceil(Math.random() * 2) * 1000)
  })
}
