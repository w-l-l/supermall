// 模拟商品数据
export function mockGoodsList(type, page) {
  page = 1
  const goods = {
    pop: {
      src: 'https://s3.mogucdn.com/mlcdn/c45406/170901_0f2ej9bfcd1a2hla3934lh81j8792_468x702.jpg_280x374.v1cAC.40.webp',
      title: 'the SAEM得鲜按压口红，用多少拧多少',
      price: 69,
      cfav: 9
    },
    new: {
      src: 'https://s2.mogucdn.com/mlcdn/c45406/180921_35985843l3g421leh4a8d22b9dgj5_640x960.jpg_360x480.v1cAC.40.webp',
      title: '秋装新款韩版背心针织毛衣马甲长袖衬衫打底裤三件套省心套装',
      price: 75.72,
      cfav: 88
    },
    sell: {
      src: 'https://s2.mogucdn.com/mlcdn/c45406/200325_456h2llfif520a1354ce2dea8i3ic_640x960.jpg_360x480.v1cAC.40.webp',
      title: '限定21色眼影高光盘显色修容哑光珠光',
      price: 32,
      cfav: 999
    }
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          list: new Array(page * 10).fill(goods[type])
        }
      })
    }, Math.ceil(Math.random()*3) * 1000)
  })
}